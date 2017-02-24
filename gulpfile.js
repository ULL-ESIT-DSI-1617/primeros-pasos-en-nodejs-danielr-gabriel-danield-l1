var gulp = require('gulp');
var shell = require('gulp-shell');
var watch = require('gulp-watch');

gulp.task('construir_gitbook', function()
{
    return gulp.src('./scripts')
        .pipe(shell([
            "gitbook install"
        ]))        
        .pipe(shell([
           "./scripts/losh generate-gitbook" 
        ]))
        .pipe(shell([
           "./scripts/losh generate-wiki"
        ]))
        .pipe(shell([
            "./scripts/losh deploy-gitbook"
        ]))
        .pipe(shell([
            "./scripts/losh deploy-wiki"    
        ]))
});

gulp.task('actualizando_iaas', function(){
    return run(path.join(__dirname,'scripts','subir_iaas')).exec();
});


gulp.task('default', function(){
    gulp.watch(['scripts/*', 'txt/**/*.md', 'book.json'], ['construir_gitbook']); 
});
