import * as inquirer from 'inquirer'
import {Command, flags} from '@oclif/command'
import {makeInitQuestions} from '../lib/novela'

export default class Init extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {
    const questions = makeInitQuestions()
    const responses = await inquirer.prompt(questions)

    // eslint-disable-next-line no-console
    console.log(responses)
  }
}
