const expect = require('chai').expect;
const isPalindrome = require('../palindrome');

describe('palindrome tests', () => {
  it('测试环境正确配置', () => {
    expect(true).to.eql(true);
  });

  it('mom是回文', () => {
    const result = isPalindrome('mom');
    expect(result).to.be.true;
  });

  it('dad是回文', () => {
    const result = isPalindrome('dad');
    expect(result).to.be.true;
  });

  it('dad dad是回文', () => {
    const result = isPalindrome('dad dad');
    expect(result).to.be.true;
  });

  it('mom dad不是回文', () => {
    const result = isPalindrome('mom dad');
    expect(result).to.be.false;
  });

  it('空字符串不是回文', () => {
    const result = isPalindrome('');
    expect(result).to.be.false;
  });

  it('只有空白符字符串不是回文', () => {
    const result = isPalindrome('   ');
    expect(result).to.be.false;
  });

  it('缺少入参应该报错', () => {
    const caller = function() { isPalindrome(); }
    expect(caller).to.throw(Error, 'Invalid argument');
  });
})