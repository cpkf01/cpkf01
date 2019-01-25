// 导入config.js 里的东西
import {config} from '../config.js'

const tips = {
    1:'抱歉,服务器离家出走了',
    1005:'appkey无效，请前往www.7yue.pro申请',
    3000:'期刊不存在'
}

// 用es6语法,创建一个类
class HTTP {
// request方法
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
                // 改状态码是数字,需要转一下字符串
                let code = res.statusCode.toString();

                if (code.startsWith('2')) {
                    params.success(res.data)
                } else {
                    let error_code = res.data.error_code;
                    console.log(error_code);
                   this._show_error(error_code)
                }
            },
            fail:(err)=>{
                // 比如断网情况下会出现,我们默认给个1错误码
                this._show_error(1)
            }
        })
    }
// 错误码方法
    _show_error(error_code){
        // 如果错误码不存在时,默认错误码是1
        if(!error_code){
            error_code = 1
        }
        wx.showToast({
            title:tips[error_code],
            icon:'none',
            duration:2000

        })
    }

}
export {HTTP}