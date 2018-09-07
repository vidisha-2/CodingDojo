function finalcountdown(a,b,c,d)
{
	var i, param1=a, param2=b, param3=c, param4=d;
	
	i=param1;
	
	while(i<param3)
	{	
		
		
		if(i>param2 && i<param3 && i!=param4)
			{
				console.log(i);
			}
			
			
		i=i+param1;
		
	}

}
finalcountdown(3,5,19,12);