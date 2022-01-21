
var x = 0;
var seats = 0;

function myFunction(id) {
    if(seats>4)
    {
        five();
        return '';
    }
    
    x = x+399
    seats = seats+1;

    document.getElementById("totam").innerHTML = x;
    document.getElementById("details").innerHTML = seats;
    document.getElementById(id).style.backgroundColor = "green";
}
function five()
{
    alert('No more than 5 seats can be selected');
}
