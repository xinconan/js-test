function fetchData(cb){
  // mock get data
  setTimeout(()=>{
    cb('xinconan');
  }, 1000);
}

// 根据参数不同模拟不同状态的Promise
function fetch(success) {
  return new Promise((resolve, reject) => {
    if (!success) {
      reject('error');
      return;
    }
    resolve('xinconan');
  });
}

describe('Test Asynchronous Code', () => {
  it('test callback', (done) => {
    function cb(data) {
      expect(data).toBe('xinconan');
      done();
    }

    fetchData(cb);
  });

  it('test promise', () => {
    return fetch(1).then(data => {
      expect(data).toBe('xinconan');
    });
  });

  it('test promise reject', () => {
    expect.assertions(1);
    return fetch(0).catch(e => expect(e).toBe('error'));
  });
  
  it('test promise resolves', () => {
    return expect(fetch(1)).resolves.toBe('xinconan');
  });
  
  it('test promise rejects', () => {
    return expect(fetch(0)).rejects.toBe('error');
  });
  
  it('test async/await', async () => {
    expect.assertions(1);
    const data = await fetch(1);
    expect(data).toBe('xinconan');
  });
  
  it('test promise with async', async () => {
    await expect(fetch(1)).resolves.toBe('xinconan');
  });
});