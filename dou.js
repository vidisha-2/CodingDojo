function double(arr)
{
	var oldArr = [], newArr = [], i;
	for(i=0; i<arr.length; i++)
	{
		oldArr.push(arr[i]);
	}
	// user array
	console.log(oldArr);
	
	for(i=0; i<oldArr.length; i++)
	{
	  newArr[i]= oldArr[i]*2;
	}
	console.log(newArr);
}
double([10,2,8]);