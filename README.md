deployment revision: 10

# Store monorepo

A sample monorepo for stores using the new FastStore platform.

## Setup

### Adding modules

To add a new module add its CLI as a dependency of your monorepo. The available modules and their CLIs are listed below.

| Module     | Subcommand Path | CLI Package    | Required version |
| ---------- | --------------- | -------------- | ---------------- |
| Checkout   | checkout        | TBD            | TBD              |
| Discovery  | discovery       | @faststore/cli | TBD              |

```bash
yarn add MODULE-CLI
```

### Initializing modules with the CLI

If you're starting the development of a new store you'll want to initialize the modules using the CLI `init` command.

```bash
yarn fsp MODULE-SUBCOMMAND init # MODULE-SUBCOMMAND can be either checkout or discovery
```

After initializing the module see its documentation to learn how to customize it.

### Running locally

Just run:

```bash
yarn fsp dev
```

and the FastStore CLI will take care of starting the dev environment for all your customizations.
