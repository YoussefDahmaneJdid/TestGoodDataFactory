
#### Prerequisites
Before you begin, make sure your development environment includes `Node.js®` and an `npm` package manager.

###### Node.js
Angular 9 requires `Node.js` version 10.13 or later.

- To check your version, run `node -v` in a terminal/console window.
- To get `Node.js`, go to [nodejs.org](https://nodejs.org/).

###### Angular CLI
Install the Angular CLI globally using a terminal/console window.
```bash
npm install -g @angular/cli
```

##### Update to Angular 9
Angular 9 requires `Node.js` version 10.x or newer    
Update guide - see: [https://update.angular.io](https://update.angular.io)

## Installation



# go into app's directory
$ cd testGoodData

# install app's dependencies
$ npm install
```

## Usage

``` bash
# serve with hot reload at localhost:4200.
$ ng serve

# build for production with minification
$ ng build
```

## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```

├── e2e/
├── src/
│   ├── app/
│   ├── assets/
│   ├── environments/
│   ├── scss/
│   ├── index.html
│   └── ...
├── .angular-cli.json
├── ...
├── package.json
└── ...
```

## Dashboard main Folder ...

```
src/
│   ├── app/
│          ├── views/
│             ├── dashboard/
│                          ├── data/
│                                  ├── buzzWords.ts
│                                  ├── products.ts
│                                  ├── sentiment.ts
│                          ├── dashboard-routing.module.ts
│                          ├── dashboard.componeent.html
│                          ├── dashboard.componeent.ts
│                          ├── dashboard.componeent.css
│                          ├── dashboard.module.ts
│   └── ...
```