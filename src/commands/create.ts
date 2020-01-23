import * as inquirer from 'inquirer'
import {Command, flags} from '@oclif/command'
import {fetchAuthors, createPost} from '../utils'
import {makePostQuestions} from '../lib/novela'
import {Post} from '../types'

export default class Create extends Command {
  static description = 'create a new post'

  static flags = {
    help: flags.help({char: 'h'}),
    filepath: flags.string({
      char: 'f',
      description: 'filepath for authors YAML file',
      default: `${process.cwd()}/content/authors/authors.yml`,
    }),
  }

  async run() {
    const {flags} = this.parse(Create)
    const authors = fetchAuthors(flags.filepath)
    const questions = makePostQuestions(authors)

    const contentPath = `${process.cwd()}/content`
    const post: Post = await inquirer.prompt(questions)
    // TODO: Give more feedback to user and handle errors
    await createPost(contentPath, post)
  }
}
