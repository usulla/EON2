window.addEventListener('DOMContentLoaded', function () {

	// Scroll to About
	var aboutBlock = document.querySelector('.About');
	var scrollCount = 0;
	document.addEventListener('scroll', function () {
		if (scrollCount == 0) {
			if (aboutBlock.getBoundingClientRect().top < 0) {
				scrollCount = 1;
				ga('send', 'event', 'EON', 'Scroll', 'DisplayAbout');
			}
		}
	})

	// Start Test
	document.querySelector('.TestStart .battery_btn').addEventListener('click', function () {
		ga('send', 'event', 'EON', 'Click', 'TestStart');
	})

	// SocVK
	document.querySelector('.socbtn.vk').addEventListener('click', function () {
		ga('send', 'event', 'EON', 'Click', 'SocVK');
	})

	// SocFb  
	document.querySelector('.socbtn.fb').addEventListener('click', function () {
		ga('send', 'event', 'EON', 'Click', 'SocFB');
	})

	// SocInstagram 
	document.querySelector('.socbtn.insta').addEventListener('click', function () {
		ga('send', 'event', 'EON', 'Click', 'SocInstagram');
	})


	document.onclick = function (event) {
		var target = event.target;
		while (target != document) {

			if (target.classList.contains('question5')) {
				ga('send', 'event', 'EON', 'View', 'DisplayResultTest');
				return;
			}
			// Share VK
			if (target.classList.contains('soc-vk')) {
				ga('send', 'event', 'EON', 'Share', 'ShareVK');
				return;
			}
			// Share Fb
			if (target.classList.contains('soc-fb')) {
				ga('send', 'event', 'EON', 'Share', 'ShareFB');
				return;
			}

			target = target.parentNode;
		}
	};

})