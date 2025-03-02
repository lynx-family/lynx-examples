# Contributing to Lynx Examples

Thank you for your interest in contributing to Lynx Examples! Contributions are always welcome, no matter how large or small.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
- [Development Workflow](#development-workflow)
  - [Building Projects](#building-projects)
  - [Running Examples](#running-examples)
  - [Creating a New Example](#creating-a-new-example)
- [Contribution Guidelines](#contribution-guidelines)
  - [Pull Requests](#pull-requests)
  - [Code Style](#code-style)
- [Project Structure](#project-structure)
- [Need Help?](#need-help)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version `>= 22`. You can check this with `node -v`
- **pnpm**: We use pnpm as our package manager. Enable it with `corepack enable`

### Setup

To set up the project, run:

```sh
# Clone the repository
git clone https://github.com/lynx-family/lynx-examples.git
cd lynx-examples

# Install dependencies
pnpm install
```

## Development Workflow

### Building Projects

To build all projects in the workspace:

```sh
pnpm turbo build
```

To build a specific example:

```sh
pnpm --filter <example-name> build
```

### Running Examples

To run a specific example in development mode:

```sh
pnpm --filter <example-name> run dev
```

For instance, to run the CSS example:

```sh
pnpm --filter css run dev
```

> [!NOTE]
> You need [Lynx Explorer](https://lynxjs.org/guide/start/quick-start.html#installation) to develop with these examples. Make sure it's installed before running the examples.

### Creating a New Example

1. Create a new directory in the `examples` folder
2. Copy the structure from an existing example as a starting point
3. Update the `package.json` with appropriate name and dependencies
4. Add your example code
5. Update the README.md to include your new example

## Contribution Guidelines

### Pull Requests

1. Fork the repository and create a new branch for your feature or bugfix
2. Make your changes, following our code style guidelines
3. Add or update tests if necessary
4. Ensure your code passes all tests and builds successfully
5. Submit a pull request with a clear description of the changes

### Code Style

- We use [dprint](https://dprint.dev/) for code formatting
- Our formatting is automatically applied using git hooks when you commit

## Project Structure

The repository is organized as follows:

- `examples/`: Contains all the example projects
- `api/`: API-related code and examples
- `.changeset/`: Used for managing versioning of packages
- `.github/`: GitHub specific files (workflows, templates, etc.)

## Need Help?

- Visit [Lynx's documentation](https://lynxjs.org/) for more information
- Join our community channels for support
- Open an issue if you encounter any problems

Thank you for contributing to Lynx Examples!
