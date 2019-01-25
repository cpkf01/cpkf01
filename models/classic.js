import { HTTP } from "../util/http";

class ClassicModel extends HTTP{
    getLatest(sCallBack){
        this.request({
            url:'classic/latest',
            success:(res)=>{
              console.log(res)
              sCallBack(res)
            }
          })
    }
}
export {ClassicModel}