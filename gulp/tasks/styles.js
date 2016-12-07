var gulp = require('gulp');
var postCSS = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssVars = require('postcss-simple-vars');
var cssNested = require('postcss-nested');
var cssImport = require('postcss-import');
var cssMixins = require('postcss-mixins');

gulp.task('styles', function(){
	return gulp.src('./app/assets/styles/styles.css')
	           .pipe(postCSS([cssImport, cssMixins, cssVars, cssNested, autoprefixer]))
	           .on('error', function(errorInfo){
	           		console.log(errorInfo.toString());
	           		this.emit('end');
	           })
	           .pipe(gulp.dest('./app/temp/styles'));
});