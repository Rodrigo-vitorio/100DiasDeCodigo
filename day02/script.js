function toggle() {
	const bar1 = document.getElementById('top');
	const bar2 = document.getElementById('mid');
	const bar3 = document.getElementById('bottom');
	const burger = [bar1, bar2, bar3];
	
	burger.forEach(bar => {
		bar.classList.toggle('forward');
		bar.classList.toggle('backward');
	});
}