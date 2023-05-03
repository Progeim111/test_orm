class Calculator{
    protected panelContents:string="";

    pressButton(b:string):void{
        if(b=="C") {
            this.panelContents = ""

        } else if(b=="X"){
            if (/^\d+X\d+(X\d+)*$/.test(this.panelContents)) {
                let a:number=parseInt(this.panelContents.split("X")[0]);
                let b:number=parseInt(this.panelContents.split("X")[1]);
                let c:number=a*b;
                this.panelContents=c.toString() + "X";
            } else {
                this.panelContents += b;
            }
        } else if(b=="="){
            let a:number=parseInt(this.panelContents.split("X")[0]);
            let b:number=parseInt(this.panelContents.split("X")[1]);
            let c:number=a*b;
            this.panelContents=c.toString();

        } else {
            this.panelContents+=b;
        }
    }
    getPanelContents():string{
        if (/X/.test(this.panelContents)) {
            let arr: string[] = this.panelContents.split("X");
            return arr[arr.length - 1];

        } else  if(this.panelContents.length>0){

            return this.panelContents;
        } else {
            return "0";
        }
    }
}

export{ Calculator }