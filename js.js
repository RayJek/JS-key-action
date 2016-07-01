var h = 0, m = 0, s = 0, cs = 0, ms = 0, countStarted = false;
function visibility()
{
	document.getElementById('okienko').style.visibility = "visible";
}
function count()
{
	cs++;
	
	if(cs == 100)
	{
		cs = 0;
		s++;
		
		if(s == 60)
		{
			s = 0;
			m++;
			
			if(m == 60)
			{
				m = 0;
				h++;
			}
		}
	}
	refresh();
}
function refresh()
{
	var czas;
	czas = "czas"+" " + h + ":" + m + ":" + s;
	document.getElementById("czas").innerHTML = czas;    
}
function startCount()
{
    if(countStarted === false)
    {
        countStarted = true;
        visibility();
        setInterval(count, 10);
    }
}
document.getElementById('onclick').onclick = startCount;