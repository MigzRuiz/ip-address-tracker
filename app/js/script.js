/*
    Goals:
    1. The user must be able to type and enter the desired IP address.
    2. the app must find the location, timezone and ISP of the IP address.
    3. the app must show the location from the map
        4. the map must have a marker.
*/
// VARIABLES
const searchInput = document.querySelector(".search__input");
const searchBtn = document.querySelector(".search__btn");
const ipEl = document.querySelector(".info__ip");
const locationEl = document.querySelector(".info__location");
const timezoneEl = document.querySelector(".info__timezone");
const ispEl = document.querySelector(".info__isp");

let inputIP;
const api_url = "https://geo.ipify.org/api/v1?";

// 1. The user must be able to type and enter the desired IP address.
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  inputIP = searchInput.value;
  console.log(inputIP);

  getIPData(inputIP);
});

// const ip = "8.8.8.8";
console.log(api);
const getIPData = function (ip, api) {
  fetch(`https://geo.ipify.org/api/v1?apiKey=${api}&ipAddress=${ip}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      ipEl.textContent = data.ip;
      locationEl.textContent = `${data.location.city}, ${data.location.country} ${data.location.postalCode}`;
      timezoneEl.textContent = data.location.timezone;
      ispEl.textContent = data.isp;
    });
};
