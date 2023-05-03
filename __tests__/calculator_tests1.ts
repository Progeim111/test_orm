import {Calculator} from "../func_test/calculator1";
//import {Calculator} from "../calculator2";

let calcobj:Calculator=null;

beforeEach(() => {
    calcobj=new Calculator();
});

test('empty init', () => {
    expect(calcobj.getPanelContents()).toBe("");
});

test('simple input', ()=>{
    calcobj.pressButton('7');
    expect(calcobj.getPanelContents()).toBe("7");
});

test('simple input', ()=>{
    calcobj.pressButton('8');
    expect(calcobj.getPanelContents()).toBe("8");
});

test('simple input', ()=>{
    calcobj.pressButton('9');
    expect(calcobj.getPanelContents()).toBe("9");
});

test('simple input', ()=>{
    calcobj.pressButton('4');
    expect(calcobj.getPanelContents()).toBe("4");
});