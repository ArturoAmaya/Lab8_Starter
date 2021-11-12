// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

test('checks first valid phone number', () => {
    expect(functions.isPhoneNumber('(858) 587-1121')).toBe(true);
});

test('checks second valid phone number', () => {
    expect(functions.isPhoneNumber('(858) 534-2230')).toBe(true);
});

test('checks first invalid phone number', () => {
    expect(functions.isPhoneNumber('1234')).toBe(false);
});

test('checks second invalid phone number', () => {
    expect(functions.isPhoneNumber('99')).toBe(false);
});

test('checks first valid email', () => {
    expect(functions.isEmail('sschaeff@ucsd.edu')).toBe(true);
});

test('checks second valid email', () => {
    expect(functions.isEmail('a1amaya@ucsd.edu')).toBe(true);
});

test('checks first invalid email', () => {
    expect(functions.isEmail('CSE@110')).toBe(false);
});

test('checks second invalid email', () => {
    expect(functions.isEmail('gmail.com')).toBe(false);
});

test ('FFF is a valid 3-digit hexcode', () => {
    expect(functions.isHexColor('FFF')).toBe(true);
})

test ('F678A4 is a valid 6-digit hexcode', ()=>{
    expect(functions.isHexColor('F678A4')).toBe(true);
})

test ('GGG is a NOT valid 3-digit hexcode', () => {
    expect(functions.isHexColor('GGG')).toBe(false);
})

test ('R678A4 is NOT a valid 6-digit hexcode', ()=>{
    expect(functions.isHexColor('R678A4')).toBe(false);
})

test ('12/1/1999 is a valid date', ()=>{
    expect(functions.isDate('12/1/1999')).toBe(true);
})

test ('9/5/2099 is a valid date', ()=>{
    expect(functions.isDate('9/5/2099')).toBe(true);
})

test ('12/1/19993 is NOT a valid date', ()=>{
    expect(functions.isDate('12/1/19993')).toBe(false);
})

test ('129/555/2099 is NOT a valid date', ()=>{
    expect(functions.isDate('129/555/2099')).toBe(false);
})

test ('abcde is a strong password (is it though)', () =>{
    expect(functions.isStrongPassword('abcde')).toBe(true);
})

test ('ab589__354 is a strong password', () =>{
    expect(functions.isStrongPassword('ab589__354')).toBe(true);
})

test ('934 is NOT a strong password', () =>{
    expect(functions.isStrongPassword('934')).toBe(false);
})

test ('ab589__354159015789013457 NOT is a strong password', () =>{
    expect(functions.isStrongPassword('ab589__354159015789013457')).toBe(false);
})