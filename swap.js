
function swap(arr){
	var idx, temp;
	
	console.log(arr);
	
	for(idx=0; idx<arr.length/2; idx=idx+2)
	{
	temp=arr[idx];
	arr[idx]= arr[arr.length-(idx+1)];
	arr[arr.length-(idx+1)]=temp;
	}
	console.log(arr);
}
swap(["type", 4, "ada", 3, 2, "help", 7]);