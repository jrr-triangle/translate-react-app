import axios from "axios"
import {api_url} from './ApiConstant'
class TestService{
    getButton(){
        
        return axios.get(`${api_url}/test`)
        
    }

    getTranslatedValue(body,target,source){
        return axios.post(`${api_url}/translate/newtext2?target=${target}&source=${source}`,body)
    }
}
export default new TestService()