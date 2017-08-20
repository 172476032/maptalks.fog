const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');


//编译并压缩js
gulp.task('covertJS',function () {
    return gulp.src('app/js/*.js')
        .pipe(babel({
            presets:['es2015']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});
// 合并并压缩css
gulp.task('convertCSS', function(){
    return gulp.src('app/css/*.css')
        .pipe(concat('app.css'))
        .pipe(cssnano())
        .pipe(rename(function(path){
            path.basename += '.min';
        }))
        .pipe(gulp.dest('dist/css'));
});
// browserify
gulp.task("browserify", function () {
    var b = browserify({
        entries: "dist/js/index.js"
    });
    return b.bundle()
        .pipe(source("bundle.js"))
        .pipe(gulp.dest("dist/js"));
});
gulp.task('watch',function () {
    gulp.watch('app/css/*.css',['covertCSS']);
    gulp.watch('app/js/*.js'['covertJS','browserify'])
});
gulp.task('start', ['covertJS', 'convertCSS', 'browserify', 'watch']);
