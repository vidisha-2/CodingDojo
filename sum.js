function sum(){
	var sum=0, idx;
	//console.log(sum);
	for(idx=1; idx<=1000; idx++)
	{
		if(idx%2==0)
		{ 
		sum= sum+idx;
		//console.log(sum);
		}
	}
	console.log(sum);
}
sum();