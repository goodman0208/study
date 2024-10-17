const { defineConfig } = require('@vue/cli-service')

const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

const name = process.env.VUE_APP_TITLE || '中国高等教育学生信息网（学信网）' // 网页标题
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  lintOnSave: false,// 是否开启eslint保存检测 ,它的有效值为 true || false || 'error'
  configureWebpack: {
      name: name,
      resolve: {
          alias: {
              '@': resolve('src')
          }
      }
  },
})
