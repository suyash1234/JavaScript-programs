/*  @Author : Suyash Nanda
    @Date : 29 aug 2016
	@Purpose:function to calculate union of two set*/
function unionArray(arrayA, arrayB) {
//creating object obj
	var obj = {},
    i = arrayA.length,
    j = arrayB.length,
    newArray = [];
  	while (i--) {
    	if (!(arrayA[i] in obj)) {
      		obj[arrayA[i]] = true;
      		newArray.push(arrayA[i]);//adding elements of arrayA
    	}
  	}
  	while (j--) {
    	if (!(arrayB[j] in obj)) {
      		obj[arrayB[j]] = true;
      		newArray.push(arrayB[j]);//adding elements of arrayB
    	}
  	}
  	return newArray;
}
var r = unionArray([34, 35, 45, 48, 49], [44, 55]);
document.write("union of array is= "+r+"</br>");
//function to calculate intersection of two set

function intersection(arrA,arrB) {
	var temp = [];//blank array
	for(var i = 0;i < arrA.length;i++)
	{
		for(var j = 0;j < arrB.length;j++)
		{
			if(arrA[i] == arrB[j])
			{
				 temp.push(arrA[i]);//adding elements to temp array
				 break;
			}
		}
	}
return temp;
}
var res = intersection([34,45,56,67,68],[45,65,67,43,23]);
document.write("Intersection of array is= "+res);	
