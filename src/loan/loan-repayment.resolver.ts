import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { LoanRepayment } from './loan-repayment.model';
import { LoanService } from './loan.service';

@Resolver(of => LoanRepayment)
export class LoanRepaymentResolver {
  constructor(private loanService: LoanService) {}

}
