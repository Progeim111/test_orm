import {loeA, suurAjavaikearv, loetaishaalikud} from "../func_test/h1";

test("Lugemine a", () => {
    expect(loeA("Kalamari")).toBe(3);
    expect(loeA("")).toBe(0);
    expect(loeA("ababababa")).toBe(5);
});

test("Lugemine a ja A", () => {
    expect(suurAjavaikearv("Kalamari")).toBe(3);
    expect(suurAjavaikearv("AaSS")).toBe(2);
    expect(suurAjavaikearv("ababababa")).toBe(5);
    expect(suurAjavaikearv("AabAbababa")).toBe(6);
});

test("Lugemine täishääikud", () => {
    expect(loetaishaalikud("Kalamari")).toBe(4);
    expect(loetaishaalikud("aeioöäüõ")).toBe(8);
    expect(loetaishaalikud("lauajalg")).toBe(4);
});