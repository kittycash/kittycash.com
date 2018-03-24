# kittycash website

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
