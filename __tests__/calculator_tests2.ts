//import {Calculator} from "../func_test/calculator3";
import {Calculator} from "../func_test/calculator4";

let calcobj:Calculator=null;

beforeEach(() => {
    calcobj=new Calculator();
});

test('multiply 1', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('X');
    calcobj.pressButton('2');
    expect(calcobj.getPanelContents()).toBe("2");
});

test('multiply 2', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('X');
    calcobj.pressButton('8');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("24");
});

test('multiply 3', ()=>{
    calcobj.pressButton('17');
    calcobj.pressButton('X');
    calcobj.pressButton('2');
    calcobj.pressButton('=');

    expect(calcobj.getPanelContents()).toBe("34");
});



test('multiply 4', ()=>{
    calcobj.pressButton('30');
    calcobj.pressButton('X');
    calcobj.pressButton('20');
    calcobj.pressButton('X');
    calcobj.pressButton('20');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("12000");
});
