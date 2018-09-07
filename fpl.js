function first_plus_length(arr)
{
	var newArr= [],i,sum;
	for(i=0;i<arr.length;i++)
	{
		newArr.push(arr[i]);
	}
	//console.log(newArr);
	if(isNaN(newArr[0])==true)
	{
		console.log("First value of array is not a number!");
		
	}
	else
	{
	sum= newArr[0]+newArr.length;
	console.log(sum);
	}
}
first_plus_length(["hello",6,10]);