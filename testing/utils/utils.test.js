const expect = require('expect');

const utils = require('./utils');

it(' should add two numbers', () =>{
     var res = utils.add(12,11);
      expect(res).toBe(23,`Expected 23, but got ${res}`).toBeA('number');

    //  if (res !=  23){
    //      throw new Error(`Expected 33, but got ${res}`)
    //  }
})

it('should square a number', () =>{
    var rest = utils.square(3);
    expect(rest).toBe(9,`Expected 9, but got ${rest}`).toBeA('number');
})

it('should not be equal to', () => {
    expect(44).toNotBe(3);
})