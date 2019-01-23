// const 定义常量
const config = {
    api_base_url:'http://bl.7yue.pro/v1/',
    appkey:"8hARSMgfuY2ykKws"
}
// config = 2  程序报错,修改了config的内存地址,所以报错
// config.appkey = 2 程序不报错,没修改内存地址,只是修改了js对象的属性

// 导出 config
export {config}