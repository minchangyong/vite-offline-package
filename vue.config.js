const { defineConfig } = require('@vue/cli-service')
const OfflinePackagePlugin = require('offline-package-webpack-plugin')

console.log(process.env.ENV)
const IS_PRO = process.env.ENV === 'app'
module.exports = {
  chainWebpack(config) {
    if (IS_PRO) {
      config.plugins.delete('prefetch') //打包后href="prefetch"ios不能拦截
      config.plugin('provide').use(OfflinePackagePlugin, [{
        packageNameKey: 'packageId',
        packageNameValue: 'offline-package',
        folderName: 'offline-package',
        version: 1,   //版本号，手动更新
        baseUrl: 'http://192.168.223.206:8080/',
        fileTypes: ['html', 'js', 'css', 'png']
      }])
    }
  },
  transpileDependencies: true
}

