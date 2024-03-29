module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV=='production'?'./':'/',
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
}

