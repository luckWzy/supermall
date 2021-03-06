const path = require('path'); //引入path模块
function resolve(dir) {
    return path.join(__dirname, dir) //path.join(__dirname)设置绝对路径
}
module.exports = {
    chainWebpack: (config) => {
        //给路径起别名
        config.resolve.alias
            .set('@', resolve('./src'))
            .set('assets', resolve('./src/assets'))
            .set('components', resolve('./src/components'))
            .set('common', resolve('./src/common'))
            .set('network', resolve('./src/network'))
            .set('views', resolve('./src/views'))
    }
}