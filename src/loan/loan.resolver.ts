import { Resolver, Query } from '@nestjs/graphql';
import { LoanService } from './loan.service';
import { Loan } from './loan.model';

@Resolver()
export class LoanResolver {
  constructor(private readonly loanService: LoanService) {}

  @Query(() => [Loan])
  getLoans(): Loan[] {
    return this.loanService.getAllLoans();
  }
}
