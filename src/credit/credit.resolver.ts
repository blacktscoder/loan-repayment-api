import {Resolver, Query} from '@nestjs/graphql'
import { CreditService } from './credit.service'
import { Credit } from './credit.model'

@Resolver()
export class CreditResolver {
    constructor(private readonly creditService: CreditService){}

        @Query(() => [Credit])
        getCredits(): Credit[] {
            return this.creditService.getAllCredit();
        
        }
    }
