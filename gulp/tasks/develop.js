var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('develop', function() {
    nodemon({
        script: 'app.js',
        ext: 'js styl',
        ignore: ['client/public/**', 'node_modules/**']
    })
        .on('restart', ['build']);
});
