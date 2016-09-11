/************************************************
********* Libraries for tasks
************************************************/
var gulp       = require('gulp');
var browserify = require('browserify');
var babelify   = require('babelify');
var source     = require('vinyl-source-stream');
var uglify     = require('gulp-uglify');
var streamify  = require('gulp-streamify');
var nodemon    = require('gulp-nodemon');
var notify     = require('gulp-notify');
var sass       = require('gulp-sass');
var concat     = require('gulp-concat');

/************************************************
********* Task to build the app.js
************************************************/
gulp.task('build', function() {
	browserify({
		entries: './app/app.jsx',
		extensions: ['jsx'],
		debug: false
	})
	.transform('babelify', {presets: ['es2015', 'react']})
	.bundle()
	.pipe(source('build.js'))
	// TODO: Uncommnet when the code is deploy on production environment
	// .pipe(streamify(uglify()))
	.pipe(gulp.dest('./public/'))
	.pipe(notify({
		title: 'Gulp',
		subtitle: 'Success',
		message: 'Success build.js',
		sound: 'Pop'
	}));
});

/************************************************
********* Task to build the css file
************************************************/
gulp.task('sass', function() {
	gulp.src('./app/sass/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(concat('main.css'))
	.pipe(gulp.dest('./public'))
	.pipe(notify({
		title: 'Gulp',
		subtitle: 'Success',
		message: 'Success main.css',
		sound: 'Pop'
	}));
});

/************************************************
********* Task to start the server
************************************************/
gulp.task('server', function() {
	nodemon({
		script: 'index.js',
		task: ['watch', 'sass']
	});
});

/************************************************
********* Task to watch all changes
************************************************/
gulp.task('watch', function() {
	gulp.watch(['./app/components/*.jsx'], ['build']);
	gulp.watch(['./app/app.jsx'], ['build']);
	gulp.watch(['./app/sass/*.scss'], ['sass']);
});

/************************************************
********* Task to deploy app
************************************************/
gulp.task('deploy', ['build', 'sass'], null);

/************************************************
********* Task to setup on the server
************************************************/
gulp.task('default', ['watch', 'server']);
