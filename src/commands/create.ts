import {Command, flags} from '@oclif/command'
import {fetchAuthors} from '../utils'

export default class Create extends Command {
  static description = 'create a new post'

  static examples = [
    `$ create-novela-post create
Kyrell Dixon
Sam Smith
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const path = './content/authors/authors.yml'
    const authors = fetchAuthors(path)
    authors.forEach(author => {
      this.log(author.name)
    })
  }
}
