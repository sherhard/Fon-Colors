let colors=document.getElementsByClassName('colors');
		for(let i=0; i<colors.length; i++){
			colors[i].addEventListener('click',onColorFon);
		}

		function onColorFon(){
			document.body.style.background=this.value;
		}

let colors_fonBtn=document.getElementById('colors_fonBtn');
let all_colos=document.getElementById('all_colors');

colors_fonBtn.addEventListener('click',fon);
	function fon(){
		document.body.style.background=all_colos.value;
	}