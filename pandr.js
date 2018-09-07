function printandreturn(arr)
{
	var newArr =[],a,b;
	for(var i=0;i<arr.length;i++)
	{
		newArr.push(arr[i]);
	}
	
	console.log(newArr[0]);
	var last= arr.pop();
	console.log(last);
	
	
}
printandreturn([4,5]);