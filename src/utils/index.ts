import * as fs from 'fs'
import * as yaml from 'js-yaml'
import {Author, Post} from '../types'

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

const createPostDirectory = (post: Post) => {
  const formattedTitle = toKebabCase(post.title)
  const directoryName = `${post.date}-${formattedTitle}`
  // eslint-disable-next-line no-console
  console.log(`creating directory ${directoryName}`)
  // fs.mkdirSync()
}

const createPostMdxFile = (post: Post) => {
  // eslint-disable-next-line no-console
  console.log(`creating post mdx file for ${post.title}`)
}

export const createPost = (post: Post) => {
  createPostDirectory(post)
  createPostMdxFile(post)
}
