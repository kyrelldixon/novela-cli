create-novela-post-cli
======================

Create local Novela post boilerplate

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/create-novela-post-cli.svg)](https://npmjs.org/package/create-novela-post-cli)
[![Downloads/week](https://img.shields.io/npm/dw/create-novela-post-cli.svg)](https://npmjs.org/package/create-novela-post-cli)
[![License](https://img.shields.io/npm/l/create-novela-post-cli.svg)](https://github.com/kyrelldixon/create-novela-post-cli/blob/master/package.json)

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
* [`novela-cli create`](#novela-cli-create)
* [`novela-cli help [COMMAND]`](#novela-cli-help-command)
* [`novela-cli init [FILE]`](#novela-cli-init-file)

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

## `novela-cli init [FILE]`

describe the command here

```
USAGE
  $ novela-cli init [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/init.ts](https://github.com/kyrelldixon/novela-cli/blob/v0.0.1/src/commands/init.ts)_
<!-- commandsstop -->
