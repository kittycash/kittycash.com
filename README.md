![kittycash.com logo](https://raw.githubusercontent.com/kittycash/kittycash.com/master/KittyCash.png)

# kittycash.com

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

## Build

```shell
$ yarn build
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

## Releasing to production

Commits on the master branch will be automatically deployed to https://staging.kittycash.com.

To deploy in production (https://www.kittycash.com):

1. Bump version number in `package.json`:

    ```diff
       "name": "www.kittycash.com",
    -  "version": "0.0.5",
    +  "version": "0.0.6",
       "private": true,
    ```
2. Commit, create a tag, and push:

    ```shell
    $ git commit -am "chore: bump version number"
    $ git tag v0.0.6
    $ git push origin master --tags
    ```
