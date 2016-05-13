var randomValue=Math.random();
var A = 0;
var B = 0;

randomValue=Math.floor(randomValue*10000);
randomValue=1234

console.log(String(Math.floor(randomValue)));
var randomString = String(Math.floor(randomValue));

//console.log(randomString.length);

/*
var checkValue = function(i)
{

	if(randomString[i]===guessValueString[i])
					{
						A++;
					}
					else
					{	

						for (var temp=i; temp < randomString.length; temp++)
						{
							if(randomString[i]===guessValueString[temp])
								B++;
						} 

					}

} 
*/

var testValue = function(guessValue)
{
	var guessValueString = guessValue.toString();
	

	for (var i = 0; i < randomString.length; i++) 
	{ 
        

		switch(i) 
		{
			case 0: 

					checkValue(i);
				
					break;
			case 1:
						break;	
			case 2:
				break;

			case 3:	
				break;		


	//		case ath.floor(randomValue-(randomValue/1000)): abc = 3;
	//		case Math.floor((randomValue/100)): abc--;
	//		case Math.floor((randomValue/10)): abc += 2;
		}

//		return abc

	}
	return 1;
}

testValue(1234);

