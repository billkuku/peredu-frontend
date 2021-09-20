module.exports = {
  devServer: {
    // port:8080,
    proxy: {
      '^/api': {
        target: 'http://localhost:8082',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
