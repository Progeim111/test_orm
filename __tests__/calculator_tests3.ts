import {Calculator} from "../func_test/calculator5";

let calcobj:Calculator=null;

beforeEach(() => {
    calcobj=new Calculator();
});

test('adding 1', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('+');
    calcobj.pressButton('2');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("5");
});

test('subtracting 1', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('-');
    calcobj.pressButton('2');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("1");
});




test('multiply 2', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('X');
    calcobj.pressButton('2');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("6");
});

test('divide 1', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('/');
    calcobj.pressButton('2');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("1.5");
});

test('divide 2', ()=>{
    calcobj.pressButton('3333');
    calcobj.pressButton('/');
    calcobj.pressButton('1111');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("3");
});

test('subtracting 2', ()=>{
    calcobj.pressButton('5335');
    calcobj.pressButton('-');
    calcobj.pressButton('124');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("5211");
});
