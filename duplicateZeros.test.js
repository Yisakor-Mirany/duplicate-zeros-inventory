const duplicateZeros = require('./duplicateZeros');


test('example case', () => {
    let arr = [1,0,2,3,0,4,5,0];
    duplicateZeros(arr);
    expect(arr).toEqual([1,0,0,2,3,0,0,4]);
});

test('no zeros', () => {
    let arr = [1,2,3];
    duplicateZeros(arr);
    expect(arr).toEqual([1,2,3]);
});

test('single zero', () => {
    let arr = [1, 0, 2, 3];
    duplicateZeros(arr);
    expect(arr).toEqual([1, 0, 0, 2]);
});


test('all zeros', () => {
    let arr = [0,0,0,0,0,0,0];
    duplicateZeros(arr);
    expect(arr).toEqual([0,0,0,0,0,0,0]);
});

test('zeros at the end', () => {
    let arr = [8,4,5,0,0,0,0,7];
    duplicateZeros(arr);
    expect(arr).toEqual([8,4,5,0,0,0,0,0]);
});

test('empty array', () => {
    let arr = [];
    duplicateZeros(arr);
    expect(arr).toEqual([]);
});
