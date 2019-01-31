
    if (bowser.msie && bowser.version <= 6) {
        document.getElementById("Quote").innerHTML = "Open this page in something other than IE to see more!"
    }

    else{

var quoteArray = [];
var options = {
    method: 'GET',
    headers: new Headers({
        'x-apikey': '5ba40e121721c63a8a26c1e7'
    })
};


fetch('https://quotes-6343.restdb.io/rest/office-quotes', options).then(function (res) {
    return res.json();
}).then(function (posts) {
    quoteArray = posts;
    var randomIndex = Math.trunc(Math.random() * quoteArray.length);


    //Setting the quote and speaker on page load
    document.getElementById("Quote").innerHTML = quoteArray[randomIndex].quote;

    document.getElementById("quoteSpeaker").classList.add("blockquote-footer");
    document.getElementById("quoteSpeaker").innerHTML = quoteArray[randomIndex].speaker;

    }
});

