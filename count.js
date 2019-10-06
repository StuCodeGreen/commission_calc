var fs = require('fs');
var moment = require('moment');
moment.locale('zh-cn', {
  week: {
    dow: 1 // Monday is the first day of the week
  }
});
// Get contents from json files
var inputData = fs.readFileSync('input.json');
var cashIn = fs.readFileSync('cash-in_config.json');
var cashOutLegal = fs.readFileSync('cash-out-legal_config.json');
var cashOutNatural = fs.readFileSync('cash-out-natural_config.json');
// Define to JSON type
var inputContent = JSON.parse(inputData);
var cashInContent = JSON.parse(cashIn);
var legalContent = JSON.parse(cashOutLegal);
var naturalContent = JSON.parse(cashOutNatural);
// Get Value from JSON

// round number
function roundUp(num, precision) {
  precision = Math.pow(100, precision);
  return Math.ceil(num * precision) / precision;
}

function countCom(num, per) {
  let output = (num / 100) * per;
  return roundUp(output, 1);
}

// this will check for same ids and will create new array
const src = JSON.parse(JSON.stringify(inputContent));
const sortedData = src.reduce(
  (acc, { user_id, user_type, type, operation, date }) => {
    const existing = acc.find(i => i.user_id === user_id && i.type === type);
    if (existing) {
      existing.date.push(date);
      existing.operation.push(operation.amount);
    } else {
      acc.push({
        user_id,
        user_type,
        type,
        operation: [operation.amount],
        date: [date]
      });
		}
	
    return acc;
  },
  []
);
console.log(sortedData)

function countCommision(result) {
  for (let i = 0; i < result.length; i++) {
    // console.log(result[i])
    let totalsum = 0;
    for (let si = 0; si < result[i].date.length; si++) {
      if (result[i].type == 'cash_out' && result[i].user_type === 'natural') {
				// console.log(result[i].user_id + "aaaaaaaaaaaaaaaa" +result[i].date[si]);
        if (
          moment(result[i].date[si]).isSame(result[i].date[si + 1], 'week') ||
					moment(result[i].date[si]).isSame(result[i].date[si], 'week')
					// moment(result[i].date).isSame(result[i+1].date)
        ) {
			 
          // console.log(result[i].user_id + "aaaaaaaaaaaaaaaa" +result[i].date[si+1]);
					let comissionCost = naturalContent.percents;
					// console.log(totalsum + "aaaaaaaaaaaaaa");
          // totalsum < 1000 ? (comissionCost = 0) : comissionCost;
          currentSum = result[i].operation[si];
					// currentSum > 1000 ? (currentSum = currentSum - 1000) : '';
					// totalsum > 1000 ? (currentSum = currentSum) : '';
				if(currentSum >= 1000 && totalsum < 1000){
						currentSum = currentSum - 1000;
						
				} else if(currentSum < 1000 && totalsum < 1000){
					comissionCost = 0;
				}
			
          let comission = countCom(currentSum, comissionCost);
					console.log(comission + " " +totalsum);
					totalsum += result[i].operation[si];
					// console.log(`${comission} ${result[i].date[si]} ${currentSum} ${totalsum}` )
					if(!moment(result[i].date[si]).isSame(result[i].date[si + 1], 'week')){
						totalsum = 0;
					} 
				} 
				//    else 
				// 	// !moment(result[i].date[si]).isSame(result[i].date[si + 1], 'week')
				//  {
				// 	totalsum = 0;
				// 	totalsum += result[i].operation[si + 1];
				// 	let comissionCost = naturalContent.percents;
				// 	totalsum < 1000 ? (comissionCost = 0) : '';
				// 	currentSum = result[i].operation[si + 1];
				// 	currentSum > 1000 ? (currentSum = currentSum - 1000) : '';
				// 	let comission = countCom(currentSum, comissionCost);
				// 	console.log(comission);
				// 	// console.log(`${result[i].user_type } ${comission} ${result[i].date[si+1]} ${currentSum} ${totalsum}` )
				// 	// console.log(comission)
				// }
      }
		}
		
    if (result[i].user_type === 'juridical' && result[i].type === 'cash_out') {
      let comission = countCom(result[i].operation, legalContent.percents);
      comission < legalContent.min.amount ? (comission = 0.5) : comission;
      console.log(comission);
      // console.log(`${comission} ${result[i].operation}` )
		}
		   if (result[i].type === 'cash_in') {
      let comission = countCom(result[i].operation, cashInContent.percents);
      comission > cashInContent.max.amount ? (comission = 5) : comission;
      console.log(comission);
      // console.log(`${comission} ` )
    }
 
  }
}
countCommision(sortedData);