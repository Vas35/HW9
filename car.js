// Задача №:1 Coздать несколько свойств и методов для класса Сar. Done! 
function Car (speed,color) {
	this.speed = speed ;
	this.color = color;
	      alert(speed,color);
	this.radio = function() {
		console.log("radio");
		
var car1 = new Car (200,"red");
	car1.speed = 220;
	console.log(car1);
	car1.radio();


// Задача №2: Преобразывать старую программу в функцию класс. Не понятно каким образом None!
function Translate (message) {
	this.message = message;
	this.translit = "";
	
	 this.setMessage = function () {
		 message = message.toLowerCase();   
        this.message = message;	 
	 }
	 this.newMessage = function () {
		this.setMessage ();
            console.log(this.message);		
}

var translate1 = new Translate ("Иванов Иван");

