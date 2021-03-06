import * as path from 'path'
import * as fs from 'fs'
import {Author} from '../@types'
import {getCurrentDate} from '../utils'

const excerptValidator = async (input: string) => {
  if (!input) return 'The excerpt is required'
  return (input.length < 140) || 'The excerpt should be less than 140 characters'
}

// from https://stackoverflow.com/questions/18758772/how-do-i-validate-a-date-in-this-format-yyyy-mm-dd-using-jquery
const dateValidator = async (input: string) => {
  const errorMessage = 'Date should be a real date formatted as YYYY-MM-DD'
  const invalidFormatErrorMessage = 'Date should be formatted as YYYY-MM-DD'
  const invalidDateErrorMessage = 'Date is invalid'
  const regEx = /^\d{4}-\d{2}-\d{2}$/
  if (!input.match(regEx)) return invalidFormatErrorMessage
  const d = new Date(input)
  const dNum = d.getTime()
  if (!dNum && dNum !== 0) return invalidDateErrorMessage
  return (d.toISOString().slice(0, 10) === input) || errorMessage
}

const titleValidator = async (input: string) => {
  return Boolean(input) || 'The title is required'
}

const pathExistsValidator = async (input: string) => {
  if (!input) return 'Directory is required'
  const absolutePath = path.resolve(input)
  return fs.existsSync(absolutePath) || 'Directory does not exist'
}

export const makePostQuestions = (authors: Author[]) => [
  {
    name: 'title',
    message: 'Title',
    type: 'input',
    validate: titleValidator,
  },
  {
    name: 'author',
    message: 'Select an author',
    type: 'list',
    choices: authors,
  },
  {
    name: 'date',
    message: 'Date (YYYY-MM-DD)',
    validate: dateValidator,
    default: getCurrentDate(),
  },
  {
    name: 'excerpt',
    message: 'Excerpt (140 character limit)',
    validate: excerptValidator,
  },
  {
    name: 'hero',
    message: 'Hero Image',
    default: './images/hero.jpg',
  },
]

export const makeInitQuestions = (userConfig: any) => {
  const postQuestion: any = {
    name: 'contentPosts',
    message: 'Where is your Post data is located?',
    type: 'path',
    default: process.cwd(),
    validate: pathExistsValidator,
  }
  const authorQuestion: any = {
    name: 'contentAuthors',
    message: 'Where is your Author data is located?',
    type: 'path',
    default: process.cwd(),
    validate: pathExistsValidator,
  }

  if (userConfig.contentPosts) {
    postQuestion.default = userConfig.contentPosts
  }
  if (userConfig.contentAuthors) {
    authorQuestion.default = userConfig.contentAuthors
  }

  return [postQuestion, authorQuestion]
}
