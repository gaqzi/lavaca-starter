Lavaca-starter 2.1.1
======

[![Build Status](https://travis-ci.org/mutualmobile/lavaca.png?branch=amd)](https://travis-ci.org/mutualmobile/lavaca-starter)

Introducing Lavaca-starter, the open source, HTML5 application framework by Mutual Mobile. Jumpstart development of your project by basing them off of Lavaca and using Lavaca's build tools.

Lavaca features:
* A build system supporting multiple configurations for different environments
* An HTML, JavaScript, and CSS packaging and minification system
* A JavaScript documentation generation system
* A unit testing framework
* A JavaScript MVC framework
* A templating framework
* A translation framework
* …as well as many other essential components for modern web applications.

Lavaca has a ton packed into it, and is designed to work well as a cohesive whole, while still remaining lightweight. Lavaca is built with extensibility in mind and allows you to easily extend components and build your own on top of its framework.

## Getting Started

1. __Get the code__
```bash
$ git clone git@github.com:mutualmobile/lavaca-starter.git [my_app] && cd [my_app]
```

2. __Install grunt-cli globally__

Note: this may require sudo
```bash
$ npm install -g grunt-cli
```

3. __Install dev dependencies for our tasks to work__
```bash
$ npm install
```

4. __Start Development Server__
```bash
$ grunt server
```
Your application should now be running on `localhost:8080`.

## Grunt Tasks

Below is a list of grunt tasks to aid development and facilitate deployment.

### Server

A task that simply runs a static server for local development and testing. Defaults to run on `localhost:8080` with `src` being the root directory.

- __Run the default static server__

```bash
$ grunt server
```

### Build

Precompiles LESS and Dust templates, concats and minifies all CSS and JavaScript files, and builds all related files to `www`, `android/assets/www` and `ios/www` directories. 

- __Build with local config__

```bash
$ grunt build
```

- __Build with staging config__ (a copy of the build will be available in `www` folder)

```bash
$ grunt build:staging
```

- __Build with production config__ (a copy of the build will be available in `www` folder)

```bash
$ grunt build:production
```

### Test

Runs unit tests defined in `test/unit` directory with [Jasmine](http://pivotal.github.com/jasmine/) in a headless instance of Webkit using [PhantomJS](http://phantomjs.org/).

- __Run unit tests from `test/unit`__

```bash
$ grunt test
```

### Docs

Generates JavaScript documentation using [yuidoc](https://github.com/gruntjs/grunt-contrib-yuidoc). The resulting documentation is outputed to the `doc` folder.

- __Generate JavaScript Documentation__

```bash
$ grunt yuidoc
```



Legal stuff:

Lavaca 2.1.1
Copyright (c) 2013 Mutual Mobile

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Contains components from or inspired by:

Simple Reset
(c) 2011 Eric Meyer
Released to public domain

jQuery v2.0.0
(c) 2011, John Resig
Dual licensed under the MIT or GPL Version 2 licenses.

Sizzle.js
(c) 2011, The Dojo Foundation
Released under the MIT, BSD, and GPL licenses.

Backbone.js 0.9.1 and Underscore.js 1.3.1
(c) 2012, Jeremy Ashkenas, DocumentCloud Inc
Released under the MIT license.

LinkedIn Fork of Dust.js 1.1
(c) 2010, Aleksander Williams
Released under the MIT license.


ChildBrowser
(c) 2012 Jesse MacFadyen, Nitobi
Released under the MIT license


iScroll 4.1.9
(c) 2011 Matteo Spinelli
Released under the MIT license
