功能 | 插件
| -- | --
vinyl-source-stream |
vinyl-buffer |
gulp-if |
gulp-util |
gulp-plumber |
gulp-rename |
gulp-header |
gulp-touch-cmd |
gulp-uglify-es |
gulp-eslint |
gulp-stylus |
gulp-css-base64 |

browserify 的 transform('babelify') 会调用 babelify 间接使用 babel 进行编译

babelify 类似与 babel-loader 为了适配 webpack，是为了适配 browserify 而出现

构建工具的链式操作
- concat-stream
- through-stream

https://github.com/browserify/browserify#usage

b.transform(tr, opts={})

> Transform source code before parsing it for require() calls with the transform function or module name tr.
If tr is a function, it will be called with tr(file) and it should return a through-stream that takes the raw file contents and produces the transformed source.
If tr is a string, it should be a module name or file path of a transform module with a signature of

