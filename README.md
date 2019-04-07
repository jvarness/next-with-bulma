[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/jvarness/next-with-bulma)

# next-with-bulma

A small example of how someone could use [Next.js](https://nextjs.org/) with [Bulma](https://bulma.io/).

In order to use Bulma, I was able to use [`@zeit/next-sass`](https://github.com/zeit/next-plugins/tree/master/packages/next-sass) to import Bulma's sass sheet directly from `node_modules`.

## Running

To run a development build using hot reloading, use:

```
npm run dev
```

To build and start a production version of the code, run:

```
npm run build
npm run start
```

## Deploy

To deploy using [`now`](https://github.com/zeit/now-cli), first make sure you have it installed and that you're logged in, then you can deploy:

```
npm i -g now
now login
now
```
