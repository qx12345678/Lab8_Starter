// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

test('matches valid phone numbers', ()=>{
    expect(functions.isPhoneNumber('(619)-617-2001')).toBe(true);
})

test('matches valid phone numbers', ()=>{
    expect(functions.isPhoneNumber('(617) 617-2001')).toBe(true);
})

test('matches valid phone numbers', ()=>{
    expect(functions.isPhoneNumber('6161720')).toBe(false);
})

test('matches valid phone numbers', ()=>{
    expect(functions.isPhoneNumber('6199 617 2001')).toBe(false);
})

test('matches valid emails', ()=>{
    expect(functions.isEmail('abc@gmail.com')).toBe(true);
})

test('matches valid emails', ()=>{
    expect(functions.isEmail('abc@email.com')).toBe(true);
})

test('matches valid emails', ()=>{
    expect(functions.isEmail('1234')).toBe(false);
})

test('matches valid emails', ()=>{
    expect(functions.isEmail('abcd')).toBe(false);
})

test('isStrongPassword', ()=>{
    expect(functions.isStrongPassword('ab3466567')).toBe(true);
})

test('isStrongPassword', ()=>{
    expect(functions.isStrongPassword('bbcdefg')).toBe(true);
})

test('isStrongPassword', ()=>{
    expect(functions.isStrongPassword('12345678')).toBe(false);
})

test('isStrongPassword', ()=>{
    expect(functions.isStrongPassword('a1')).toBe(false);
})

test('isDate', ()=>{
    expect(functions.isDate('Jun/1st/2001')).toBe(false);
})

test('isDate', ()=>{
    expect(functions.isDate('01/06/23')).toBe(false);
})

test('isDate', ()=>{
    expect(functions.isDate('1/2/2021')).toBe(true);
})

test('isDate', ()=>{
    expect(functions.isDate('06/21/2002')).toBe(true);
})

test('isHexColor', ()=>{
    expect(functions.isHexColor('#ff0000')).toBe(true);
})

test('isHexColor', ()=>{
    expect(functions.isHexColor('#abc')).toBe(true);
})

test('isHexColor', ()=>{
    expect(functions.isHexColor('1234')).toBe(false);
})

test('isHexColor', ()=>{
    expect(functions.isHexColor('#33')).toBe(false);
})


