export class User {
    firstName: string;
    lastName: string;
    email:string;
    birthDate: number;
    adress: string;
    zipCode: number;
    city: string;

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.email = obj ? obj.email: '';
        this.birthDate = obj ? obj.birthDate : '';
        this.adress = obj ? obj.adress : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
    }

    public toJSON(){
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            email:this.email,
            birthDate: this.birthDate,
            adress: this.adress,
            zipCode: this.zipCode,
            city: this.city
        };
    }
}