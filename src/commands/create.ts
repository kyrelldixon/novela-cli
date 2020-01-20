import {Command, flags} from '@oclif/command'
import {fetchAuthors} from '../utils'

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
    authors.forEach(author => {
      this.log(author.name)
    })
  }
}
