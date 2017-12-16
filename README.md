![kittycash.io logo](https://avatars1.githubusercontent.com/u/34572254?s=200&v=4)

# kittycash.io

## Setup

1. Install [nvm](https://github.com/creationix/nvm).

2. Install and use the node version specified in `.nvmrc`:

  ```shell
  $ nvm install && nvm use
  ```

3. Install Yarn:

  ```shell
  $ npm install -g yarn
  ```

4. Install dependencies:

  ```shell
  $ yarn
  ```

## Development

Start the development server:

```shell
$ yarn start
```

Run tests:

```shell
$ yarn test

# Generate coverage report
$ yarn test -- --coverage
```
