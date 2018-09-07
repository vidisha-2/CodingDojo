function reverse(arr)
{
	var revArr=[], idx;
	
	console.log(arr);
	
	for(idx=arr.length-1; idx>=0; idx--)
	{
		revArr.push(arr[idx]);
	}
	console.log(revArr);
}
reverse([2,-7,0,9,12]);