function avg(arr)
{
	var newArr=[],idx, average, sum=0;
	for(idx=0; idx<arr.length; idx++)
	{
		newArr.push(arr[idx]);
	}
	min=newArr[0];
	for(idx=0; idx<newArr.length; idx++)
	{
		if(min>newArr[idx])
		{
			min=newArr[idx];
		}
	}
	//average= sum/newArr.length;
	console.log(min);
	
}
avg([1,3,5,7,20]);