/*
This file will create an entry in our Nosql DB
*/

console.log('starting function');
const AWS= require('aws-sdk');
const docClient=new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

exports.handle = function(e, ctx, cb) 
{

	var params={
		Item: {
			date: Date.now(),
			message: "This Website Rocks! "
		},
		TableName: 'guestbook'
	};
	docClient.put(params,function(err, data){
		if(err){
			cb(err,null);
			
		}else{
			cb(null,data);
		}
	});
}
