import {Command, flags} from '@oclif/command'
import {fetchAuthors} from '../utils'
import * as inquirer from 'inquirer'

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

    const questions: any = [
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

    const responses: any = await inquirer.prompt(questions)

    this.log(responses.title)
    this.log(responses.author)
    this.log(responses.date)
    this.log(responses.excerpt)
    this.log(responses.hero)
  }
}
