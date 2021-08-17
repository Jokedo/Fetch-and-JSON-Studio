
    window.addEventListener("load",function (){
        fetch("https://handlers.education.launchcode.org/static/astronauts.json"
            ).then(function(response){
                response.json().then( function(astronauts){
                    console.log(astronauts);
                    const Astro = document.getElementById("container");
                    let index = 0;    
                    astronauts.forEach(astronaut => Astro.innerHTML +=`<div class="astronaut">
                <div class="astronaut"> 
                    <div class="bio">
                       <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                       <ul>
                          <li>Hours in space: ${astronaut.hoursInSpace}</li>
                          <li>Active: ${astronaut.active}</li>
                          <li>Skills: ${astronaut.skills}</li>
                       </ul>
                    </div>
                    <img class="avatar" src= ${astronaut.picture}>
                 </div>`
                 )
                })
            })
            
    })
// TODO: add code here