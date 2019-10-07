const countComission = require('./count');

test('Counted', () => {
	expect(countComission.count([{
		user_id: 1,
		user_type: 'natural',
		type: 'cash_in',
		operation: [ 200 ],
		date: [ '2016-01-05' ]
	}])).toEqual(0.06)
})
// test('Counted', () => {
// 	expect(countComission.count([{
// 		user_id: 2,
//     user_type: 'juridical',
//     type: 'cash_out',
//     operation: [ 300 ],
//     date: [ '2016-01-06' ]
//   }])).toEqual(0.9)
// })
// test('Counted', () => {
// 	expect(countComission.count([{
//     user_id: 1,
//     user_type: 'natural',
//     type: 'cash_out',
//     operation: [ 30000, 1000, 100, 100, 300 ],
//     date: [
//       '2016-01-06',
//       '2016-01-07',
//       '2016-01-07',
//       '2016-01-10',
//       '2016-02-15'
//     ]
//   }])).toEqual(87)
// })
// test('Counted', () => {
// 	expect(countComission.count([{
//     user_id: 1,
//     user_type: 'natural',
//     type: 'cash_out',
//     operation: [  1000 ],
//     date: [
//       '2016-01-07'
//     ]
//   }])).toEqual(0)
// })


