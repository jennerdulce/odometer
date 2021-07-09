const LinkedList = require('../lib/ll.js')
const odometer = require('../lib/odometer.js')

describe('Odometer Tests', () => {
  it('First Example', () => {
    // IN => { 1 } -> { 2 } -> { 3 } -> { 4 } -> NULL
    // OUT => { 1 } -> { 2 } -> { 3 } -> { 5 } -> NULL
    let ListA = new LinkedList()
    ListA.append(1)
    ListA.append(2)
    ListA.append(3)
    ListA.append(4)
    console.log("FIRST EXAMPLE")
    console.log(ListA.toString())
    expect(odometer(ListA).toString()).toBe('{ 1 } -> { 2 } -> { 3 } -> { 5 } -> NULL');
    console.log(ListA.toString())
    console.log('==================================')
  });

  it('Second Example', () => {
    // IN => { 1 } -> { 2 } -> { 3 } -> { 9 } -> NULL
    // OUT => { 1 } -> { 2 } -> { 4 } -> { 0 } -> NULL
    let ListB = new LinkedList()
    ListB.append(1)
    ListB.append(2)
    ListB.append(3)
    ListB.append(9)
    console.log("SECOND EXAMPLE")
    console.log(ListB.toString())
    expect(odometer(ListB).toString()).toBe('{ 1 } -> { 2 } -> { 4 } -> { 0 } -> NULL');
    console.log(ListB.toString())
    console.log('==================================')
  });

  it('Third Example', () => {
    // IN => { 9 } -> { 9 } -> { 9 } -> { 9 } -> NULL
    // OUT => { 1 } -> { 0 } -> { 0 } -> { 0 } -> { 0 } -> NULL
    let ListC = new LinkedList()
    ListC.append(9)
    ListC.append(9)
    ListC.append(9)
    ListC.append(9)
    console.log("THIRD EXAMPLE")
    console.log(ListC.toString())
    expect(odometer(ListC).toString()).toBe('{ 1 } -> { 0 } -> { 0 } -> { 0 } -> { 0 } -> NULL');
    console.log(ListC.toString())
    console.log('==================================')
  });
})