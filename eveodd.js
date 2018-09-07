function evenodd(arr)
{
	var oldArr = [], count_odd, count_even, i;
	for(i=0; i<arr.length; i++)
	{
		oldArr.push(arr[i]);
	}
	count_odd=0;
	count_even=0;
	for(i=0; i<oldArr.length; i++)
	{
		if(oldArr[i]%2==0)
		{
			count_even=count_even+1;
			console.log(oldArr[i]);
			if(count_even>=3)
			{
				console.log("Even more so");
				//break;
			}
			
		}
		else if(oldArr[i]%2!=0)
		{
			count_odd=count_odd+1;
			console.log(oldArr[i]);
			if(count_odd>=3)
			{
				console.log("That's odd!");
				//break;
			}
			
		}
		else
		{
			console.log(arr[i]);
		}
		
	}
}
evenodd([1,7,8,12,24,89,3,91]);