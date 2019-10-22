const path = require('path')
const env = require('./env')

function resolveSrc(_path) {
  return path.resolve(__dirname, _path)
}

module.exports = {
  configureWebpack: {
    // mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    resolve: {
      extensions: ['.js', '.json', '.vue'],   // 設置可以省略的文件後綴名
      alias: {
        // 'vue$': 'vue/dist/vue.esm.js',
        '@': resolveSrc('./src'),
        '@api': resolveSrc('./src/api'),
        '@jslib': resolveSrc('./src/jslib'),
        '@router': resolveSrc('./src/router'),
        '@assets': resolveSrc('./src/assets')
      }
    },
    devServer: {
      hot: true,  // 熱更新
      open: false, // 自動打開瀏覽器
      proxy: {
        '/admin': {
          target: env.API_ROOT,
          changeOrigin: true
        }
      }
    }
  }
}