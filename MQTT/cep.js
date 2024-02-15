const mqtt = require('mqtt');
const client = mqtt.connect();
client.subscribe('EVENT'); //請填入適當的值
let eventSeq = ['CO', 'CF', 'DO', 'DF'];
var len= eventSeq.length;
var check=true;
client.on('message', function (topic, message) {
    let item = eventSeq[0]; // 取得eventSeq的第一個元素
    if (message.toString()==item)
	{   
		if (item =='CO')
		{
			check=true;
		}
		eventSeq.shift();
		len= eventSeq.length;
	}; 
	// 如果message和item匹配，將匹配元素從陣列移出 (使用shift) // message是Buffer型別，要用message.toString()才能取得字串值
    if (len==0) 
	{// 如果全部匹配,送出LEAVE到EVENT topic並回復eventSeq的內容
		if (check)
		{
			client.publish('EVENT', 'LEAVE'); //請填入適當的值
			eventSeq = ['CO', 'CF', 'DO', 'DF'];// 重置
			check=false;
		}
    }
});



	





