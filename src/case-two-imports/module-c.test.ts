import "./__mocks__/module-a";
import "./__mocks__/module-b";
import { mockQuery } from "../mock-query";
import gql from "graphql-tag";
import { ModuleC } from "./module-c";

describe("module-c", () => {
  it("cant load ModuleC", async () => {
    const result = await mockQuery({
      graphqlModule: ModuleC,
      document: gql`
        query myQuery {
          moduleCQuery {
            moduleCField
          }
        }
      `,
      variableValues: {},
      inject: () => {},
    });

    expect(result).toBeDefined();
  });
});
