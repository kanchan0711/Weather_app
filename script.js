function GetInfo(){
    const newName= document.getElementById("cityInput");
    const cityName = document.getElementById("cityName");
    cityName.innerHTML ="__"+newName.value+"__"
}

fetch("https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&lon={lon}&appid={API%20key}")
.then(response => responce.json())
.then(data =>{
    for(i=0; i<5; i++){
        document.getElementById("day" +(i+1)+'Min').innerHTML ="Min:" + Number(data.list[i].main.temp_min -288.53).toFixed(1)+"kelvin" ;
    }
    for(i=0; i<5; i++){
        document.getElementById("day" +(i+1)+'MA X').innerHTML ="Max:" + Number(data.list[i].main.temp_max -288.53).toFixed(1)+"kelvin" ; 
     }
     for(i=0; i<5; i++){
        document.getElementById("day" +(i+1)+'MA X').src = " http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon+".png" ;
     }
})

.catch(err => alert("Something Went Wrong"))

function DefaultScreen(){
    document.getElementById("cityInput").defaultValue ="India";
    GetInfo();
}
const d = new Date();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

function checkDay(day){
    if(day +d.getDay()> 6){
        return day +d.grtDay()-7;
    }
    else{
        return day +d.getDay();
    }
}

for(i=0;i<5;i++){
    document.getElementById("day"+(i+1)).innerHTML = weekDAY[checkDay(i)];
}