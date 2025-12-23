import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LoanService } from './loan.service';
import { CreateLoanInput, Loan } from './loan.model';

@Resolver()
export class LoanResolver {
  constructor(private readonly loanService: LoanService) {}

  @Query(() => [Loan])
  getLoans(): Loan[] {
    return this.loanService.getAllLoans();
  }

  @Mutation(() => Loan)
  createLoan(
    @Args('input') input: CreateLoanInput,
  ): Loan{
    return this.loanService.createLoan(input);
  }
}
