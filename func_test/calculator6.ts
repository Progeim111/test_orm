class Calculator {
    protected panelContents: string = "";
    protected memoryContents: number = 0;
    protected markContents: string = "";
    protected marks: string[] = ["+", "-", "X", "/"];
    protected lastNumber: number = 0;

    pressButton(b: string): void {
        if (b === "C") {
            this.panelContents = "";
            this.memoryContents = 0;
            this.markContents = "";
            this.lastNumber = 0;
        } else if (this.marks.includes(b)) {
            if (this.panelContents !== "") {
                if (this.markContents === "") {
                    this.memoryContents = parseFloat(this.panelContents);
                } else {
                    this.performCalculation();
                }
                this.lastNumber = parseFloat(this.panelContents);
                this.markContents = b;
                this.panelContents = ""; // Clear the panel contents to enter the next number
            }
        } else if (b === "=") {
            this.performCalculation();
        } else {
            this.panelContents += b;
        }
    }

    private performCalculation(): void {
        if (this.markContents.length === 1) {
            const num = parseFloat(this.panelContents);
            if (this.markContents === "+") {
                this.memoryContents += num;
            } else if (this.markContents === "-") {
                this.memoryContents -= num;
            } else if (this.markContents === "X") {
                this.memoryContents *= num;
            } else if (this.markContents === "/") {
                this.memoryContents /= num;
            }
            this.panelContents = this.memoryContents.toString();
            this.markContents = "";
            this.lastNumber = 0;
        } else if (this.markContents.length === 0) {
            this.lastNumber = parseFloat(this.panelContents);
            this.panelContents = "";
        }
    }

    getPanelContents(): string {
        if (this.panelContents.length > 0) {
            return this.panelContents;
        }
        return this.lastNumber.toString();
    }
}

export { Calculator };
