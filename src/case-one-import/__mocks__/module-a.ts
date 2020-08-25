import { GraphQLModule } from "@graphql-modules/core";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";

const typeDefsArray = loadFilesSync(`${__dirname}/../module-a/*.graphql`);
const typeDefs = mergeTypeDefs(typeDefsArray, {});

jest.mock("../module-a", () => {
  return {
    ModuleA: new GraphQLModule({
      typeDefs: typeDefs,
      providers: [],
      context: {
        key: "value",
      },
    }),
  };
});
