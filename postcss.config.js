module.exports = {
    plugins: {
        autoprefixer: {
            overrideBrowserslist: [
                'Android 4.1',
                'iOS 7.1',
                'Chrome > 31',
                'ff > 31',
                'ie >= 8',
            ],
            grid: true,
        },
        'postcss-px-to-viewport': {
            unitToConvert: 'px',
            viewportWidth: 375,
            unitPrecision: 5,
            propList: ['*'],
            viewportUnit: 'vmin',
            fontViewportUnit: 'vmin',
            selectorBlackList: ['novw'],
            minPixelValue: 1,
            mediaQuery: false,
            replace: true,
            exclude: undefined,
            include: undefined,
            landscape: false,
            landscapeUnit: 'vw',
            landscapeWidth: 667,
        },
    },
};
