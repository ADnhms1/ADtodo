document.getElementById("uname").text = (localStorage.getItem("name"));

function todoAll(){
    document.getElementById("currentDropdown").innerText = "All";
    document.getElementById("list_items").innerHTML = "";
    var todoListItems = JSON.parse(localStorage.getItem("todo"));
    var todoListItemsDone = JSON.parse(localStorage.getItem("todoDone"));
    lis = "";
    todoListItems.forEach((e) => {
        lis += `<li class="item">${e}<span onclick="removeItem()" class="close">&times;</span></li>`
    })

    todoListItemsDone.forEach((e) => {
        lis += `<li class="item">${e}<span onclick="removeItem()" class="close">&times;</span></li>`
    })

    console.log(lis);

    document.getElementById("list_items").innerHTML += lis;
}

todoAll();

function todoCompleted(){
    document.getElementById("currentDropdown").innerText = "Completed";
    document.getElementById("list_items").innerHTML = "";
    var todoListItems = JSON.parse(localStorage.getItem("todoDone"));
    lis = "";
    todoListItems.forEach((e) => {
        lis += `<li class="item">${e}<span onclick="removeItem()" class="close">&times;</span></li>`
    })

    console.log(lis);

    document.getElementById("list_items").innerHTML += lis;
}

function todoUncompleted(){
    document.getElementById("currentDropdown").innerText = "Uncompleted";
    document.getElementById("list_items").innerHTML = "";
    var todoListItems = JSON.parse(localStorage.getItem("todo"));
    lis = "";
    todoListItems.forEach((e) => {
        lis += `<li class="item">${e}<span onclick="removeItem()" class="close">&times;</span></li>`
    })

    console.log(lis);

    document.getElementById("list_items").innerHTML += lis;
}

function registration() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mno = document.getElementById("mno").value;
    var dob = document.getElementById("dob").value;
    var pass = document.getElementById("password").value;
    var gen = document.getElementsByName("gen")[0].checked ? "Male" : "Female"
    localStorage.setItem("name",name);
    localStorage.setItem("email",email);
    localStorage.setItem("mno",mno);
    localStorage.setItem("dob",dob);
    localStorage.setItem("pass",pass);
    localStorage.setItem("gen",gen);
    a = []
    localStorage.setItem("todo",JSON.stringify(a));
    b = []
    localStorage.setItem("todoDone",JSON.stringify(b));
    window.location.href = "ADlogin.html";
}

function login(){
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    if((email === localStorage.getItem("email") || email === localStorage.getItem("mno")) && pass === localStorage.getItem("pass"))
    {
        console.log("Logged in");
        window.location.href = "ADhome.html";
    }
    else{
        console.log("Wrong uname and pass");
    }
}

function getLocation()
{
    if(navigator.geolocation)
    {
        var location = navigator.geolocation.getCurrentPosition((pos) => {
            console.log("permission given ");
            var geoLat = pos.coords.latitude.toFixed(5);
            var geoLng = pos.coords.longitude.toFixed(5);
            var geoAcc = pos.coords.accuracy.toFixed(1);
            fetch(`http://api.openweathermap.org/data/2.5/weather?lat=22.2&lon=71.1&appid=927c304854c0e44e657ea75883e4806e`)
            .then((response) => response.json())
            .then((data) => {
                const type = data.weather[0].main;
                const skyType = data.weather[0].description;
                const humidityLevel = data.main.humidity;
                const cityName = data.name;
                var loc = `<p>City : ${cityName}<p> <p>Weather : ${type}</p> <p>Sky Type : ${skyType}<p> <p>Humidity : ${humidityLevel}<p>`
                document.getElementById("WeatherDiv").innerHTML += loc;
            })
        },(err) => {
            console.log("permission denied ");
            switch (err.code) {
                case err.PERMISSION_DENIED:
                  alert("User denied the request for Geolocation.");
                  break;
                case err.POSITION_UNAVAILABLE:
                  alert("Location information is unavailable.");
                  break;
                case err.TIMEOUT:
                  alert("The request to get user location timed out.");
                  break;
                default:
                  alert("An unknown error occurred.");
              }
        });
    }
    else{
        alert("Navigator not available what browser is this?");
    }
}

getLocation();


function startTime() {  

    if(!localStorage.getItem("name"))
    {
        window.location.href = "ADregistration.html";
    }
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time_a').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
} 

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

function addItem(){
    var todoItem = document.getElementById("todoText").value;
    document.getElementById("todoText").value = "";
    if(!todoItem){
        alert("Please enter some todo");
    }

    var list = JSON.parse(localStorage.getItem("todo"));
    list.push(todoItem);
    localStorage.setItem("todo",JSON.stringify(list));
    var li = `<li class="item">${todoItem}<span onclick="removeItem()" class="close">&times;</span></li>`
    document.getElementById("list_items").innerHTML += li;
}

function removeItem(){
    var closebtns = document.getElementsByClassName("close");
    var i;

    for (i = 0; i < closebtns.length; i++) {
        closebtns[i].addEventListener("click", function() {
            this.parentElement.style.display = 'none';
            var listDone = JSON.parse(localStorage.getItem("todoDone"));
            listDone.push(this.parentElement.innerText.substr(0,this.parentElement.innerText.length-1));
            console.log("List Done : " + listDone);
            localStorage.setItem("todoDone",JSON.stringify(listDone));  
            var list = JSON.parse(localStorage.getItem("todo"));
            console.log(list);
            const index = list.indexOf(this.parentElement.innerText.substr(0,this.parentElement.innerText.length-1));
            if (index > -1) {
                list.splice(index, 1);
            }
            localStorage.setItem("todo",JSON.stringify(list));          
            console.log("updated : " + localStorage.getItem("todo"));
        });
    }
}

function imageChange(){
    // console.log("AD");
    setInterval(() => {
        var img = Math.floor(Math.random() * 2) + 1;
        document.getElementById("image").setAttribute('src',`${img}.webp`)
        console.log("ADnhmm " + `${img}.webp`)
    },(1000*120));
}

function alterTodo(){
    console.log("Altering");
}

function logout(){
    localStorage.clear();
    console.log("Logout");
}
