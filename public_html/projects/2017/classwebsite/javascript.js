var pop = 1;

function functionOne() {
if (pop == 1 || pop == 3) {
var waves = document.getElementById("waves");
waves.style.height = "200px";
waves.style.justifyContent = "center";
waves.style.alignItems = "center";
waves.style.display = "flex";
waves.style.backgroundColor = "#85c1e9";
var image = document.createElement("IMG");
image.setAttribute("src","download.jpg");
image.setAttribute("id", "image")
waves.appendChild(image);
console.log(pop);
}
if (pop == 2){
console.log(pop)
var image = document.getElementById("image");
image.remove(image);
var waves = document.getElementById("waves")
var para = document.createElement("P");
para.setAttribute("id","para")
waves.appendChild(para);
var paras =  document.getElementById('para');
paras.innerHTML = "This is my favorite bird! I don't know why, but I just like them.";
paras.style.justifyContent = "center";
paras.style.fontFamily = "cursive";

}
if (pop == 3){
var para = document.getElementById("para");
para.remove();
var image = document.getElementById("image");
image.remove();
pop = 0;
}
pop++
}



var a = 1
function functiontwo(){
var sources = document.getElementById("sources");
var paragraph = document.getElementById("paragraph")
var imgcontent = document.getElementById("imgcontent");
console.log(a);
var o = document.getElementById("images");
o.style.height = "400px";
o.style.display = "flex";
imgcontent.style.width = "250px";
paragraph.style.fontFamily = "cursive";
paragraph.style.fontSize = "25px";
paragraph.style.color = "black";
paragraph.style.display = "flex";
paragraph.style.textAlign = "center";
o.style.justifyContent = "center";
if (a == 1) { imgcontent.setAttribute("src","imgone.jpeg");
sources.setAttribute("href","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtwMz_WedVYF1NQuqyU7LuQmZodBhPJr2KyHW0JOMeqiKWy1ZZtQ");
paragraph.innerHTML = "This is a character named \"tux\" he is a penguin that represents Linux. Linux is an old language, I like to use Linux to navigate around the computer."
}
if (a == 2){imgcontent.setAttribute("src","imgtwo.jpg");
sources.setAttribute("href","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ6ako6x-0YfA1AMLCVPlmfqohhYnNRGhbYzhpvyeHc-vjpGv7");
paragraph.innerHTML = "Why do I like this character so much? well I like it because it reminds me of how special computers are. Back in the 80's, computers were complex, to make a game you would need to learn a language such as Linux or Java and so on. Now we have all the easy languages."

}
console.log(a);
if (a == 3) { imgcontent.setAttribute("src","imgthree.jpg");
sources.setAttribute("href","http://www.preprogrammer.com/linux-important-facts-filenames/");
paragraph.innerHTML = "This is an example of some Linux code. If you are familar with a program called \"Terminal\"\,which is usually on all Macs. This program runs Linux, Developers use it for many things, such as making files or checking servers."
}
if (a == 4){imgcontent.setAttribute("src","imgfour.jpg")
sources.setAttribute("href","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgJYyj3kPDLQyt_kDxBHL6JtiMJcKqutmJkuzHwT4bybu-3rIQZA");
paragraph.innerHTML = "Why do I like this character so much? well I like it because it reminds me of how special computers are. Back in the 80's, computers were complex, to make a game you would need to learn a language such as Linux or Java and so on. Now we have all the easy languages."
paragraph.innerHTML = ""
}
if (a < 5){a++}
if (a == 5){ a = 1}


}
