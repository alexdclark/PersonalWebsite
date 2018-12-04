   //Selecting the three clock hands for reference later.
   const secondHand = document.querySelector('.second-hand');
   const hourHand = document.querySelector('.hour-hand');
   const minuteHand = document.querySelector('.min-hand');

   var audio = document.createElement("audio");
   audio.src = '/resources/audio/time.mp3';

 let backgroundsArray = ["http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b8-2.mov",
       "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b9-3.mov","http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b6-3.mov","http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/comp_DB_D001_C005_t9_6M_HB_tag0.mov",
       "http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b5-3.mov"];

 let randomIndex = Math.trunc(Math.random() *5);

  // document.querySelector("#Background").src = backgroundsArray[randomIndex];

   function setClockHands() {

     //Creating a date variable to use in my degree calculations later on.
     const now = new Date();

     //Getting Seconds and converting to a degree and applying to second hand.
     const seconds = now.getSeconds();
     const secondsDegrees = ((seconds / 60) * 360) + 90;
     secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

     //Getting Minutes and converting to a degree and applying to minute hand.
     var minutes = now.getMinutes();
     const minuteDegrees = ((minutes / 60) * 360) + 90;
     minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;


     //Getting Hour and converting to a degree and applying to hour hand.
     var hour = now.getHours();
     const hourDegrees = ((hour / 12) * 360) + 90;
     hourHand.style.transform = `rotate(${hourDegrees}deg)`;

     var amORpm = "AM";

     //Converting hours from military time to normal time and handling AM/PM.
     if (hour > 12){
       if (hour>= 12){
       amORpm = "PM";
       }
       
       hour = hour%12;
       console.log("I changed the hours");

     
     }

     //If Minutes are less than 10 appending 0 to properly output minutes
     if (minutes<10){
       minutes = "0"+minutes;
     }



       randomIndex = Math.trunc(Math.random() *2);
     document.querySelector("#Background").src = backgroundsArray[randomIndex];

     document.getElementById("clockText").innerHTML = hour + ":" +minutes +" "  + amORpm; 

     
     console.log("The Current time is:", hour, ":", minutes, ":", seconds);
   }

     function playAudio() {
     //Adding in Freddie Mercury easter egg just because
    // audio.play();
    randomIndex = Math.trunc(Math.random() *5);
    document.querySelector("#Background").src = backgroundsArray[randomIndex];
   
    // var tempElement = document.getElementById("Background");
  
 
     location.reload();
    

   }


   randomIndex = Math.trunc(Math.random() *backgroundsArray.length);
     document.querySelector("#Background").src = backgroundsArray[randomIndex];

     document.getElementById("Background").addEventListener('click',playAudio);
   
   //Calling setClockHands function every second to update hands. 
   setInterval(setClockHands, 1000);