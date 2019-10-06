
var fs = require('fs');
var moment = require('moment');
moment.locale('zh-cn', {
	week : {
			dow : 1 // Monday is the first day of the week
	}
});
// Get contents from json files
var inputData = fs.readFileSync("input.json");
var cashIn = fs.readFileSync("cash-in_config.json");
var cashOutLegal = fs.readFileSync("cash-out-legal_config.json");
var cashOutNatural = fs.readFileSync("cash-out-natural_config.json");
// Define to JSON type
var inputContent = JSON.parse(inputData)
var cashInContent = JSON.parse(cashIn);
var legalContent = JSON.parse(cashOutLegal);
var naturalContent = JSON.parse(cashOutNatural)
 // Get Value from JSON

// round number
	function roundUp(num, precision) {
		precision = Math.pow(100, precision)
		return Math.ceil(num * precision) / precision;
	}
	function countCom(num,per){
		let output =(num/100) * per;
		return roundUp(output,1);
	}

// this will check for same ids and will create new array
	const src = JSON.parse(JSON.stringify(inputContent));
	const result = src.reduce((acc, {user_id,user_type,type,operation,date}) => {
		const existing = acc.find(i => i.user_id === user_id && i.type === type )
		if (existing) { 
			existing.date.push(date)
			existing.operation.push(operation.amount)
		} 
		else {acc.push({user_id,user_type,type,operation:[operation.amount], date:[date]})}
		
		return acc
	}, [])
	// console.log(result)
	result.map(res => {
		// console.log(res.date) 
	})

	// console.log(result)


function mapitnow(mapthiscontent){
	mapthiscontent.map((content, i) => {

		if(content.user_type === "natural"){
		//Natural person statement
			if(content.type === "cash_out"){
				
					// let comission = countCom(content.operation.amount,naturalContent.percents);
				// comission > legalContent.week_limit.amount ? comission = 5 : comission;
				// console.log(content,"COMISSION",comission)
				// console.log(comission)
					
			}
			// cash-in statement 
			else if (content.type === "cash_in"){
				let comission = countCom(content.operation.amount,cashInContent.percents);
				comission > cashInContent.max.amount ? comission = 5 : comission;
				// console.log(content,"COMISSION",comission)
				// console.log(comission)
				
			}
		} 
				//Legal person statement
		if(content.user_type === "juridical") {
			if(content.type === "cash_out"){
				let comission = countCom(content.operation.amount,legalContent.percents);
				comission < legalContent.min.amount ? comission = 0.5 : comission;
				// console.log(comission)
			}
			else if (content.type === "cash_in"){
				let comission = countCom(content.operation.amount,legalContent.percents);
				comission > legalContent.min.amount ? comission = 5 : comission;
				// console.log(comission)
				
			}
		}
	})
}

// mapitnow(inputContent);
function countCommision(result){
	for(let i = 0; i< result.length-1; i++){
		let totalsum = 0;
			for( let si = 0; si< result[i].date.length-1; si++){
				// if(result[i].type == "cash_out" && result[i].user_type === "natural"){
				// 	if(moment(result[i].date[si]).isSame(result[i].date[si+1], 'week') || moment(result[i].date[si]).isSame(result[i].date[si-1], 'week')){
				// 		totalsum += result[i].operation[si]+ result[i].operation[si+1];
				// 		let comissionCost = legalContent.percents;
				// 		totalsum < 1000  ? comissionCost = 0 : "";
				// 		currentSum = result[i].operation[si];
				// 		currentSum > 1000 ? currentSum= currentSum - 1000 : '';
				// 		let comission = countCom(currentSum,comissionCost);
				// 		// console.log(comission)
				// 		if(!moment(result[i].date[si]).isSame(result[i].date[si+1], 'week')){
				// 			totalsum = 0;
				// 			totalsum += result[i].operation[si]+ result[i].operation[si+1];
				// 		let comissionCost = legalContent.percents;
				// 		totalsum < 1000  ? comissionCost = 0 : "";
				// 		currentSum = result[i].operation[si];
				// 		currentSum > 1000 ? currentSum= currentSum - 1000 : '';
				// 		let comission = countCom(currentSum,comissionCost);
				// 		// console.log(comission)
				// 		}
				// 	// console.log(totalsum)
	

				// console.log(result[i].user_type)
				// 	}
				// }	
				// else if (result[i].type === "cash_in" && result[i].user_type === "natural"){
				// 	let comission = countCom(result[i].operation.amount,cashInContent.percents);
				// 	comission > cashInContent.max.amount ? comission = 5 : comission;
				// 	// console.log(content,"COMISSION",comission)
				// 	console.log(comission)
				// 	console.log(result[i]);
					
				// } 
				 if(result[i].user_type == 'juridical'){
					// let comission = countCom(content.operation.amount,legalContent.percents);
					// comission < legalContent.min.amount ? comission = 0.5 : comission;
					// console.log(comission)
					console.log("hello");
					// console.log(result[i])
				}		
				 if (result[i].type === "cash_in"){
					let comission = councontenttCom(content.operation.amount,legalContent.percents);
					comission > legalConcontenttent.min.amount ? comission = 5 : comission;
					console.log("fas")
					
				}
		
			}
			if(result[i].user_type === 'juridical' && result[i].type === "cash_out"){
					let comission = countCom(result[i].operation,legalContent.percents);
					comission < legalContent.min.amount ? comission = 0.5 : comission;
					console.log(comission)
			}
	
			// if(moment(result[i].date).isSame(result[i].date, 'week')){
				// console.log(result[i])
			// }
		
	}
}
countCommision(result)
// console.log(cashOutSameWeek)
// console.log(totalsum)
// console.log(result)
// console.log(result[2].date[3])



// console.log(moment('2016-01-06').isSame('2016-01-10', 'week'));
