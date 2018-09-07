function celciusToFahrenheit(cDegrees)
{
 var C = cDegrees, F;
 F = C*1.8 + 32;
 return F;
} 
function fahrenheitToCelcius(fDegrees)
{
	var F = fDegrees, C;
	C = (5/9)*(F - 32);
	return C;
	
}
 
 for(var i=200; i>-273; i--)  /* as it is absolute zero */
 {
	if(celciusToFahrenheit(i)==fahrenheitToCelcius(i))
	{
		console.log("same at", i);
	}
	//else{console.log("not same");}
 }
