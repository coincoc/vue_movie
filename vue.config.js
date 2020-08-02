module.exports = {
  publicPath: "./",   // 相对路径
// 关闭eslint语法监听
//   proxy代理
  devServer: {
    proxy: {
      '/api': {
        target: 'https://localhost',
        changeOrigin: true
      }
    }
  }
}
