function firstNonRepeatedChar(str) {

	let arr=[];

	for(let i=0;i<str.length;i++)
		{
			if(str.charAt(i) in arr)
			{
				return str.charAt(i);
			}
		}

	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
