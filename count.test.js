const countComission = require('./count');
let outputData = "";
global.console = {
  log: jest.fn(),
  info: jest.fn(),
  error: jest.fn()
}


describe('Counted', () => {
	it('Counted',() => {
		countComission.count([{
			user_id: 1,
			user_type: 'natural',
			type: 'cash_in',
			operation: [ 200 ],
			date: [ '2016-01-05' ]
		}])
		expect(global.console.log).toHaveBeenCalledWith(0.06)
	})

})

