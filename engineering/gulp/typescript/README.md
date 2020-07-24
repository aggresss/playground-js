## Typescript with Gulp
https://www.typescriptlang.org/docs/handbook/gulp.html
https://www.tslang.cn/docs/handbook/gulp.html

Gulp + Browserify / uglify / Watchify / Babelify / tsify

### Run

```
gulp
node dist/main.js
```

工程由 Node.js 环境移到浏览器环境里。 因此，我们将把所有模块捆绑成一个 JavaScript 文件

安装 Browserify + tsify + vinyl-source-stream。 tsify 是 Browserify 的一个插件，就像 gulp-typescript 一样，它能够访问 TypeScript 编译器。 vinyl-source-stream 会将 Browserify 的输出文件适配成Gulp 能够解析的 vinyl 格式。

Watchify 启动 Gulp 并保持运行状态，当你保存文件时自动编译。 帮你进入到 **编辑-保存-刷新浏览器** 的循环中

Babel 是个十分灵活的编译器，将 ES2015 及以上版本的代码转换成 ES5 和 ES3。 你可以添加大量自定义的 TypeScript 目前不支持的转换器

Uglify帮你压缩代码，将花费更少的时间去下载它们。
