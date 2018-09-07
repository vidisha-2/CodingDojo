function makeitbig(arr)
{ 
	var newArr=[], idx;
	for(idx=0; idx<arr.length; idx++)
	{
		newArr.push(arr[idx]);
	}
	console.log(newArr);
	
	for(idx=0; idx<newArr.length; idx++)
	{
		if(newArr[idx]>=0)
		{
		 newArr[idx]='big';
		}
	}
	console.log(newArr);
}
makeitbig([0,-1,3,5,6]);