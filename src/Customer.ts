export class Customer {
    private _name : string;
    private _numberhome : number;
    private _electricmeterID : number;


    constructor(name: string,
                numberhome: number,
                electricmeterID: number) {
        this._name = name;
        this._numberhome = numberhome;
        this._electricmeterID = electricmeterID;
    }

    getName(): string {
        return this._name;
    }

    setName(value: string) {
        this._name = value;
    }


    getNumberHome(): number {
        return this._numberhome;
    }

    setNumberHome(value: number) {
        this._numberhome = value;
    }

    getElectricmeterID(): number {
        return this._electricmeterID;
    }

    setElectricmeterID(value: number) {
        this._electricmeterID = value;
    }

}