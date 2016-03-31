rupture			 = require 'rupture'
autoprefixer = require 'autoprefixer-stylus'
js_pipeline  = require 'js-pipeline'
css_pipeline = require 'css-pipeline'
records 		 = require 'roots-records'
roots_config = require 'roots-config'

module.exports =
  ignores: ['README.md', '**/layout.*', '**/_*', '.gitignore', 'ship.*conf']

  extensions: [
    js_pipeline(files: 'assets/js/*.coffee'),
    css_pipeline(files: 'assets/css/*.styl'),
    records({
    	projects: {file: 'data/projects.json', path: 'projects'}
    }),
    roots_config({
      clientName: 'Fathom',
      clientUrl: 'http://fathomlondon.com/',
      title: 'Front end developer'
    })
  ]

  stylus:
    use: [rupture(), autoprefixer()]
    sourcemap: true

  'coffee-script':
    sourcemap: true

  jade:
    pretty: true

  open_browser: false
