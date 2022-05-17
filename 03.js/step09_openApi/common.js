"use strict"

const baseURL = "http://openapi.seoul.go.kr:8088/4b6258575a7768733130394d79676952/JSON/bookStoreAllInfo/1/50"






axios.get(baseURL, {
    // params: {
    //     key: keyValue,
    //     targetDt: targetDate
    // }
}).then(response => response.data.bookStoreAllInfo.row)
.then(result => console.log(result))