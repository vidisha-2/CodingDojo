function greater(arr)
{
	var newArr= [],i,sum;
	for(i=0;i<arr.length;i++)
	{
		newArr.push(arr[i]);
	}
	console.log(newArr);
	var count =0;
	var x=newArr[1];
	for(i = 0; i<=newArr.length; i++)
	{
		if(newArr[i] > x)
		{
			console.log(newArr[i]);
			count = count +  1;
		}
    
	}console.log("count is--",count);
}
greater([12,6,5,7,9,13]);