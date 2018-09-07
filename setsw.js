var myNumber=42, myName='vid', temp;
console.log(myNumber, myName);
function swap(myNumber,myName)
{
	temp=myNumber;
	myNumber=myName;
	myName=temp;
	console.log(myNumber, myName);
	
}
swap(42,"vid");