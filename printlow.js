function printLow_returnHigh(arr)
{
	var oldArr = [], i, lowest, highest;
	for(i=0; i<arr.length; i++)
	{
		oldArr.push(arr[i]);
	}
	lowest=oldArr[0];
	highest=oldArr[0];
	for(i=1; i<oldArr.length; i++)
	{
	  if(lowest>oldArr[i])
	  {
		lowest=oldArr[i];
	  }
	  if(highest<oldArr[i])
	  {
	  highest=oldArr[i];
	  }
	}
	console.log("lowest",lowest);
	for(i=0; i<oldArr.length; i++)
	{
		if(oldArr[i]==highest)
		{
			continue;//oldArr.pop();
		}
		console.log(oldArr[i]);
	}
	
	
}
printLow_returnHigh([4,7,12,8,19,20,-3]);