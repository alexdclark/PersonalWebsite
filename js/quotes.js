if (navigator.msMaxTouchPoints !== void 0){
    document.getElementById("Quote").innerHTML = "Please consider using a browser other than Internet Explorer to see full functionality of this site."
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
});
}

