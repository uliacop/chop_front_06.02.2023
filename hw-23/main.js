fetch('http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19')
.then(function (resp) { return resp.json() })
.then(function (data) {
    console.log(data);
    document.querySelector('.q').textContent = data.name;
    document.querySelector('.temp').innerHTML = `temp: `+data.main.temp + '&deg';
    document.querySelector('.description').textContent = `description: ` + data.weather[0]['description'];
    document.querySelector('.speed').textContent = `speed: `+ data.wind['speed'];
    document.querySelector('.pressure').textContent = `pressure: `+ data.main['pressure'];
    document.querySelector('.humidity').textContent = `humidity: ` + data.main['humidity'];
    document.querySelector('.deg').textContent = `deg: ` +  data.wind['deg'];
    document.querySelector('.deg').innerHTML = `deg: ${data.wind['deg']}&deg;`;
    document.querySelector('.image').innerHTML = `<img src ="http://openweathermap.org/img/w/10d.png">`;
});





