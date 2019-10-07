const countComission = require('./count');
let outputData = "";
global.console = {
  log: jest.fn(),
  info: jest.fn(),
  error: jest.fn(),
}

describe('Counted', () => {
	countComission.count([{
		user_id: 1,
		user_type: 'natural',
		type: 'cash_in',
		operation: [ 200 ],
		date: [ '2016-01-05' ]
	}])
	it('Counted',() => {
		expect(global.console.log).toHaveBeenCalledWith(0.06)
	})
})
describe('Counted', () => {

	it('Counted',() => {
		countComission.count([{
			user_id: 2,
			user_type: 'juridical',
			type: 'cash_in',
			operation: [ 1000000 ],
			date: [ '2016-01-10' ]
		}])
		expect(global.console.log).toHaveBeenCalledWith(5)
	})
})
describe('Counted', () => {
	countComission.count([{
		user_id: 3,
		user_type: 'natural',
		type: 'cash_out',
		operation: [ 1000 ],
		date: [ '2016-01-10' ]
	}])
	it('Counted',() => {
		expect(global.console.log).toHaveBeenCalledWith(0)
	})
})
describe('Counted', () => {

	countComission.count([{
		user_id: 2,
		user_type: 'juridical',
		type: 'cash_out',
		operation: [ 300 ],
		date: [ '2016-01-06' ]
	}])
	it('Counted',() => {
		expect(global.console.log).toHaveBeenCalledWith(0)
	})
})

