const { override, fixBabelImports, addPostcssPlugins, addLessLoader } = require('customize-cra');

// 注意api的顺序问题
module.exports = override(
    fixBabelImports('import', { // 引入antd mobile
        libraryName: 'antd-mobile',
        style: 'css'
    }),
    addLessLoader({ // less
        strictMath: true,
        noIeCompat: true,
    }),
    addPostcssPlugins([require('postcss-px-to-viewport')({ // vw适配
        unitToConvert: 'px',
        viewportWidth: 375, // (Number) The width of the viewport. 视口的宽度
        unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to. 十进制数允许REM单位增长到。
        viewportUnit: 'vw', // (String) Expected units. 预期的单位
        minPixelValue: 1, // (Number) Set the minimum pixel value to replace. 设置要替换的最小像素值。
        mediaQuery: true, // (Boolean) Allow px to be converted in media queries. 允许在媒体查询中转换px。
        propList: ['*'],
        fontViewportUnit: 'vw'
    })]),
);