if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) { //test for MSIE x.x;
    var ieversion=new Number(RegExp.$1) // capture x.x portion and store as a number
    if (ieversion>=8){
    document.getElementById("Quote").innerHTML = "Please use something other than IE"
    document.getElementById("clockLink").innerHTML = "";
    }
    else if (ieversion>=7){
    document.getElementById("Quote").innerHTML = "Please use something other than IE"
    document.getElementById("clockLink").innerHTML = "";
    }

    else if (ieversion>=6){
    document.getElementById("Quote").innerHTML = "Please use something other than IE"
    document.getElementById("clockLink").innerHTML = "";
    }
    else if (ieversion>=5){
    document.getElementById("Quote").innerHTML = "Please use something other than IE"
    document.getElementById("clockLink").innerHTML = "";
    }
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

