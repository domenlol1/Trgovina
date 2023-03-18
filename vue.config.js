const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  outputDir: path.resolve(__dirname, '../server/public'),
  transpileDependencies: true,
  pages: {
    'index': {
      entry: './src/pages/Home/main.js',
      title: 'Trgovina/home',
    },
    'login': {
      entry: './src/pages/Login/main.js',
      title: 'Trgovina/login',
    },
    'signup': {
      entry: './src/pages/Signup/main.js',
      title: 'Trgovina/signup',
    },
    'cart': {
      entry: './src/pages/Cart/main.js',
      title: 'Trgovina/cart',
    },
  },
})
