// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", () => {
    console.log("page is fully loaded");
    const takeoff = document.getElementById("takeoff"); //declare a var to capture an element
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const landing = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const left = document.getElementById("left");
    const right = document.getElementById("right");
    const rocket = document.getElementById("rocket");
    rocket.style.position = 'absolute';
    rocket.style.left = "0px";
    rocket.style.bottom = '0px';

    takeoff.addEventListener('click', event => { //listening for click event
        if(window.confirm("Confirm that the shuttle is ready for takeoff.")){ //check if the event is true
            flightStatus.innerHTML = "Shuttle in flight"; //changing the fliht status inside HTML
            shuttleBackground.style.backgroundColor = "blue"; //changing backgroung color in CSS
            spaceShuttleHeight.innerHTML = 10000; //changing shuttle height inside HTML
        }
    })

    landing.addEventListener('click', event => {
        window.alert = "The shuttle is landing. Landing gear engaged."; //getting alert window after clickink the button
        flightStatus.innerHTML = "The shuttle has landed."; //changing the fliht status inside HTML
        shuttleBackground.style.backgroundColor = "green"; //changing backgroung color in CSS
        spaceShuttleHeight.innerHTML = 0; //changing shuttle height inside HTML
    })

    missionAbort.addEventListener('click', event => {
        if(window.confirm("Confirm that you want to abort the mission.")){ //check if the event is true
            flightStatus.innerHTML = "Mission aborted."; //changing the fliht status inside HTML
            shuttleBackground.style.backgroundColor = "green"; //changing backgroung color in CSS
            spaceShuttleHeight.innerHTML = 0; //changing shuttle height inside HTML
        }
    })

    up.addEventListener("click", event =>{
       let movement = parseInt(rocket.style.bottom) + 10 + 'px';
       rocket.style.bottom = movement;
       spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 1000;
    })

    down.addEventListener('click', event =>{
        let movement = parseInt(rocket.style.bottom) - 10 + 'px';
        rocket.style.bottom = movement;
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) - 1000;
    })

    left.addEventListener('click', event =>{
        let movement = parseInt(rocket.style.left) - 10 + 'px';
        rocket.style.left = movement;
    })

    right.addEventListener('click', event =>{
        let movement = parseInt(rocket.style.left) + 10 + 'px';
        rocket.style.left = movement;
    })
});
