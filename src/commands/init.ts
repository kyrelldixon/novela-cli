import * as fs from 'fs'
import * as path from 'path'
import * as inquirer from 'inquirer'
import {Command, flags} from '@oclif/command'
import {makeInitQuestions} from '../lib/novela'
import {NovelaConfig} from '../types'

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
    let userConfig: NovelaConfig = {
      contentAuthors: null,
      contentPosts: null,
    }

    if (!fs.existsSync(configPath)) {
      this.log('No config file found')
      fs.mkdirSync(this.config.configDir)
    } else if (fs.existsSync(configPath)) {
      userConfig = JSON.parse(fs.readFileSync(configPath, 'utf-8'))
    }

    if (flags.posts && flags.authors) {
      userConfig.contentPosts = path.resolve(flags.posts)
      userConfig.contentAuthors = path.resolve(flags.authors)
    } else if (flags.posts) {
      userConfig.contentPosts = path.resolve(flags.posts)
    } else if (flags.authors) {
      userConfig.contentAuthors = path.resolve(flags.authors)
    }

    const questions = makeInitQuestions(userConfig)
    userConfig = await inquirer.prompt(questions)
    const configDetails = JSON.stringify(userConfig, null, 2)
    fs.writeFileSync(configPath, configDetails)
    this.log('Successfully created config file')
  }
}
