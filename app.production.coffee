rupture			 = require 'rupture'
autoprefixer = require 'autoprefixer-stylus'
js_pipeline  = require 'js-pipeline'
css_pipeline = require 'css-pipeline'
records      = require 'roots-records'

module.exports =
  ignores: ['readme.md', '**/layout.*', '**/_*', '.gitignore', 'ship.*conf']

  extensions: [
    js_pipeline(files: 'assets/js/*.coffee', out: 'js/build.js', minify: true, hash: true),
    css_pipeline(files: 'assets/css/*.styl', out: 'css/build.css', minify: true, hash: true),
    records({
      projects: {file: 'data/projects.json', path: 'projects'}
    })
  ]

  stylus:
    use: [rupture(), autoprefixer()]
