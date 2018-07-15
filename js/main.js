document.getElementsByClassName("class1")[0].style.backgroundColor = "green";

var newH1 = document.createElement("h1");
newH1.innerText = "Hello, my name is Taylor";

document.getElementById("id1").appendChild(newH1);

var secondNewH1 = document.createElement("h1");
var newTextNode = document.createTextNode("Dogs!");

secondNewH1.appendChild(newTextNode);
document.getElementById("id2").appendChild(secondNewH1);

function changeImage() {
	var img1 = document.getElementById("img1");

	img1.src = "https://cdn.vox-cdn.com/thumbor/2DCB88WZk2lFs9yTZ2FK0PfwGRo=/0x0:3973x3227/1200x800/filters:focal(1687x1300:2321x1934)/cdn.vox-cdn.com/uploads/chorus_image/image/60357673/996624168.jpg.0.jpg";
	img1.alt = "Oakland A's";
};s