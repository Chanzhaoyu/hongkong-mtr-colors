module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/hongkong-mtr-colors/' : '/',
  outputDir: 'docs',
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
