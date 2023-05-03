export class Isikukood{
    constructor(protected kood:string){}
    sugu(){
        return parseInt(this.kood[0]) % 2 == 0 ? "N" : "M";
    }
    synniaasta(){
        const aasta = parseInt(this.kood.slice(1, 3));
        const sajand = parseInt(this.kood[0]);
        return sajand === 1 || sajand === 2 ? 1800 + aasta : sajand === 3 || sajand === 4 ? 1900 + aasta : sajand === 5 || sajand === 6 ? 2000 + aasta : 2100 + aasta;
    }
}