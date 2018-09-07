function prev_length(arr)
{
	
	var newArr=[], idx;
	newArr[0]= arr[arr.length-1].length;
	for(idx=1; idx<arr.length; idx++)
	{	
			
		
		newArr[idx]=arr[idx-1].length;
		
	}
	console.log(newArr);
}
prev_length(['tyre','sam','hom','world']);
