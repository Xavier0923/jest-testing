// const {sum, api, forEach, compileAndroidCode} = require('./sum.cjs');
// const {sum} = require('./sum.cjs');
const {greaterThan} = require('./sum.cjs');
const {diff} = require('jest-diff');
const axios = require('axios');
const data = {
  "posts": [
    {
      "id": 1,
      "title": "Post 1"
    },
    {
      "id": 2,
      "title": "Post 2"
    },
    {
      "id": 3,
      "title": "Post 3"
    }
  ],
  "comments": [
    {
      "id": 1,
      "body": "some comment",
      "postId": 1
    },
    {
      "id": 2,
      "body": "some comment",
      "postId": 1
    }
  ],
  "profile": {
    "name": "typicode"
  }
}


// 匹配器 - toBe()
// test('區塊1', () => {
//   expect(sum(1,2)).toBe(3);
// })


// test('測試加總', () => {
//   expect(sum(1, 2)).toBe(3);
//   expect(4).toBeGreaterThan(3);
//   expect('hello world').toMatch('hello');
// })


// 匹配器 - toThrow()
// test('compiling android goes as expected', () => {
//   // toThrow() 放入的參數只要錯誤消息中包含了放入的參數或指定的字串
//   expect(compileAndroidCode()).toThrow(); // 使用匿名函數將被測試的函數包裝起來調用，主要是為了確保 Jest 能夠正確捕捉到被測函數拋出的錯誤，從而確保測試能夠按照預期進行。
//   expect(() => compileAndroidCode()).toThrow(Error);

//   // 舉例來說，如果您的被測試函數拋出的錯誤消息是 'you are using the wrong JDK!'，
//   // 而您的 toThrow(/JDK/) 斷言中的參數是正則表達式 /JDK/，那麼該斷言會通過測試，因為錯誤消息中包含了 JDK 這個字串。
//   // 但如果您的斷言是 toThrow(/Wrong JDK/)，則該斷言會失敗，因為錯誤消息中沒有包含 Wrong JDK 這個字串

//   // You can also use a string that must be contained in the error message or a regexp
//   expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
//   expect(() => compileAndroidCode()).toThrow(/JDK/);
//   expect(() => compileAndroidCode()).toThrow('JDK');

//   // Or you can match an exact error message using a regexp like below
//   expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Test fails/ 原因是$後面不能再有任何的文字，所以會失敗
//   expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass
// });

// test.only 只會執行該測試
// test.only('測試加總2', () => {
//   expect(sum(1, 2)).toBe(3);
// })

// 測試非同步 官方範例
// test('the data is peanut butter', () => {
//   return fetchData().then(data => {
//     expect(data).toBe('peanut butter');
//   });
// });

// 測試非同步 成功案例
// test('get json data api success', async () => {
//   const res = await api();
//   expect(res).toEqual(data);
// });

// 測試非同步 錯誤案例
// test('get json data api error', () => {
//   return expect(api()).rejects.toBe('error');
// });

// 測試非同步 加上錯誤 使用try catch
// test('get json data api', async () => {
//   expect.assertions(1); // 預期執行1次測試
//   try {
//     const res = await api();
//     expect(res).toEqual(data);
//   } catch (error) {
//     // expect(() => {throw error}).toThrow('error');
//     expect(error).toBe('error');
//   }
// });

// 測試非同步 - assertions() 計算預計測試的次數
// test('the data is peanut butter', () => {
//     expect.assertions(1) // 預期執行1次測試
//     return api().then(res => {
//         expect(res.data).toBeDefined();
//     })
// });

// 測試非同步 - async await 用法
// test('the data is peanut butter', async () => {
//   expect.assertions(1); // 偵測做了幾次預期
//   const res = await api();
//   expect(res.data).toEqual(data);
// });

// 測試非同步 - 加入 try catch 的用法
// test('the fetch fails with an error', async () => {
//   // expect.assertions(1);
//   try {
//     await api();
//   } catch (error) {
//     expect(error).toMatch('error');
//   }
// });

// // 設置和拆卸
// // // 在每次跑測試之前可以預先執行的鉤子函數
// beforeEach(() => {
//   console.log('beforeEach');
// });

// // // 在每次跑完測試之後可執行的鉤子函數
// afterEach(() => {
//   console.log('afterEach');
// });

// // // 所有測試之前可執行的鉤子函數
// beforeAll(() => {
//     console.log('beforeAll');
// });

// // // 所有測試之後可執行的鉤子函數
// afterAll(() => {
//     console.log('afterAll')
// })

// describe 作用域 Scoping
// beforeAll(() => console.log('1 - beforeAll'));
// afterAll(() => console.log('1 - afterAll'));
// beforeEach(() => console.log('1 - beforeEach'));
// afterEach(() => console.log('1 - afterEach'));

