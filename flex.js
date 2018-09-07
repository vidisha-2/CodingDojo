function flexcountdown(a,b,c)
{
	var i, lowNum=a, highNum=b, mult=c;
	for(i=highNum; i>lowNum; i=i-mult)
	{
		console.log(i);
	}
}
flexcountdown(2,9,3);