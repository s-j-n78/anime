/*anime({
  targets: '.box',
  scale: [
    {value: .1, easing: 'easeOutSine', duration: 500},
    {value: 1, easing: 'easeInOutQuad', duration: 1200}
  ],
  delay: anime.stagger(100, {grid: [2, 1], from: 'first'})
});




anime({
  targets: 'div.heart',
  

 /* translateX: [
    { value: 250, duration: 1000, delay: 500 },
    { value: 0, duration: 1000, delay: 500 }
  ],
  translateY: [
    { value: -40, duration: 500 },
    { value: 40, duration: 500, delay: 1000 },
    { value: 0, duration: 500, delay: 1000 }
  ],
  scaleX: [
    { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
    { value: 1, duration: 900 },
    { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
    { value: 1, duration: 900 }
  ],
  scaleY: [
    { value: [1.75, 1], duration: 500 },
    { value: 2, duration: 50, delay: 1000, easing: 'easeOutExpo' },
    { value: 1, duration: 450 }//,
    //{ value: 1.95, duration: 50, delay: 1000, easing: 'easeOutExpo' },
    //{ value: 1, duration: 450 }
  ],
  scaleX: [
    { value: [1.75, 1], duration: 500 },
    { value: 2, duration: 50, delay: 1000, easing: 'easeOutExpo' },
    { value: 1, duration: 450 }//,
   // { value: 1.95, duration: 50, delay: 1000, easing: 'easeOutExpo' },
   // { value: 1, duration: 450 }
  ],
  easing: 'easeOutElastic(1, .4)',
  loop: true
});

*/

var playPause = anime({
	targets: 'div.box',
	translateY: [
	{ value: 200, duration: 500 },
	{ value: 0, duration: 800}
	],
	rotate: {
	value: '1turn',
	//easing: 'easeInOutSine'  
	easing: 'easeOutExpo'

	},
	
	delay: function(el, i, l){ return i * 1300},
	autoplay: false,
	loop:true
});

document.querySelector('#boxes .play').onclick = playPause.play;
document.querySelector('#boxes .pause').onclick = playPause.pause;



playPause.play();



anime({
	targets: 'div.box.red',
	translateY: [
	{ value: 200, duration: 500 },
	{ value: 0, duration: 800}
	],
	rotate: {
	value: '1turn',
	easing: 'easeInOutSine'
	}
});

anime({
	targets: 'div.box.blue',
	translateY: [
	{ value: 200, duration: 500, delay: 1000 },
	{ value: 0, duration: 800}
	],
	rotate: {
	value: '1turn',
	easing: 'easeInOutSine',
	delay: 1000
	}
});

anime({
	targets: 'div.box.green',
	translateY: [
	{ value: 200, duration: 500, delay: 2000 },
	{ value: 0, duration: 800}
	],
	rotate: {
	value: '1turn',
	easing: 'easeInOutSine',
	delay: 2000
	}
});

anime({
	targets: 'div.box.yellow',
	translateY: [
	{ value: 200, duration: 500, delay: 3000 },
	{ value: 0, duration: 800}
	],
	rotate: {
	value: '1turn',
	easing: 'easeInOutSine',
	delay: 3000
	}
});
