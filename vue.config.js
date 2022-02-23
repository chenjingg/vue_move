const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
    publicPath: '/',
    outputDir: 'dist', // 输出文件目录
    devServer: {
        // proxy: {
        //     '/api': {
        //         target: '',
        //         ws: true,
        //         changeOrigin: true,
        //         logLevel:'debug',
        //         pathRewrite: {
        //             '^/api': ''
        //         }
        //     }
        // }
    },
    chainWebpack: config => {
        config.resolve.alias
          .set("@", resolve("src"))
      },
  };
  