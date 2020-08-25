import "reflect-metadata";
import "./__mocks__/module-a";
import gql from "graphql-tag";
import { mockQuery } from "../mock-query";
import { ModuleB } from "./module-b";

describe("case-one-import/module-b", () => {
  it("can load module b", async () => {
    const result = await mockQuery({
      graphqlModule: ModuleB,
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
