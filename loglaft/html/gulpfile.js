var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    path = require('path'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,
    url = require('gulp-css-url-adjuster'),
    autoprefixer = require('autoprefixer-core'),
    postcss = require('gulp-postcss'),
    cssmin = require('gulp-csso'),
    uncss = require('gulp-uncss'),
    csscomb = require('gulp-csscomb'),
    htmlmin = require('gulp-htmlmin'),
    imagemin = require('gulp-imagemin'),
    //pngquant = require('imagemin-pngquant'),
    uglify = require('gulp-uglify');

var params = {
    out: 'public',
    prod: true,
    htmlSrc: 'index.html',
    levels: ['typo.blocks', 'lg.blocks', 'md.blocks', 'sm.blocks', 'xs.blocks'],
    js: [
        'bower_components/jquery/dist/jquery.js',
        'bower_components/fancybox/source/jquery.fancybox.js',
        'bower_components/fancybox/source/helpers/jquery.fancybox-media.js',
        'bower_components/jquery.maskedinput/dist/jquery.maskedinput.js',
        'bower_components/jquery_lazyload/jquery.lazyload.js',
        'bower_components/slick-carousel/slick/slick.js',
        'bower_components/turn.js/turn.js'

    ],
    css: [
        'bower_components/fancybox/source/jquery.fancybox.css',
        'bower_components/bootstrap/dist/css/bootstrap.css',
        'bower_components/slick-carousel/slick/slick.css',
    ],
    typography: ['typo.blocks'],
    images: [],
    video: [],
    fonts: [],
    type: {
        css: '/**/*.css',
        typo: '/*.css', js: '/**/*.js',
        images: '/**/*.{gif,jpg,png,ico,svg}',
        fonts: '/**/*.{eot,woff,ttf}',
        video: '*.{mp4, MP4}'
    },
    ignore: []
};

gulp.task('default', ['server', 'build']);

gulp.task('server', function () {
    browserSync.init({
        server: path.resolve(params.out)
    });

    gulp.watch('*.html', ['html']);
    gulp.watch(params.levels.map(function (level) {
        return level + params.type.css;
    }), ['css']);
    gulp.watch(params.levels.map(function (level) {
        return level + params.type.images;
    }), ['images']);
    gulp.watch(params.levels.map(function (level) {
        return level + params.type.js;
    }), ['js']);
});

gulp.task('build', ['html', 'fonts', 'css', 'images', 'js', 'send', 'video']);

gulp.task('html', function () {
    return gulp.src(params.htmlSrc)
        .pipe(rename('index.html'))
        //        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest(params.out))
        .pipe(reload({stream: true}));
});
gulp.task('send', function () {
    gulp.src('send.php')
        .pipe(gulp.dest(params.out));
});

gulp.task('css', function () {
    var i;
    for (i = 1; i < params.levels.length; ++i) {
        params.css.push(params.levels[i] + params.type.css);
    }
    gulp.src(params.css)
    /*        .pipe(uncss({
     html: params.htmlSrc,
     ignore: params.ignore
     }))*/
        .pipe(concat('styles.css'))
        .pipe(url({prepend: 'images/'}))
        .pipe(postcss([autoprefixer({browsers: ['last 2 versions']})]))
        //        .pipe(csscomb())
        .pipe(gulp.dest(params.out))
        .pipe(reload({stream: true}));

    var typographyCss = params.typography[0] + params.type.typo;
    gulp.src(typographyCss)
        .pipe(url({prepend: 'fonts/'}))
        .pipe(postcss([autoprefixer({browsers: ['last 2 versions']})]))
        .pipe(gulp.dest(params.out))
        .pipe(reload({stream: true}));
});

gulp.task('images', function () {
    for (let i = 0; i < params.levels.length; ++i) {
        params.images.push(params.levels[i] + params.type.images);
    }
    return gulp.src(params.images)
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(path.join(params.out, 'images')))
        .pipe(reload({stream: true}));
});

gulp.task('fonts', function () {
    var i;
    for (i = 0; i < params.typography.length; ++i) {
        params.fonts.push(params.typography[i] + params.type.fonts);
    }
    return gulp.src(params.fonts)
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(path.join(params.out, 'fonts')))
        .pipe(reload({stream: true}));
});

gulp.task('video', function () {
    for (let i = 0; i < params.levels.length; ++i) {
        params.video.push(params.type.video);
    }
    return gulp.src(params.video)
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(path.join(params.out, 'video')))
        .pipe(reload({stream: true}));
});

gulp.task('js', function () {
    var i;
    for (i = 0; i < params.levels.length; ++i) {
        params.js.push(params.levels[i] + params.type.js);
    }
    return gulp.src(params.js)
        .pipe(concat('main.js'))
        .pipe(gulp.dest(params.out))
        //        .pipe(uglify())
        //        .pipe(gulp.dest(params.prod))
        .pipe(reload({stream: true}));
});