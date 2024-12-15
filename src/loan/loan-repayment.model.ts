import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Loan } from './loan.model';

@ObjectType()
export class LoanRepayment {
  @Field(type => ID)
  id: number;

  @Field(type => Loan)
  loan: Loan;

  @Field()
  amountPaid: number;

  @Field()
  paymentDate: string;
}
