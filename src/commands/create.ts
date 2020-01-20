import * as inquirer from 'inquirer'
import {Command, flags} from '@oclif/command'
import {fetchAuthors} from '../utils'
import {makePostQuestions} from '../lib/novela'

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

    const responses: any = await inquirer.prompt(questions)

    this.log(responses.title)
    this.log(responses.author)
    this.log(responses.date)
    this.log(responses.excerpt)
    this.log(responses.hero)
  }
}
