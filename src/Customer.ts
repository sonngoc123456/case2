export class Customer {
    private _name : string;
    private _numberhome : number;
    private _electricmeterID : number;


    constructor(name: string, numberhome: number, electricmeterID: number) {
        this._name = name;
        this._numberhome = numberhome;
        this._electricmeterID = electricmeterID;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get numberhome(): number {
        return this._numberhome;
    }

    set numberhome(value: number) {
        this._numberhome = value;
    }

    get electricmeterID(): number {
        return this._electricmeterID;
    }

    set electricmeterID(value: number) {
        this._electricmeterID = value;
    }

}