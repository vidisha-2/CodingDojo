var i, sum=0, a;
for(i=-300000; i<=300000; i++)
{	
	a=i%2;
	
	if(a!=0)
	{	
		sum= sum+i;
		
	}
	
}console.log(sum);