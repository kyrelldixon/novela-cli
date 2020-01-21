import {Author} from '../types'

const excerptValidator = async (input: string) => {
  return input.length < 140 || 'The excerpt should be less than 140 characters'
}

// from https://stackoverflow.com/questions/18758772/how-do-i-validate-a-date-in-this-format-yyyy-mm-dd-using-jquery
const dateValidator = async (input: string) => {
  const errorMessage = 'Date should be a real date formatted as YYYY-MM-DD'
  const regEx = /^\d{4}-\d{2}-\d{2}$/
  if (!input.match(regEx)) return errorMessage  // Invalid format
  const d = new Date(input)
  const dNum = d.getTime()
  if (!dNum && dNum !== 0) return errorMessage // NaN value, Invalid date
  return (d.toISOString().slice(0, 10) === input) || errorMessage
}

export const makePostQuestions = (authors: Author[]) => [
  {
    name: 'title',
    message: 'Title',
    type: 'input',
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
  },
  {
    name: 'excerpt',
    message: 'Excerpt (140 character limit)',
    validate: excerptValidator,
  },
  {
    name: 'hero',
    message: 'Hero Image',
  },
]
