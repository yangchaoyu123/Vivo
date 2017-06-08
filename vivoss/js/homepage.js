window.onload = window.onresize = function (){
			document.documentElement.style.fontSize = document.documentElement.clientWidth * 20 / 320 + 'px';
			var mySwiper = new Swiper('.swiper-container', {
			autoplay: 1000,
			loop : true,
			pagination : '.swiper-pagination',//可选选项，自动滑动
				});
			
		};
		
