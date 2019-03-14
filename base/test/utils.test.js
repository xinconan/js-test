const expect = require('chai').expect;
const utils = require('../utils');
const formatNum = utils.formatNum;

describe('util tests', () => {
  it('测试环境正确配置', () => {
    expect(true).to.eql(true);
  });

  it('测试货币格式转换', () => {
    const ft = formatNum(1234567);
    expect(ft).to.eql('1,234,567');
  });
})