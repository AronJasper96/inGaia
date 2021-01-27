import axios from 'axios';

const propertyCalc = async () =>{
    try {
        const request = await axios({
            method: 'GET',
            url: `http://127.0.0.1:4000/v1/value/meters`,
            timeout: 500000,
            headers: {'Content-Type':'application/json'},
            json:true,
            //body: {}
        })
        return request.data;
    } catch (error) {
        return error;
    }
}

export {propertyCalc};