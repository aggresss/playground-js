## Typescript with Gulp
https://www.typescriptlang.org/docs/handbook/gulp.html
https://www.tslang.cn/docs/handbook/gulp.html

Gulp + Browserify / uglify / Watchify / Babelify / tsify

### Run

```
gulp
node dist/main.js
```

工程由Node.js环境移到浏览器环境里。 因此，我们将把所有模块捆绑成一个JavaScript文件

安装Browserify，tsify和vinyl-source-stream。 tsify是Browserify的一个插件，就像gulp-typescript一样，它能够访问TypeScript编译器。 vinyl-source-stream会将Browserify的输出文件适配成gulp能够解析的 vinyl 格式。
