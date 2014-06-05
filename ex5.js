var through=require("through");
var split = require('split');
var i=0;
var tr=through(function(buff)
{
	if (i%2==0)
	{
		this.queue(buff.toString().toLowerCase()+'\n');
	}
	else 
	{
		this.queue(buff.toString().toUpperCase()+'\n');
	}	
	i+=1;
}); 
process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);
