import * as fs from 'fs'
import * as path from 'path'
import {Command, flags} from '@oclif/command'

export default class Init extends Command {
  static description = 'initialize the cli with post and author directories'

  static flags = {
    help: flags.help({char: 'h'}),
    posts: flags.string({
      char: 'p',
      description: 'post directory path',
    }),
    authors: flags.string({
      char: 'a',
      description: 'authors directory path',
    }),
  }

  async run() {
    const {flags} = this.parse(Init)
    const configPath = path.join(this.config.configDir, 'config.json')
    let userConfig: any = {}

    if (!fs.existsSync(configPath)) {
      this.log('No config file found. Creating config.json')
      fs.mkdirSync(this.config.configDir)
      fs.writeFileSync(configPath, '{}')
      this.log('Created config file')
    } else if (fs.existsSync(configPath)) {
      userConfig = JSON.parse(fs.readFileSync(configPath, 'utf-8'))
    }

    if (flags.posts && flags.authors) {
      userConfig.contentPosts = path.resolve(flags.posts)
      userConfig.contentAuthors = path.resolve(flags.authors)
      this.log('Updated config authors and posts')
    } else if (flags.posts) {
      userConfig.contentPosts = path.resolve(flags.posts)
      this.log('Updated config posts')
    } else if (flags.authors) {
      userConfig.contentAuthors = path.resolve(flags.authors)
      this.log('Updated config authors')
    }

    const configDetails = JSON.stringify(userConfig, null, 2)
    fs.writeFileSync(configPath, configDetails)
  }
}
