novela-cli
======================

Create local Novela post boilerplate

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
<!-- [![Version](https://img.shields.io/npm/v/novela-cli.svg)](https://npmjs.org/package/novela-cli)
[![Downloads/week](https://img.shields.io/npm/dw/novela-cli.svg)](https://npmjs.org/package/novela-cli)
[![License](https://img.shields.io/npm/l/novela-cli.svg)](https://github.com/kyrelldixon/novela-cli/blob/master/package.json) -->

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g novela-cli
$ novela-cli COMMAND
running command...
$ novela-cli (-v|--version|version)
novela-cli/0.0.1 darwin-x64 node-v12.2.0
$ novela-cli --help [COMMAND]
USAGE
  $ novela-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
- [novela-cli](#novela-cli)
- [Usage](#usage)
- [Commands](#commands)
  - [`novela-cli create`](#novela-cli-create)
  - [`novela-cli help [COMMAND]`](#novela-cli-help-command)
  - [`novela-cli config`](#novela-cli-config)

## `novela-cli create`

create a new post

```
USAGE
  $ novela-cli create

OPTIONS
  -f, --filepath=filepath  [default: /Users/Ky/Dev/sites/studentdevcoach/code/novela-cli/content/authors/authors.yml]
                           filepath for authors YAML file

  -h, --help               show CLI help
```

_See code: [src/commands/create.ts](https://github.com/kyrelldixon/novela-cli/blob/v0.0.1/src/commands/create.ts)_

## `novela-cli help [COMMAND]`

display help for novela-cli

```
USAGE
  $ novela-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

## `novela-cli config`

update configuration for authors and posts

```
USAGE
  $ novela-cli config

OPTIONS
-a, --authors authors directory path
-h, --help    show CLI help
-p, --posts   post directory path
```

_See code: [src/commands/config.ts](https://github.com/kyrelldixon/novela-cli/blob/v0.0.1/src/commands/config.ts)_
<!-- commandsstop -->
