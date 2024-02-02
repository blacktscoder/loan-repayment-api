import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphqlModule } from './graphql/graphql.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [GraphQLModule.forRoot({
    driver: ApolloDriver,
    typePaths:['src/graphql/loan.schema.graphql'],
  }),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
