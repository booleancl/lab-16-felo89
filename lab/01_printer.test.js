const booleanPrint = require('boolean-printer')

describe('boolean-printer module', () => {

  beforeEach(() => {
    console.log = jest.fn()
    booleanPrint('Hello Boolean')
  })

  it('does exists', () => {
    expect(() => { booleanPrint('Hello Boolean')}).not.toThrow()
  })

  it('Adds a Boolean frame', () => {
    expect(console.log).toHaveBeenCalledWith(
`******* Boolean Logger ********
    Hello Boolean
    ***********************`
      )
  })
})