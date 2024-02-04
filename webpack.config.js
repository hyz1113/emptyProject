// webpack模块化默认使用的是CommonJS
module.exports = {
  // 入口：将webpack打包命令中源文件入口路径配置到这里
  entry: './src/main.js',
  // 出口：将webpack打包命令中输出文件路径配置到这里
  output: {
    path: './dist',
    filename: 'bundle.js'
  }
}
