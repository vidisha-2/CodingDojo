function generalized(arr)
{
	var newArr= [],i,sum;
	for(i=0;i<arr.length;i++)
	{
		newArr.push(arr[i]);
	}
	console.log(newArr);
	
	if(newArr.length==1)
	{
		console.log("Array is too short");
	}
	else
	{
	var count =0;
	var x=newArr[1];
	for(i=0;i<=newArr.length; i++)
	{
		if(newArr[i]>x)
		{	
		console.log(newArr[i]);
		count = count +  1;
		}
    }
	console.log("count is--",count);
	}
}
generalized([6,4,8,2]);