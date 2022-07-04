 let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');
CURRENT_NUMBER.addEventListener("click",CURRENT_NUMBER,count++);

function increment() { 
	if(count < 10){
		count++;
		CURRENT_NUMBER.innerHTML = count;
		if (count>=0){CURRENT_NUMBER.style.color="black"}
	}
}

function decrement() {
	if(count>-10){
		count--;
		CURRENT_NUMBER.innerHTML = count;
		if (count<0){CURRENT_NUMBER.style.color="red"}
	}
}

// Implementando com addEventListener
document.getElementById("subtrair").addEventListener("click",decrement);
document.getElementById("adicionar").addEventListener("click",increment);

