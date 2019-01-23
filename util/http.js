// 导入config.js 里的东西
import {config} from '../config.js'
// 用es6语法,创建一个类
class HTTP {
// HTTP 是类名
    request(params){
// request 是方法名
        wx.request({
            // url 是两部分拼起来的
            url:config.api_base_url + params.url,
            method:params.method,
            data:params.data,
            header:{
                'content-type':'application/json',
                'appkey':config.appkey
            },
            success:(res)=>{
                // startsWith
                // endsWith
                let code = res.statusCode.toString();

                if (code.startsWith('2')) {
                    
                } else {
                    
                }
            },
            fail:(err)=>{

            }
        })
    }
}