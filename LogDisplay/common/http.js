

const httpUtils = {
    httpGet:function(url,params,header){
        let result = {}
        fetch(url,params).then((data) => {
            return data.json();
        }).then((data) => {
            result.code = data.code;
            if(result.code != 1){
                result.message = data.message;
            }else{
                result.data = data.data
            }
        }).catch((err) => {
            result.code = -1;
            result.message = err;
        })
        return result;
    }
}


export default httpUtils;