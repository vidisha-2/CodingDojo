function scale_array(arr,input)
{
	var newArr =[], idx, gval=input;
	
	console.log(arr);
	for(idx=0; idx<arr.length; idx++)
	{
		newArr[idx]=arr[idx]*gval;
	}
	console.log(newArr);
}
scale_array([7,13,2,19],0);