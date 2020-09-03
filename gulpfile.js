const gulp = require("gulp");
const concat = require("gulp-concat");

var paths = {
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
      .pipe(gulp.dest(paths.styles.dest));
  }
   

   
  function watch() {
  
    gulp.watch(paths.styles.src, styles);
  }
   
  /*
   * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
   */
  var build = gulp.series(clean, gulp.parallel(styles, scripts));
   
  /*
   * You can use CommonJS `exports` module notation to declare tasks
   */
  exports.clean = clean;
  exports.styles = styles;
  exports.scripts = scripts;
  exports.watch = watch;
  exports.build = build;
  /*
   * Define default task that can be called by just running `gulp` from cli
   */
  exports.default = build;