const fs = require('fs');

var options = { mode: 1 };
// 一个 JavaScript 命名函数。
function deployPlugin(opt) {
    console.log('op:', options, opt)
    options = opt;
};

// 在插件函数的 prototype 上定义一个 `apply` 方法。
deployPlugin.prototype.apply = function (compiler) {
    // 指定一个挂载到 webpack 自身的事件钩子。
    //   compiler.plugin('webpacksEventHook', function(compilation /* 处理 webpack 内部实例的特定数据。*/, callback) {
    //     console.log("This is an example plugin!!!");

    //     // 功能完成后调用 webpack 提供的回调。
    //     callback();
    //   });
    console.log('options:',options)
    compiler.plugin("emit", function (compilation, callback) {

        // let buf = fs.readFileSync("1.txt");
        // fs.readFile("deploy.sh", "utf8", (err, data) => {
        //     console.log(err); // null
        //     console.log(data); // Hello
        //     callback();
        // });

        var filelist = 'In this build:\n\n';

        // 遍历所有编译过的资源文件，
        // 对于每个文件名称，都添加一行内容。
        for (var filename in compilation.assets) {
            filelist += ('- ' + filename + '\n');
        }

            console.log(filelist)
        // 将这个列表作为一个新的文件资源，插入到 webpack 构建中：
        compilation.assets['filelist.md'] = {
            source: function () {
                return filelist;
            },
            size: function () {
                return filelist.length;
            }
        };
        callback();

    });
};

module.exports = deployPlugin;