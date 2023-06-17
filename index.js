const daysElement=document.querySelector(".days");
const hoursElement=document.querySelector(".hours");
const minutesElement=document.querySelector(".minutes");
const secondsElement=document.querySelector(".seconds");
const heading=document.querySelector("h1");
const counterTimer=document.querySelector(".conuterTimer")

const seconds=1000;
const minute=60*seconds;
const hour =60*minute;
const days=24*hour;





const timerFuction = ()=>{

    let now =new Date();
    let dd=String(now.getDate()).padStart(2,"0");
    let mm=String(now.getMonth()+1).padStart(2,"0");
   // let dd=String(now.getDate().padStart(2,"0"));
    let yyyy=now.getFullYear();

    const enteredDay=prompt("Enter Day".padStart(2,"0"));
    const enteredMonth=prompt("Enter Month".padStart(2,"0"));
    //const enteredYear=prompt("Enter Year",padStart(2,"0"));
    now=`${mm}/${dd}/${yyyy}`
    


    console.log(`${enteredMonth}/${enteredDay}/${yyyy}`);
    let targetDate=`${enteredMonth}/${enteredDay}/${yyyy}`

    if(now> targetDate){
        targetDate=`${enteredMonth}/${enteredDay}/${yyyy+1}`
    }

   const intervalId=setInterval(() => {
        const timer = new Date(targetDate).getTime();
        const today=new Date().getTime();

        const differece = timer-today;
        const leftDay=Math.floor(differece / days);
        const lefthour=Math.floor((differece % days)/hour);
        const leftminute=Math.floor((differece % hour)/minute);
        const leftsecond=Math.floor((differece % minute)/seconds);

        daysElement.innerText=leftDay;
        hoursElement.innerText=lefthour;
        minutesElement.innerText=leftminute;
        secondsElement.innerText=leftsecond;

            
            if(differece <0 ){
                counterTimer.style.display="none";
                heading.innerText="Time's Up";
                clearInterval(intervalId);

            }
            
        }, 0);
        

        



}

timerFuction();