function increment_odd(arr)
{
	var oldArr = [], newArr = [], i;
	for(i=0; i<arr.length; i++)
	{
		oldArr.push(arr[i]);
	}
	console.log(oldArr);
	for(i=0; i<oldArr.length; i++)
	{
		if(i>0 && i%2!=0 || oldArr[i]<0)
			{
				oldArr[i]=oldArr[i]+1;
			}
		
	}console.log(oldArr);
}
increment_odd([457,129,88,-2,4,6,-9]);