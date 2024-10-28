[authorBadge]: https://img.shields.io/badge/Author-Toni%20CANTARUTTI-blue
[authorLink]: https://github.com/toni-cantarutti?tab=repositories
[licenseBadge]: https://img.shields.io/badge/License-MIT-brightgreen.svg
[licenseLink]: LICENSE
[vscode]: https://code.visualstudio.com/
[nodejs]: https://nodejs.org/en/download/package-manager
[pnpm]: https://pnpm.io/installation


[![Author][authorBadge]][authorLink]
[![License][licenseBadge]][licenseLink]


# Visual Studio Code Typescript boilerplate
This project provides a skeleton structure and IDE settings files to help with TypeScript development in [Visual Studio Code][vscode].<br/>
The project builds all TypeScript (`src/*.ts`) files into a `dist` directory in the root.<br/>
This repository is ready for you to clone and start building your code around it. Simply follow the guide below.


## Prerequisites
1. You need [Node.js][nodejs] installed
1. This repo was originally created with [pnpm][pnpm] but you can `npm` or `yarn`.

## Install
1. Clone the repo in your current folder
    ```bash
    git clone --depth 1 https://github.com/toni-cantarutti/vscode-typescript-boilerplate .
    ```
1. Clear git from your folder to start from scratch
    ```bash
    rm -rf .git
    ```
1. Install dependencies:
    ```bash
    pnpm install
    ```

## Getting started with development
### Building
1. Open VSCode in your folder
1. Launch the build wather: Press <kbd>CTRL</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> 

### Running and Debugging
To run the project in debug mode, simply hit <kbd>F5</kbd>! Place breakpoints in your TypeScript code and view them in the debugger (<kbd>CTRL</kbd>+<kbd>Shift</kbd>+<kbd>D</kbd>).

## License
Under the MIT license. See the [LICENSE][licenseLink] file for details.



