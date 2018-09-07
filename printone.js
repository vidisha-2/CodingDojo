function printOne_returnAnother(arr){
	
	var newArr=[], idx, value=0, length_of_array=0;
	for(idx=0; idx<arr.length; idx++)
	{
		newArr.push(arr[idx]);
	}
	
	length_of_array = newArr.length;
	console.log(newArr[length_of_array-2]);

	for(idx=0; idx<newArr.length; idx++)
	{
		if(newArr[idx]%2 != 0)
		{
			value=newArr[idx];
			break;
		}
	}
	return value;
	
}
printOne_returnAnother([7,3,14,10,6]);