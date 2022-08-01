export class Customer {
    private _name : string;
    private _numberhome : number;
    private _address : string;
    private _electricmeterID : number;


    constructor(name: string,
                numberhome: number,
                address: string,
                electricmeterID: number) {
        this._name = name;
        this._numberhome = numberhome;
        this._address = address;
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

    getAddress(): string {
        return this._address;
    }

    setAddress(value: string) {
        this._address = value;
    }
}