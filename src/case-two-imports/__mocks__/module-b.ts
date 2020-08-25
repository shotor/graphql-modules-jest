import { GraphQLModule } from "@graphql-modules/core";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";

const typeDefsArray = loadFilesSync(`${__dirname}/../module-b/*.graphql`);
const typeDefs = mergeTypeDefs(typeDefsArray, {});

jest.mock("../module-b", () => {
  return {
    ModuleB: new GraphQLModule({
      typeDefs: typeDefs,
      providers: [],
    }),
  };
});
