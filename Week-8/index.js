const images = ["S&S-pk-rib.jpg","sushi.jpg","tofu-pudding.jpg"];
const title = ["rib", "sushi", "tofu pudding"];


for(i=0;i<document.getElementsByClassName('label').length;i++){
  // console.log(document.getElementsByClassName("options")[i].innerHTML);
  document.getElementsByClassName("options")[i].innerHTML += '<img src="assets/' + images[i] +  ' "> ';

  //set the id of each section
  document.getElementsByClassName("options")[i].setAttribute("id", title[i]);
  //call changecolor with the ID of the section when clicked
  document.getElementsByClassName("options")[i].addEventListener("click", function(){changeColor(this.id)});
}

function changeColor(sectionID){
  console.log(sectionID);
  document.getElementById(sectionID).classList.toggle("blue");
}
