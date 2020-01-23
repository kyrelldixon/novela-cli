import * as fs from 'fs'
import * as yaml from 'js-yaml'
import {Author, Post} from '../types'
import {downloadUnsplashImage} from '../api'

export const fetchAuthors = (path: string) => {
  try {
    if (!fs.existsSync(path)) {
      throw new Error(`No file found at ${path}`)
    }

    const fileContents = fs.readFileSync(path, 'utf8')
    const authors: Author[] = yaml.safeLoad(fileContents)

    return authors
  } catch (error) {
    throw error
  }
}

// https://github.com/narative/gatsby-theme-novela/blob/master/%40narative/gatsby-theme-novela/src/utils/index.ts
const toKebabCase = (str: string): string => {
  return (str
  .match(/[A-Z]{2,}(?=[A-Z][a-z]+\d*|\b)|[A-Z]?[a-z]+\d*|[A-Z]|\d+/g) || [])
  .map(x => x.toLowerCase())
  .join('-')
}

export const getCurrentDate = () =>
  new Date().toISOString().slice(0, 10)

const createPostPath = (contentPath: string, post: Post) => {
  const formattedTitle = toKebabCase(post.title)
  const directoryName = `${post.date}-${formattedTitle}`
  const postPath = `${contentPath}/posts/${directoryName}`
  return postPath
}

const createPostDirectories = (postPath: string) => {
  const imagePath = `${postPath}/images`
  fs.mkdirSync(postPath)
  fs.mkdirSync(imagePath)
}

const createPostFrontMatter = (post: Post) => {
  const frontMatter = `---
title: ${post.title}
author: ${post.author}
date: ${post.date}
hero: ${post.hero}
excerpt: ${post.excerpt}
---
`

  return frontMatter
}

const createPostMdxFile = (postPath: string, frontMatter: string) => {
  const fileName = 'index.mdx'
  const path = `${postPath}/${fileName}`
  fs.writeFileSync(path, frontMatter)
}

const createPostImage = async (postPath: string) => {
  const fileName = 'hero.jpg'
  const path = `${postPath}/images/${fileName}`
  await downloadUnsplashImage(path)
}

export const createPost = async (contentPath: string, post: Post) => {
  const postPath = createPostPath(contentPath, post)
  const frontMatter = createPostFrontMatter(post)
  createPostDirectories(postPath)
  await createPostImage(postPath)
  createPostMdxFile(postPath, frontMatter)
}
