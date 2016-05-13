




var randomValue=Math.random();

randomValue=Math.floor(randomValue*10000);
randomValue=1234

console.log(String(Math.floor(randomValue)));
var randomString = String(Math.floor(randomValue));

console.log(randomString.length);




var testValue = function(guessValue)
{
	var guessValueString = guessValue.toString();

	for (var i = 0; i < randomString.length; i++) 
	{ 
        
		switch(randomString[i]) 
		{
			case 0: console.log(i);
					break;

	//		case ath.floor(randomValue-(randomValue/1000)): abc = 3;
	//		case Math.floor((randomValue/100)): abc--;
	//		case Math.floor((randomValue/10)): abc += 2;
		}

//		return abc

	}
	return 1;
}

console.log(testValue(randomString));

