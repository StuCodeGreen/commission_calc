const {countComission} = require('./count')

test('Tested', () => {
  expect(countComission([{
		user_id: 1,
		user_type: 'natural',
		type: 'cash_in',
		operation: [ 200 ],
		date: [ '2016-01-05' ]
	},])).toBe(0.06)
})