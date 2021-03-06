import * as inquirer from 'inquirer'
import * as fs from 'fs'
import * as path from 'path'
import {flags} from '@oclif/command'
import NovelaCommand from '../base'
import {getAuthorsFromYaml, createPost} from '../utils'
import {makePostQuestions} from '../lib/novela'
import {Post} from '../@types'

export default class Create extends NovelaCommand {
  static description = 'create a new post'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {
    const configPath = path.join(this.config.configDir, 'config.json')

    if (!fs.existsSync(configPath)) {
      this.log('Content folder not found. Did you run novela-cli config?')
      return
    }

    const configString = fs.readFileSync(configPath, 'utf-8')
    const config = JSON.parse(configString)

    const authors = getAuthorsFromYaml(config.contentAuthors)
    const questions = makePostQuestions(authors)

    const post: Post = await inquirer.prompt(questions)
    await createPost(config.contentPosts, post)
    this.log('Succesfully created post')
  }
}
