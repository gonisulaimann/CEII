const mainCon = document.querySelector(".main-main-con");

//get and render the weather data
const getAndRenderWeatherData = async function () {
  try {
    const url =
      "https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "25354fc99cmsh0cbb836451bc330p1a16e1jsnb772fac0430d",
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
      },
    };

    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);

    insertDataToDom(result);
  } catch (error) {
    console.error(error);
  }
};

//insert the weather data to the DOM
const insertDataToDom = function (data) {
  mainCon.innerHTML = generateWeatherHtml(data);
};

//generate the weather HTML based on the data
const generateWeatherHtml = function (data) {
  return `   
   <div class="main-con">
      <div class="con-header">${data.location.name}, ${data.location.country}</div>
      <div class="con-content">
        <h1 class="heading-degree">${data.current.temp_c}°C</h1>
        <div class="weather-cloudy">${data.current.condition.text}</div>
        <div class="weather-image">
          <img src="${data.current.condition.icon}" alt="Weather Icon" />
        </div>
      </div>
    </div>`;
};

///initialize
const init = function () {
  getAndRenderWeatherData();
};
