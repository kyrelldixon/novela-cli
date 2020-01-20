import {Author} from '../types'

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
  },
  {
    name: 'hero',
    message: 'Hero Image',
  },
]
