const { expect } = require('chai');
const wrap = require('./wrap');

const wrappedString = `We
figured
it
out
as
a
team`;

describe('wrap', () => {
  // expect empty string to return empty string
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });

  // if string length is less than number param, return  original string
  it('Returns original string if string length is less than column number', () => {
    expect(wrap('hello world', 20)).to.equal('hello world');
  });

  // Column number must be greater than 0
  it('Returns original string if column number is less than 1', () => {
    expect(wrap('hello world', 0)).to.equal('Try a longer column number');
  });

  // Column number must be greater than longest word in string
  // it('')

  // it('Throws error if column length is less than longest word', () => {
  //   expect(wrap('hello world', 3)).to.throw();
  // });

  // actual test specs
  // it('Return string with each line length equal to the column number', () => {
  //   expect(wrap('We figured it out as a team', 3)).to.equal();
  //   expect(wrap()).to.equal();
  // });
});
