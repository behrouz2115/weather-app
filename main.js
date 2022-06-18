
const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const error = document.querySelector(".top-banner .error");
const list = document.querySelector(".second-section .cities");5

 //h

const KeyAPI_weather = "1b7034a6b1e59f59f7244f72274de759";

form.addEventListener("submit", e => {
    e.preventDefault();
    let selectedCity = input.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${KeyAPI_weather}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const { main, name, sys, weather } = data;
            const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`
            const li = document.createElement("li");
            li.classList.add("city");
            const markup = `
            <h2 class='city-name' data-name=${name},${sys.country}>
                <span>${name}</span>
                <span>${sys.country}</span>
            </h2>
            <div class='city-temp'>${(main.temp)}</div>
            <figure>
                <img class='city-icon' src='${icon}' alt ='city' >
                <figurecaption>${weather[0]["description"]}</figurecaption>
                </figure>
                `;
            li.innerHTML = markup;
            list.appendChild(li);
            error.innerText = ""
        })
        .catch(() => {
            error.innerText = "Search for a valid city"
        })
        input.value = ""
    });
    