// test('', () => console.log('1 - test'));

// describe('Scoped / Nested block', () => {
//   beforeAll(() => console.log('2 - beforeAll'));
//   afterAll(() => console.log('2 - afterAll'));
//   beforeEach(() => console.log('2 - beforeEach'));
//   afterEach(() => console.log('2 - afterEach'));

//   test('', () => console.log('2 - test'));
// });

// 1 - beforeAll
// 1 - beforeEach
// 1 - test
// 1 - afterEach
// 2 - beforeAll
// 1 - beforeEach
// 2 - beforeEach
// 2 - test
// 2 - afterEach
// 1 - afterEach
// 2 - afterAll
// 1 - afterAll

// 模擬函數 mock function
// const mockFn = jest.fn().mockReturnValue(console.log(42));
// test('測試模擬函數', () => {
//     mockFn();
// })

// 範例1
// const mockCallback = jest.fn(x => 42 + x);

// test('forEach mock function', () => {
//   forEach([0, 1, 2], mockCallback);
//   // 所有模擬函數都具有這個特殊.mock屬性，其中保存了有關函數如何呼叫以及函數傳回內容的資料。
//   console.log('mockCallback.mock.calls', mockCallback.mock.calls)
//   console.log('mockCallback.mock.results', mockCallback.mock.results)
//   // mockCallback.mock.calls 是參數陣列也就是[[0, 1], ...]
//   // mockCallback.mock.results 是經過mock過的結果陣列也就是[{type: 'return', value: 42},...]
//   // The mock function was called twice
//   expect(mockCallback.mock.calls).toHaveLength(3);

//   // The first argument of the first call to the function was 0
//   expect(mockCallback.mock.calls[0][0]).toBe(0);

//   // The first argument of the second call to the function was 1
//   expect(mockCallback.mock.calls[1][0]).toBe(1);

//   // The return value of the first call to the function was 42
//   expect(mockCallback.mock.results[0].value).toBe(42);
//   expect(mockCallback.mock.results[1].value).toBe(43);
// });

// 範例2 模擬多個返回值 Mock Return Values
// test('Mock Return Values', () => {
//   const myMock = jest.fn();

//   myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

//   console.log(myMock(), myMock(), myMock(), myMock());
//   // > 10, 'x', true, true
// })

// 範例3. 模擬axios 模組來假設call api 的情況
// jest.mock('axios');

// test('mock axios', () => {
//     const mockData = {
//         "posts": [
//           {
//             "id": 1,
//             "title": "Post 1"
//           },
//           {
//             "id": 2,
//             "title": "Post 2"
//           },
//           {
//             "id": 3,
//             "title": "Post 3"
//           }
//         ],
//         "comments": [
//           {
//             "id": 1,
//             "body": "some comment",
//             "postId": 1
//           },
//           {
//             "id": 2,
//             "body": "some comment",
//             "postId": 1
//           }
//         ],
//         "profile": {
//           "name": "typicode"
//         }
//       }
//     const resp = {data: mockData};
//     axios.get.mockResolvedValue(resp);

//     return api().then(res => {
//         console.log('回傳假資料', res.data)
//         expect(res.data).toEqual(mockData)
//     });
// })


// Jest Platform
// jest diff 比較不同
// test('test jest diff', () => {
  
//   const a = {a: {b: {c: 5}}};
//   const b = {a: {b: {c: 6}}};

//   const result = diff(a, b);

//   // 打印两个值的差异
//   console.log(result);

// })


// jest-get-type 取得型別
// test('test jest-get-type',() => {
//   const {getType} = require('jest-get-type');

//   const array = [1, 2, 3];
//   const nullValue = null;
//   const undefinedValue = undefined;

//   // prints 'array'
//   console.log(getType(array));
//   // prints 'null'
//   console.log(getType(nullValue));
//   // prints 'undefined'
//   console.log(getType(undefinedValue));
// })


// 覆蓋率
describe('突變測試',() => {
  it('should return true if x is greater than y', () => {
    expect(greaterThan(2, 1)).toBe(true)
    expect(greaterThan(0, -1)).toBe(true)
    expect(greaterThan(100, 0)).toBe(true)
  })
  it('should return false if x is less than y', () => {
    expect(greaterThan(1, 2)).toBe(false)
    expect(greaterThan(-1, 0)).toBe(false)
    expect(greaterThan(0, 100)).toBe(false)
  })
  // 新增案例
  it('should return false if x is equal y', () => {
    expect(greaterThan(1, 1)).toBe(false)
  })
})














// 新增案例
// it('should return false if x is equal y', () => {
//   expect(greaterThan(1, 1)).toBe(false)
// })