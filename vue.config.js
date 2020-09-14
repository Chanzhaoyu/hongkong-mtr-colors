module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/hongkong-mtr-colours/' : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  devServer: {
    port: process.env.port || process.env.npm_config_port || 8088,
    open: true,
    hotOnly: true,
    overlay: {
      warnings: false,
      errors: true
    }
  }
}
