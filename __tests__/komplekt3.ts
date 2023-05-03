import {Isikukood} from "../func_test/k1";

test("positiivne", ()=>{
    expect(new Isikukood("37605030299").sugu()).toBe("M");
    expect(new Isikukood("37605030299").synniaasta()).toBe(1976);
    expect(new Isikukood("25405030299").synniaasta()).toBe(1854);



});

