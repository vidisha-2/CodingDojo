function checkleapyear(ly){
var leap_year = ly;

	if(leap_year%4 == 0)
	{
		if(leap_year%100!=0)
		{
			console.log(leap_year," is a Leap year");
		}
		else if(leap_year%400 ==0)
		{
			console.log(leap_year," is a Leap year");
		}
		else{
			console.log(leap_year," is not a Leap year");
		
		}
	}

 }
 checkleapyear(2200);
