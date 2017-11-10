var gulp      	= require('gulp'), // Подключаем Gulp
    sass        = require('gulp-sass'), //Подключаем Sass пакет,
    browserSync = require('browser-sync'); // Подключаем Browser Sync
    prefix      = require('gulp-autoprefixer'); // Подключаем автопрефиксер

gulp.task('sass', function(){ // Создаем таск Sass
    return gulp.src('dev/scss/**/*.scss') // Берем источник
        .pipe(sass({ includePaths : ['dev/scss/block'] })) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(prefix()) // Добавляем вендорные префиксы. Настройки - в package.json
        .pipe(gulp.dest('dist/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'dist' // Директория для сервера - app
        },
        notify: true // Отключаем уведомления
    });
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('dev/scss/**/*.scss', ['sass']); // Наблюдение за sass файлами
    gulp.watch('dist/**/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    // Наблюдение за другими типами файлов
});

gulp.task('default', () =>
gulp.src('dist/css/*.css')
.pipe(autoprefixer({
browsers: ['last 2 versions'],
cascade: false
}))
.pipe(gulp.dest('dist/css'))
);