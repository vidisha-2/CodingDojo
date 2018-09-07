function fitfirst(arr)
{
	var newArr = [], i;
	for(i=0; i<arr.length; i++)
	{
	 newArr.push(arr[i]);
	}
	console.log(newArr);
	
	if(newArr[0]>newArr.length)
	{
		console.log("Too Big!");
	}
	else if(newArr[0]<newArr.length)
	{
		console.log("Too Small!");
	}
	else
	{
		console.log("Just Right!");
	}
	
}
fitfirst([5,2,4,7,10]);