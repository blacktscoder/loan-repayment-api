import { ObjectType, Field, InputType } from '@nestjs/graphql';

@ObjectType()
export class Loan {
  @Field()
  id: number;

  @Field()
  amount: number;

  @Field()
  dueDate: string;

  @Field()
  isPaidOff: boolean;

  @Field({ nullable: true })
  interestRate: number;

  constructor(id: number, amount: number, dueDate: string, isPaidOff: boolean, interestRate: number) {
    this.id = id;
    this.amount = amount;
    this.dueDate = dueDate;
    this.isPaidOff = isPaidOff;
    this.interestRate = interestRate;
  }

  @Field()
  getTotalAmountWithInterest(): number {
    return this.amount * (1 + this.interestRate / 100);
  }
}

@InputType()
export class CreateLoanInput {
  @Field()
  id: number;

  @Field()
  amount: number;

  @Field()
  dueDate: string;

  @Field()
  isPaidOff: boolean;

  @Field({ nullable: true })
  interestRate: number;

}
