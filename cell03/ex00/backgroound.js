function randomColor()
{
	const	digits = '0123456789ABCDEF';
	let		color = '#';

	for (let x = 0; x < 6; x++)
		color += digits[Math.floor(Math.random() * 16)]
	return color;
}

function changeBackgroundColor()
{
	document.body.style.backgroundColor = randomColor();
}