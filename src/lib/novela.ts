import {Author} from '../types'

const excerptValidator = async (input: string) => {
  return input.length < 140 || 'The excerpt should be less than 140 characters'
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
