const gulp = require("gulp");
const concat = require("gulp-concat");
const rename = require("gulp-rename");
const cssmin = require("gulp-cssmin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const paths = {
    styles: {
      src: 'src/**/*.css',
      dest: 'styles/'
    }
  };
   
  /*
   * Define our tasks using plain functions
   */
  function styles() {
    return gulp.src(paths.styles.src)
        .pipe(concat(paths.styles.dest))

        .pipe(rename(function (path) {
          path.extname = ".css";
        }))

        .pipe(cssmin())
      .pipe(gulp.dest(paths.styles.dest));
  }
   
   
  function watch() {
    gulp.watch(paths.styles.src, styles);
  }
   

  // var build = gulp.series(gulp.parallel(styles));
   

  exports.styles = styles;
  exports.watch = watch;
  // exports.build = build;

  // exports.default = build;

  module.exports = {
    // ...
    plugins: [
      new BrowserSyncPlugin({
        // browse to http://localhost:3000/ during development,
        // ./public directory is being served
        host: 'localhost',
        port: 3000,
        server: { baseDir: ['public'] }
      })
    ]
  }