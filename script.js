console.log("news Api");

let today = document.getElementById('TodayNews');
let weekly = document.getElementById('WeeklyNews');
let business = document.getElementById('businessNews');

// api key 69200d2e87524159afcbec5c1a89fc9b

//         `<div class="news-card mb-3 mt-2">
//  <div class="card ">
//      <div class="card-header">Featured</div>
//      <div class="card-header date">Featured</div>
//      <div class="card-body">
//        <h5 class="card-title">Special title treatment</h5>
//        <p class="card-text">With supporting text below as a natural lead-in to additional content.
//        </p>
//      <a href="#" class="btn btn-primary">Go somewhere</a>
//    </div>
//  </div>
// </div> `;

// make a xhr request
const xhrobj = new XMLHttpRequest();
xhrobj.open('GET', 'https://newsapi.org/v2/top-headlines?country=us&apiKey=69200d2e87524159afcbec5c1a89fc9b');
xhrobj.onload = function () {

    if (this.status == 200) {
        let JSONonj = JSON.parse(this.responseText);
        let articles = JSONonj.articles;
        // console.log(artical);
        console.log(articles);
        let newsHTML = "";

        articles.forEach(function (elements, index) {

            let NewsField = `<div class="news-card mb-3 mt-2">
            <div class="card ">
                <div class="card-header" id="heading${index}"> ${elements["title"]}</div>
                <div class="card-header date">Author: ${elements["author"]}</div>
                <div class="card-body">
                    <h5 class="card-title"></h5>
                    <p class="card-text">${elements["description"]}</p>
                    <a href="${elements["url"]}" class="btn btn-primary">See Details</a>
                </div>
            </div>
        </div>`;
            newsHTML += NewsField;

        });
        today.innerHTML = newsHTML;
    }
    else {
        console.log("some error");
    }
}
xhrobj.send();