export function loeA(tekst:string): number{
    return tekst.toLowerCase().split("a").length-1;
}

export function suurAjavaikearv(tekst:string)  {
    let mitu = 0;
    for (let i = 0; i < tekst.length; i++) {
        if (tekst[i] === "a" || tekst[i] === "A") {
            mitu++;
        }
    }
    return mitu;
}

export function loetaishaalikud(tekst:string) {
    const vowels = ["a", "e", "i", "o", "u", "õ", "ä", "ö", "ü"];
    const lowercaseS = tekst.toLowerCase();
    let mitu = 0;
    for (let i = 0; i < lowercaseS.length; i++) {
        if (vowels.includes(lowercaseS[i])) {
            mitu++;
        }
    }
    return mitu;
}


