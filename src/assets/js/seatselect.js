
var x = 0;
var seats = 0;

function myFunction(id) {
    
    if(document.getElementById(id).style.backgroundColor === "green"){
        x = x-399
        seats = seats-1;
    
        document.getElementById("totam").innerHTML = x;
        document.getElementById("details").innerHTML = seats;
        document.getElementById(id).style.backgroundColor = "white";
    }
    else if(seats>4)
    {
        five();
        return '';
    }
    else{
        x = x+399
        seats = seats+1;
        document.getElementById("totam").innerHTML = x;
        document.getElementById("details").innerHTML = seats;
        document.getElementById(id).style.backgroundColor = "green";

    }
    let seat_serialized = JSON.stringify(seats);
    localStorage.setItem("seat",seat_serialized);
    console.log(localStorage);
}


function five()
{
    alert('No more than 5 seats can be selected');
}
function printsb(){
    if (seats==0)
    {
        alert("Please select seats to proceed");
        return '';
    }
}
function myfunc(){
    document.getElementById("logout").style.display="none";
    alert("Logged out successfully")
}
function displayfunc(){
    document.getElementById("logout").style.display="block";
    alert("Logged in successfully");
}
function hideabout(){
    document.getElementById("contact").style.display = "block";
    document.getElementsByClassName("container1").style.display = "none";
}
