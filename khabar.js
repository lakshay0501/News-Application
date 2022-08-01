console.log("Hey there!");

let news = document.getElementById('news');

// let source = 'bbc-news';

let apikey = 'b1107e9d256b4c6cb55c409ebd413667'

// create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}`, true);
// xhr.getResponseHeader('Content-Type', 'application/json');

// xhr.onprogress = function() {
//     console.log('request is in progress');
// }

// what to do when response is ready
xhr.onload = function() {
    if(xhr.readyState===4){
        if (this.status === 200) {
            let json = JSON.parse(this.responseText)
            let articles = json.articles
            let output = '';
            articles.forEach(function(article,index) {
                console.log(index)
                let newsunlimited = `
                            <p>
                            <button class="btn btn-primary ms-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample"
                                aria-expanded="false" aria-controls="collapseWidthExample">
                                <b>Breaking News ${index+1}: </b>${article.title}
                            </button>
                            </p>
                            <div style="min-height: 120px;">
                            <div class="collapse collapse-horizontal ms-5" id="collapseWidthExample">
                                <div class="card card-body" style="width: 300px;">
                                    ${article.content}. <a href="${article.url}" target="_blank">Read more here</a>
                                </div>
                            </div>
                            </div>
                            `
                output+=newsunlimited;
            });

            news.innerHTML = output;
            // console.log(this.responseText)
        }
        else{
            console.log("Error");
        }
   }
}

xhr.send()

