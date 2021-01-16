const axios = require('axios')
let reqApi = {"fn":"nodeJS"}
let resData = []

async function makePostRequest() {

    for (let i=1; i<=5; i++){
        let res = await axios.post('https://api.dev.farmbook.co/mbapi/test', reqApi);
        resData.push(res.data.data)
    }

    console.log(resData);
}

makePostRequest();