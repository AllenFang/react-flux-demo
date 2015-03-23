var gulp       = require('gulp');
var browserify = require('gulp-browserify');
var rename     = require('gulp-rename');

gulp.task("default", ["build"]);

gulp.task('build', function(){
	gulp.src("js/*.js")
		.pipe(browserify({
			transform: ["reactify"]
		}))
		.pipe(rename("bundle.js"))
		.pipe(gulp.dest("./build"));
});
