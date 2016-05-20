

var randomValue=Math.random();
var A = 0;
var B = 0;



var guessValueString = "5678";
//var guessValue;

randomValue=Math.floor(randomValue*10000);
randomValue=8965

console.log(String(Math.floor(randomValue)));
var randomString = String(Math.floor(randomValue));

//console.log(randomString.length);
//console.log(randomString[1]);

function checkValue(i)
{
console.log("---i=---"+i);	
console.log(randomString[i]);
//console.log(randomValue[i]);
//console.log("d"+guessValueString[i]);
temp2=i;
	
	if(randomString[i]===guessValueString[i])
	{
		A++;
	}
	else
	{	
	
		
		for (var temp=0; temp < randomString.length; temp++)
		{
		
			if(i!=temp)
			{
					
					if(temp2>0)
					{			
						if(randomString[temp2]===guessValueString[temp])
						{
							B++;
						//console.log("B="+B)
						}
						
					}
					else if (temp2 ==0)
					{
						if(randomString[temp2]===guessValueString[temp])
						{
							B++;
						//console.log("B="+B)
						}
					}

					temp2++;
								
					console.log("k"+guessValueString[temp]);

			}
			
			
		}
	}
	
					
} 


function testValue(guessValue)
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
					checkValue(i);
					break;	
			case 2:
					checkValue(i);
					break;

			case 3:	
					checkValue(i);
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

	console.log("A="+A);
	console.log("B="+B); 

	A=0;
	B=0;


