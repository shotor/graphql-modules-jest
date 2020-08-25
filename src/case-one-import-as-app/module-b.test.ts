import "reflect-metadata";
import "./__mocks__/module-a";
import gql from "graphql-tag";
import { mockQuery } from "../mock-query";
import { ModuleB } from "./module-b";
import { GraphQLModule } from "@graphql-modules/core";
import { ModuleA } from "./module-a";

const appModule = new GraphQLModule({
  imports: [ModuleA, ModuleB],
});

describe("case-one-import-as-app/module-b", () => {
  it("can load module b", async () => {
    const result = await mockQuery({
      graphqlModule: appModule,
      document: gql`
        query myQuery {
          moduleBQuery {
            moduleBField
          }
        }
      `,
      variableValues: {},
      inject: () => {},
    });

    expect(result).toBeDefined();
  });
});
