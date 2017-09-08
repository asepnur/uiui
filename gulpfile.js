// Gulp.js configuration 
var 
  // modules 
  gulp = require('gulp'),
  newer = require('gulp-newer'),
  imagemin = require('gulp-imagemin'),
  htmlclean = require('gulp-htmlclean'),
  concat = require('gulp-concat'),
  deporder = require('gulp-deporder'),
  stripdebug = require('gulp-strip-debug'),
  uglify = require('gulp-uglify'),

  //development  mode?
  devBuild = (process.env.NODE_ENV !=  'production'),
  //folders 
  folder =  {
    src : 'src/',
    build : 'build/'
  }
;
// image processing 
gulp.task( 'images', function() {
  let out = folder.build + 'img/';
  return gulp.src(folder.src + 'img/**/*')
    .pipe(newer(out))
    .pipe(imagemin({optimazatiionalLevel: 100 }))
    .pipe(gulp.dest(out))
})

// HTML processing 
gulp.task('html', ['images'], function() {
  let
    out = folder.build + 'html/',
    page = gulp.src(folder.src + 'html/**/*')
      .pipe(newer(out));

  // minify production code
  if (!devBuild) {
    page = page.pipe(htmlclean())
  }

  return page.pipe(gulp.dest(out))
})

//Javascript processing 
gulp.task('js', function(){
  let jsbuild = gulp.src(folder.src + 'js/**/*')
    .pipe(deporder())
    .pipe(concat('main.js'))
    if (!devBuild) {
      jsbuild(stripdebug())
      .pipe(uglify())
    }
    return jsbuild.pipe(gulp.dest(folder.build + 'js/'))
})