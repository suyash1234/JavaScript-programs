/*@Author : Suyash Nanda
    @Date : 29 aug 2016
	@Purpose: program of write a function to prefix ‘BridgeLabz’ before anything  thing we log.*/
function prefixWord(...args)
{
	document.write(this+" "+[args]);
}
var args = prompt("enter any argument");
prefixWord.apply("bridgeLabz",[args]);
