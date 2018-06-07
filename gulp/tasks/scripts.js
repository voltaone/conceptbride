module.exports = function () {
    $.gulp.task('scripts:lib', function () {
        return $.gulp.src([
            'node_modules/jquery/dist/jquery.js',

            'node_modules/rellax/rellax.js',
            // 'node_modules/paroller.js/dist/jquery.paroller.js',

            'node_modules/slick-carousel/slick/slick.js',

            'node_modules/chosen-js/chosen.jquery.js',
            'node_modules/select2/dist/js/select2.full.js',

            'node_modules/jquery.maskedinput/src/jquery.maskedinput.js',

            'node_modules/bowser/bowser.js',

            'node_modules/flatpickr/dist/flatpickr.js',
            'node_modules/flatpickr/dist/l10n/ru.js',

            'node_modules/autosize/dist/autosize.js',
            'node_modules/jquery.nicescroll/jquery.nicescroll.js',
            'node_modules/wow.js/dist/wow.js',
            // 'node_modules/letteringjs/jquery.lettering.js',

            'dev/source/jquery-scrollspy-master/scrollspy.js',

            'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',

            // 'node_modules/midnight.js/midnight.jquery.js',
            // 'node_modules/aos/dist/aos.js',
            // 'dev/source/jquery-scrollie-master/jquery.scrollie.js',
            // 'node_modules/sticky-kit/dist/sticky-kit.js',
            // 'node_modules/scrollama/build/scrollama.js',
            // 'node_modules/jquery-timepicker/jquery.timepicker.js',
            // 'node_modules/bootstrap/dist/js/bootstrap.bundle.js',
            // 'dev/source/fontawesome-free-5.0.6/svg-with-js/js/fontawesome-all.js',
            // 'node_modules/nouislider/distribute/nouislider.js',
            // 'node_modules/wnumb/wNumb.js',

        ])
            .pipe($.concat('vendor.js'))
            .pipe($.gulp.dest('app/js'))
            .pipe($.browserSync.reload({
                'stream': true
            }))
    });

    $.gulp.task('scripts', function () {
        return $.gulp.src([
            'dev/scripts/rew.accordion.js',
            'dev/scripts/rew.tabs.js',
            'dev/scripts/dev.js',
            'dev/scripts/mail.js'
        ])
            .pipe($.concat('scripts.js'))
            .pipe($.babel({
                presets: ['env']
            }))

            .pipe($.gulp.dest('app/js'))
            .pipe($.browserSync.reload({
                'stream': true
            }))
    });

    $.gulp.task('scripts:build', function () {
        return $.gulp.src('app/js/*.js')
            .pipe($.sourcemaps.init())
            .pipe($.strip.text())
            .pipe($.uglify())
            .pipe($.sourcemaps.write())
            .pipe($.gulp.dest('dist/js'))
    });
}