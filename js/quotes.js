var quoteArray = [];
const options = {
    method: 'GET',
    headers: new Headers({
        'x-apikey': '5ba40e121721c63a8a26c1e7',
    })
}


fetch('https://quotes-6343.restdb.io/rest/office-quotes', options)
    .then(res => res.json())
    .then(posts => {
        quoteArray = posts
        let randomIndex = Math.trunc(Math.random() * quoteArray.length);
        
    
        //Setting the quote and speaker on page load
        document.getElementById("Quote").innerHTML = quoteArray[randomIndex].quote;
      
        document.getElementById("quoteSpeaker").classList.add("blockquote-footer");
        document.getElementById("quoteSpeaker").innerHTML = quoteArray[randomIndex].speaker;
    });

/* fetch(`https://quotes-6343.restdb.io/rest/office-quotes`, options)
     .then(res => res.json())
     .then(posts => quoteArray = posts)


 function waitForElement() {
     if (quoteArray !== null) {
         console.log(quoteArray.length)
         let randomIndex = Math.trunc(Math.random() * quoteArray.length);

         console.log(randomIndex);
         console.log(quoteArray.toString())
         //Setting the quote and speaker on page load
        // document.getElementById("Quote").innerHTML = quoteArray[randomIndex].quote();
        // document.getElementById("quoteSpeaker").innerHTML = quoteArray[randomIndex].speaker();
     } else {
         setTimeout(waitForElement, 250);
     }
 }

  waitForElement();*/
