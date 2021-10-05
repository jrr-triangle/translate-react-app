import axios from "axios"
import {api_url} from './ApiConstant'
class TestService{
    getButton(){
        
        return axios.get(`${api_url}/test`)
        
    }

    getTranslatedValue(body){
        return axios.post(`${api_url}/translate/newtext2`,body)
    }
}
export default new TestService()