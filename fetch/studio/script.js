//TODO: Add Your Code Below
window.addEventListener("load", function(){
    const container = document.getElementById("container");
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            console.log(json);

            let sortedData = json.sort((a,b) => a.hoursInSpace-b.hoursInSpace);
            console.log(sortedData);
            //astronauts = "";
            for (let i=0; i<json.length; i++){
            let className = "";
                if(json[i].active === true) {
                     className = "active" 
                }
                container.innerHTML += `
            <div class="astronaut">
                <div class="bio">
                    <h2>${json[i].firstName} ${json[i].lastName}</h2>
                    <h3>Number: ${[i+1]}
                    <ul>
                    <li>Hours in space: ${json[i].hoursInSpace}</li>
                    <li class="${className}">Active: ${json[i].active}</li>
                    <li>Skills: ${json[i].skills.join(", ")}</li>
                    </ul>
                </div>
                <img class="avatar" src="${json[i].picture}"/>
            </div>
                `;
            }
        })
    })
});