const countComission = require('./count');
let answers = [
  {
    user_id: 1,
    user_type: 'natural',
    type: 'cash_in',
    operation: [ 200 ],
    date: [ '2016-01-05' ]
  },
  {
    user_id: 2,
    user_type: 'juridical',
    type: 'cash_out',
    operation: [ 300 ],
    date: [ '2016-01-06' ]
  },
  {
    user_id: 1,
    user_type: 'natural',
    type: 'cash_out',
    operation: [ 30000, 1000, 100, 100, 300 ],
    date: [
      '2016-01-06',
      '2016-01-07',
      '2016-01-07',
      '2016-01-10',
      '2016-02-15'
    ]
  },
  {
    user_id: 2,
    user_type: 'juridical',
    type: 'cash_in',
    operation: [ 1000000 ],
    date: [ '2016-01-10' ]
  },
  {
    user_id: 3,
    user_type: 'natural',
    type: 'cash_out',
    operation: [ 1000 ],
    date: [ '2016-01-10' ]
  }
]
// test('Counted', () => {
// 	expect(countComission.count([{
// 		user_id: 1,
// 		user_type: 'natural',
// 		type: 'cash_in',
// 		operation: [ 200 ],
// 		date: [ '2016-01-05' ]
// 	},])).toBe(0.06)
// })
// test('Counted', () => {
// 	expect(countComission.count([{
//     user_id: 2,
//     user_type: 'juridical',
//     type: 'cash_out',
//     operation: [ 300 ],
//     date: [ '2016-01-06' ]
//   },])).toBe(0.9)
// })
// test('Counted', () => {
// 	expect(countComission.count([{
// 		user_id: 1,
// 		user_type: 'natural',
// 		type: 'cash_out',
// 		operation: [ 30000 ],
// 		date: [
// 			'2016-01-06',
// 		]
// 	},])).toBe(87)
// })
test('Counted', () => {
	expect(countComission.count([  { "date": "2016-01-05", "user_id": 1, "user_type": "natural", "type": "cash_in", "operation": { "amount": 200.00, "currency": "EUR" } }])).toBe(0)
})

