import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType()
export class Credit {

    @Field()
    id: number;

    @Field()
    creditType: string;

    @Field()
    creditAvailable: number;

    @Field()
    creditStatus: boolean;

    constructor (id: number, creditType: string, creditAvailable: number, creditStatus: boolean){

        this.id = id;
        this.creditType = creditType;
        this.creditAvailable = creditAvailable;
        this.creditStatus = creditStatus;
    }
}

