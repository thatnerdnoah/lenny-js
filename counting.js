class Counting {

    constructor(client) {
        this.client = client;
        this.currentNumber = this.getNumber("Current");
        this.nextNumber = 0;
        this.record = this.getNumber("Record");
    }
    
    getNumber(numberToPull) {
        
        if (numberToPull == "Current") {

        } else if (numberToPull == "Record") {

        }

        return 0;
    }

}