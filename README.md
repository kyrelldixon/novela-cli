novela-cli
======================

Create local Novela post boilerplate

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@kyrelldixon/novela-cli.svg)](https://npmjs.org/package/@kyrelldixon/novela-cli)
<!-- [![Downloads/week](https://img.shields.io/npm/dw/@kyrelldixon/novela-cli.svg)](https://npmjs.org/package/@kyrelldixon/novela-cli) -->
[![License](https://img.shields.io/npm/l/@kyrelldixon/novela-cli.svg)](https://github.com/kyrelldixon/novela-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @kyrelldixon/novela-cli
$ novela-cli COMMAND
running command...
$ novela-cli (-v|--version|version)
@kyrelldixon/novela-cli/0.0.3 darwin-x64 node-v12.2.0
$ novela-cli --help [COMMAND]
USAGE
  $ novela-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`novela-cli config`](#novela-cli-config)
* [`novela-cli create`](#novela-cli-create)
* [`novela-cli help [COMMAND]`](#novela-cli-help-command)

## `novela-cli config`

update configuration for authors and posts

```
USAGE
  $ novela-cli config

OPTIONS
  -a, --authors=authors  authors directory path
  -h, --help             show CLI help
  -p, --posts=posts      post directory path
```

_See code: [src/commands/config.ts](https://github.com/kyrelldixon/novela-cli/blob/v0.0.3/src/commands/config.ts)_

## `novela-cli create`

create a new post

```
USAGE
  $ novela-cli create

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/create.ts](https://github.com/kyrelldixon/novela-cli/blob/v0.0.3/src/commands/create.ts)_

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
<!-- commandsstop -->
