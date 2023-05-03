class Calculator {
    private panelContents: string;

    constructor() {
        this.panelContents = "";
    }

    getPanelContents(): string {
        return this.panelContents;
    }

    pressButton(button: string): void {
        this.panelContents += button;
    }
}

export{
    Calculator
}