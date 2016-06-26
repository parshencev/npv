var scrollFlag = false;
window.onload=function(){
	goTo("0");
	numberElement=0;
	setInterval(function(){
		document.getElementById("main").style.marginTop=(document.body.clientHeight*-1*numberElement)+"px";
	},1);
	info = document.getElementById('delta');

	document.addEventListener('mousewheel', onWheel, false );
	

}

function onWheel(event) {
	 event.preventDefault();
	 var a;
	 if(event.wheelDeltaY)a = event.wheelDeltaY;
	 else if(event.wheelDelta)a = event.wheelDelta;
	 else if (event.detail)a = event.detail;
	 if(!scrollFlag){
	 	scrollFlag = true;
	 	setTimeout(function(){scrollFlag=false;},500)
	 	if(a<0){ if(numberElement<3)goTo(numberElement+1)
  		}else if(numberElement!=0)goTo(numberElement-1)
	 }
	 
}

function goTo(param){
	numberElement=parseInt(param);
	if(param!=0){
		document.getElementById("pointer").style.opacity="0";
		document.getElementById("central").style.opacity="0";
		document.getElementById("bottom").style.top="0";
		document.getElementById("central").style.zIndex="-1";
		document.getElementById("pointer").style.zIndex="-1";

	}else{
		document.getElementById("bottom").style.top="calc(100% - 70px)";
		setTimeout(
			function(){
				document.getElementById("central").style.zIndex="1";
				document.getElementById("pointer").style.zIndex="1";
				document.getElementById("pointer").style.opacity="1";
				document.getElementById("central").style.opacity="1";
		},500);
	}
}

