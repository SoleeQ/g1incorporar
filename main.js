const popup = document.querySelector('.chat-popup');
const chatBtn = document.querySelector('.ventana-chat');
const submitBtn = document.querySelector('.submit');
const chatArea = document.querySelector('.chat-area');
const inputElm = document.querySelector('input');
const emojiBtn = document.querySelector('#emoji-btn');
const picker = new EmojiButton();


//Emoji selection 
window.addEventListener('DOMContentLoaded', () => {

	picker.on('emoji', emoji => {
		document.querySelector('input').value += emoji;
	});

	emojiBtn.addEventListener('click', () => {
		picker.togglePicker(emojiBtn);
	});
});

//chat button toggler 

chatBtn.addEventListener('click', ()=>{
	popup.classList.toggle('show');
})

// send msg 
submitBtn.addEventListener('click', ()=>{
	let userInput = inputElm.value;

	let temp = `<div class="out-msg">
	<span class="my-msg">${userInput}</span>
	<img src="img/chat/icono-perfil-chat-azul.png" class="avatar">
	</div>`;

	chatArea.insertAdjacentHTML("beforeend", temp);
	inputElm.value = '';

})

// JavaScript Document