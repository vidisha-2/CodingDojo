function count_positive(arr)
{
	var oldArr = [], newArr = [], i, sum, l_value;
		for(i=0; i<arr.length; i++)
		{
			oldArr.push(arr[i]);
		}
		console.log(oldArr);
		sum=0;
		for(i=0; i<=oldArr.length; i++)
		{	
			if(oldArr[i]>0)
			{
				sum=sum+oldArr[i];
				
			}
		}
	
		oldArr.pop();
		oldArr.push(sum);
		console.log(oldArr);
}
count_positive([-1,1,-7,8,9]);
