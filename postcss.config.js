module.exports={
  plugin:[
    require('postcss-import'),
    require('autoprefixer'),
    require('postcss-preset-env')({stage:2})
  ]
}