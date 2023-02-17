let colors=document.getElementsByClassName('colors');
		for(let i=0; i<colors.length; i++){
			colors[i].addEventListener('click',onColorFon);
		}

		function onColorFon(){
			document.body.style.background=this.value;
		}
