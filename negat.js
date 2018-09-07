function negative(arr)
{
	var newArr=[],idx;
	for(idx=0; idx<arr.length; idx++)
	{
		newArr.push(arr[idx]);
	}
	console.log("old array",newArr);
	
	for(idx=0; idx<newArr.length; idx++)
	{
		if(newArr[idx]>=0)
		{
			newArr[idx]=newArr[idx]- 2*newArr[idx];
			
		}
		
	}console.log("new array ",newArr);
}
negative([1,-3,-5,-6,7]);