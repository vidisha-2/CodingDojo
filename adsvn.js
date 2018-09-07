function addseven(arr)
{
	var newArr=[],idx;
	for(idx=0; idx<arr.length; idx++)
	{
		newArr.push(arr[idx]);
	}
	console.log(newArr);
	for(idx=1; idx<newArr.length; idx++)
	{
		newArr[idx]=newArr[idx]+7;
	}console.log(newArr);
}
addseven([7,7,2,19]);