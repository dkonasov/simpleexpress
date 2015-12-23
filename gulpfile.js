var gulp = require('gulp');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var uglify = require('gulp-uglify');
gulp.task("default", function(callback){
	
	runSequence("cssconcat",
				"angulardest",
				"scripts",
				"concatjs",
				"htmldest",
              callback);
	
});
gulp.task("cssconcat", function(){
	
	return gulp.src(["./bower_components/bootstrap/dist/css/bootstrap.min.css", "./bower_components/angular-datepicker/dist/angular-datepicker.min.css", "./frontend/css/style.css"])
	.pipe(concat("global.css"))
	.pipe(gulp.dest("./dist/css"));
	
});

gulp.task("angulardest", function(){
	
	return gulp.src(["./bower_components/angular/angular.min.js", "./bower_components/angular-route/angular-route.min.js", "./bower_components/angular-resource/angular-resource.min.js", "./bower_components/moment/min/moment-with-locales.min.js", "./bower_components/angular-datepicker/dist/angular-datepicker.min.js"])
	.pipe(gulp.dest("./dist/js"));
	
});

gulp.task("htmldest", function(){
	
	return gulp.src(["./frontend/views/*"])
	.pipe(gulp.dest("./dist/views"));
	
});

gulp.task("scripts", function(){
	
	return gulp.src(["./frontend/angular/scripts/app.js", "./frontend/angular/scripts/controllers.js"])
	.pipe(uglify())
	.pipe(gulp.dest("./dist/js"));
	
});

gulp.task("concatjs", function(){
	
	return gulp.src(["./dist/js/moment-with-locales.min.js", "./bower_components/jquery/dist/jquery.min.js", "./bower_components/bootstrap/dist/js/bootstrap.min.js", "./dist/js/angular.min.js", "./dist/js/angular-route.min.js", "./dist/js/angular-resource.min.js", "./dist/js/angular-datepicker.min.js", "./dist/js/app.js", "./dist/js/controllers.js"])
	.pipe(concat("global.js"))
	.pipe(gulp.dest("./dist/js"));
	
});