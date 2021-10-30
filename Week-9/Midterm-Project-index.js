console.log("javascript working");
document.getElementById("home").addEventListener("click", homebutton);
document.getElementById("about").addEventListener("click", aboutbutton);
document.getElementById("portfolio").addEventListener("click", portfoliobutton);

function homebutton(){
document.getElementById("h1").innerHTML = "May Ma";
document.getElementById("p").innerHTML = "I am an interactive and graphic designer. Current student at the University of Colorado-Boulder. I am majoring in Strategy Communication - Media Design, and minoring in Creative Technology and Design. ";
}

function aboutbutton(){
document.getElementById("h1").innerHTML = "What can I do?";
document.getElementById("p").innerHTML = "Creating engaging web interfaces with logical and thought-out behaviors and actions. Use good communication technology to provide more convenient and creative solutions.";
}


function portfoliobutton(){
document.getElementById("h1").innerHTML = "Link for my design portfolio!";
document.getElementById("p").innerHTML = "https://www.maymadigital.com";
}
