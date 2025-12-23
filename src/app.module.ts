import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { LoanResolver } from './loan/loan.resolver';
import { LoanService } from './loan/loan.service';
import { Loan } from './loan/loan.model';
import { CreditResolver } from './credit/credit.resolver';
import { CreditService } from './credit/credit.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,         // Specify the driver
      autoSchemaFile: true,         // Auto-generate the schema
      playground: true,             // Enable GraphQL playground
    }),
  ],
  providers: [LoanResolver, LoanService, CreditResolver, CreditService],
})
export class AppModule {}
