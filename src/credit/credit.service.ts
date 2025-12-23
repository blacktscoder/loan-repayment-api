import { Injectable } from "@nestjs/common";
import { Credit } from "./credit.model";

@Injectable()

export class CreditService {

private rawLoanData = [
    { id: 1, creditType: 'Private', creditAvailable: 1200, creditStatus: true },
    { id: 2, creditType: 'Semi', creditAvailable: 2300, creditStatus: false },

  ];

    getAllCredit(): Credit[] {
        return this.rawLoanData.map(data => new Credit(
            data.id,
            data.creditType,
            data.creditAvailable,
            data.creditStatus,
        ));       
    }
}