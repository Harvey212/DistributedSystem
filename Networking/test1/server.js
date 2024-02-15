/*create a udp channel*/
const dgram = require('dgram');
const server =dgram.createSocket('udp4');
/*set server port and error management*/
server.on('error',(err)=>{server.close();});
server.bind(20213);
/*server receives the message and respond*/
server.on('message',(msg,rinfo)=>{
/*convert binary to string*/
mytest=msg.toString()
console.log(mytest)
/*edit the message and convert to binary*/
buf=rinfo.port+":"+mytest
let msgg=Buffer.from(buf);
/*server send back the message to client*/
server.send(msgg,rinfo.port,'127.0.0.1',()=>{server.close();})
});

/*
let obj={
	key0:'value0',
	key1:'value1',
	key2:'value2',
	key3:'value3',
	key4:'value4'
};

let buf=Buffer.from(JSON.stringify(obj));
console.log(buf);

let obj1=JSON.parse(buf.toString());
console.log(obj1);
*/