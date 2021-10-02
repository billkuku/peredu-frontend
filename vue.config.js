module.exports = {
  devServer: {
    // port:8080,
    proxy: {
      '^/api': {
        // target: 'https://peredu-backend.herokuapp.com',
        target: 'http://localhost:8082',
        ws: true,
        // pathRewrite: { "^/api": "/" },
        changeOrigin: true
      }
    }
  }
}
