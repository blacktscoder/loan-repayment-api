import { Injectable } from '@nestjs/common';
import { Loan } from './loan.model';

// loan.service.ts
@Injectable()
export class LoanService {
  // Mock external data source (e.g., from a DB or API)
  private rawLoanData = [
    { id: 1, amount: 1000, dueDate: '2025-01-01', isPaidOff: false, interestRate: 5 },
    { id: 2, amount: 1500, dueDate: '2025-02-01', isPaidOff: false, interestRate: 4 },
  ];

  // Simulating fetching loans
  getAllLoans(): Loan[] {
    return this.rawLoanData.map(data => new Loan(
      data.id,
      data.amount,
      data.dueDate,
      data.isPaidOff,
      data.interestRate
    ));
  }
}
