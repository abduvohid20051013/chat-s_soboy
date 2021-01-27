let formElementSend = document.querySelector('.send-form')
let buttonElement = document.querySelector('.send-btn');
let formElementReceive = document.querySelector('.receive-form');
let inputElementSend = document.querySelector('.send-input');
let inputElementReceive = document.querySelector('.receive-input');
let ulElement = document.querySelector('.chat-massengers');




formElementSend.onsubmit = function(event){
	event.preventDefault();
	if(inputElementSend.value){
		let liElement = document.createElement('li');
		liElement.classList.add('send');
		liElement.textContent = inputElementSend.value;
		ulElement.appendChild(liElement)
		inputElementSend.value = ""
	}else{
		alert('Biror malumot kiriting.!') 
	}
}

formElementReceive.onsubmit = function(event){
	event.preventDefault();
	if(inputElementReceive.value){
		let liElement = document.createElement('li');
		liElement.classList.add('receive');
		liElement.textContent = inputElementReceive.value;
		ulElement.appendChild(liElement)
		inputElementReceive.value = ""
	}else{
		alert('Biror malumot kiriting.!') 
	}
}