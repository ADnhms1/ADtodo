document.getElementById("name").value = localStorage.getItem("name");
document.getElementById("mno").value = localStorage.getItem("mno");
document.getElementById("email").value = localStorage.getItem("email");
document.getElementById("dob").value = localStorage.getItem("dob");
document.getElementById("password").value = localStorage.getItem("pass");
genders = document.getElementsByName("gen")
genders.forEach((e) => {
    if(e.value===localStorage.getItem("gen"))
    {
        e.checked = true;
    }
})

function updateDetails(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mno = document.getElementById("mno").value;
    var dob = document.getElementById("dob").value;
    var pass = document.getElementById("password").value;
    var gen = document.getElementsByName("gen")[0].checked ? "Male" : "Female"
    if(!name || !email || !mno || !dob || !pass || !gen)
    {
        alert("Invalid data");
    }
    else{
        localStorage.setItem("name",name);
        localStorage.setItem("email",email);
        localStorage.setItem("mno",mno);
        localStorage.setItem("dob",dob);
        localStorage.setItem("pass",pass);
        localStorage.setItem("gen",gen);
        window.location.href = "ADhome.html";
    }
}