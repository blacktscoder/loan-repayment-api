import { Injectable } from '@nestjs/common';
import { Loan, CreateLoanInput } from './loan.model';

@Injectable()
export class LoanService {

private loan: Loan[] = [];
private idCounter = 1;

createLoan(input: CreateLoanInput): Loan {
  if( input.amount < 10 ){
    throw new Error('Loan amount should not be less than 10');
  }
  const loan = new Loan(
    this.idCounter++,
    input.amount,
    input.dueDate,
    input.isPaidOff,
    input.interestRate,
  );
  this.loan.push(loan);
  return loan;
}

  getAllLoans(): Loan[] {
    return this.loan;
  }
}
