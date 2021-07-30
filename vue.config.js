module.exports = {
  devServer: {
    contentBase: './dist',
    compress: true,
    port: 8000,
    allowedHosts: [
      'localhost:8080'
    ],
    stats: 'errors-only',
    clientLogLevel: 'error'
  },
  transpileDependencies: [
    'vuetify'
  ]
}
