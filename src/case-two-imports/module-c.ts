import { GraphQLModule } from "@graphql-modules/core";
import { ModuleA } from "./module-a";
import { ModuleB } from "./module-b";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";

const typeDefsArray = loadFilesSync(`${__dirname}/module-c/*.graphql`);
const typeDefs = mergeTypeDefs(typeDefsArray, {});

export const ModuleC = new GraphQLModule({
  typeDefs: typeDefs,
  providers: [],
  context: {
    key: "value",
  },
  imports: [ModuleA, ModuleB],
});
