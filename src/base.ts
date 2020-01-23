import Command from '@oclif/command'

export default abstract class extends Command {
  async init() {
    this.config.configDir = this.config.configDir.replace(this.config.dirname, 'novela-cli')
  }
}
