"use strict"

const baseURL = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json"
const keyValue = "cf77fa88b614817609beb21fe56b38f0"
const targetDate = 20211101;
const drawInfoElement = document.getElementById("draw-info");

// 일별 박스오피스에서
// 2021년 11월 1일에 관객수가 2000 이상이고
// 상영된 횟수가 홀수인 영화만 출력해주세요!
let urlArr=[{
        rnum : '1',
        mainUrl : "https://movie-phinf.pstatic.net/20210915_104/1631681279096sdjNA_JPEG/movie_image.jpg",
        backgroundUrl : "https://file.mk.co.kr/meet/neds/2021/11/image_readtop_2021_1034057_16357473724834722.jpg"},
    {   
        rnum : '4',
        mainUrl : "https://movie-phinf.pstatic.net/20211013_124/1634113091609idAKj_JPEG/movie_image.jpg",
        backgroundUrl : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTExMDZfMzYg%2FMDAxNjM2MjA5OTE0Nzc1.h2f1UYLiRPi5OtfPzNU-NUxuaPwjykT5UdVoD1OFUH0g.Ym1cGCBWzeQu1GSh4pC9SBQ1N6yM-No28SGmjJ7CszUg.JPEG.urjj%2FIMG_1326.jpg&type=sc960_832"},
    {
        rnum : '5',
        mainUrl : "https://movie-phinf.pstatic.net/20210831_152/1630371935224qy9s6_JPEG/movie_image.jpg",
        backgroundUrl : "https://movie-phinf.pstatic.net/20210812_250/1628729731779sqakv_JPEG/movie_image.jpg?type=m886_590_2"}
    ]
axios.get(baseURL, {
    params: {
        key: keyValue,
        targetDt: targetDate
    }
}).then(response => response.data)
.then((data) =>
    data.boxOfficeResult.dailyBoxOfficeList.filter(
        (el) => (el.audiCnt >= 2000) && (el.showCnt % 2 === 1)
    )
).then((result) => {
    result.forEach(element => {
        for (let i = 0; i < urlArr.length; i++) {
            if(urlArr[i].rnum === element.rnum)  {
                element.mainUrl = urlArr[i].mainUrl;
                element.backgroundUrl = urlArr[i].backgroundUrl;
                console.log(element.mainUrl);
                console.log(element.backgroundUrl);
            }          
        }
        drawInfoElement.innerHTML += `
        <div class="col-md-4">
        <div class="main">
            <div class="movie-img">
                <img src=${element.backgroundUrl}
                    class="backimg">
                <img class="movie-cover"
                    src=${element.mainUrl}>
                <i class="fa fa-play"></i>
            </div>
            <!-- 영화제목 movieNm -->
            <div class="movie-title">${element.movieNm}</div>
            <!-- 영화정보 -->
            <div class="movie-info-head text-center">
                <!-- rankOldAndNew -->
                <p>Status</p>
                <!-- rank -->
                <p>Rank</p>
                <!-- scrnCnt -->
                <p>Screens</p>
                <!-- showCnt -->
                <p>Show</p>
            </div>
            <div class="movie-info-content text-center">
                <!-- rankOldAndNew -->
                <p>${element.rankOldAndNew}</p>
                <!-- rank -->
                <p>${element.rank}</p>
                <!-- scrnCnt -->
                <p>${element.scrnCnt}</p>
                <!-- showCnt -->
                <p>${element.showCnt}</p>
            </div>
        </div>
        </div>`    
    });
})