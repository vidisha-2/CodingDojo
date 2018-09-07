function always_hungry(arr)
{
	var idx, check=0;
		
	for(idx=0; idx<arr.length; idx++)
	{	
		if(arr[idx]=='food')
		{	check=check+1;
			console.log('yummy');
		}
	}	
	
	if(check==0)
	{
		console.log("I'm hungry");
	}
	
	
	
}
always_hungry(['fox','go','dog','food1',9]);