// HERE IS THE COUNTDOWN    

setInterval(function () {

    const dateNow = new Date();

    const dateTarget = new Date("2022-12-14T10:30:00");

    const difference = dateTarget - dateNow;

    const day = Math.floor((difference / 1000 / 60 / 60 / 24));
    const seconds = Math.floor((difference / 1000) % 60)
    const minutes = Math.floor((difference / 1000 / 60) % 60)
    const hour = Math.floor((difference / 1000 / 60 / 60) % 24)

    document.querySelector(".day").innerHTML =

        day.toString().padStart(2, "0")//.getHours()

    document.querySelector(".hour").innerHTML =

        hour.toString().padStart(2, "0")//.getHours()

    document.querySelector(".minute").innerHTML =

        minutes.toString().padStart(2, "0")//.getMinutes()

    document.querySelector(".second").innerHTML =

        seconds.toString().padStart(2, "0")//.getSeconds()

}, 1000);

//THIS IS THE CLOCK 

setInterval(function () {

    const dateNow = new Date();

    document.querySelector(".hour-1").innerHTML =

        dateNow.getHours().toString().padStart(2, "0")

    document.querySelector(".minute-1").innerHTML =

        dateNow.getMinutes().toString().padStart(2, "0")

    document.querySelector(".second-1").innerHTML =

        dateNow.getSeconds().toString().padStart(2, "0")

}, 1000);

// HERE IS THE WISH DATE BY USER

let dateTarget = new Date();

document.querySelector(".date-button").addEventListener("click", function () {
    dateTarget = new Date(document.querySelector(".date-input").value);
})

setInterval(function () {

    const dateNow = new Date();

    let difference = dateTarget - dateNow;

    const day = Math.floor((difference / 1000 / 60 / 60 / 24));
    const seconds = Math.floor((difference / 1000) % 60)
    const minutes = Math.floor((difference / 1000 / 60) % 60)
    const hour = Math.floor((difference / 1000 / 60 / 60) % 24)

    document.querySelector(".day-2").innerHTML =

        day.toString().padStart(2, "0")

    document.querySelector(".hour-2").innerHTML =

        hour.toString().padStart(2, "0")

    document.querySelector(".minute-2").innerHTML =

        minutes.toString().padStart(2, "0")

    document.querySelector(".second-2").innerHTML =

        seconds.toString().padStart(2, "0")

}, 1000);


