import { GraphQLModule } from "@graphql-modules/core";
import { ModuleA } from "./module-a";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";

const typeDefsArray = loadFilesSync(`${__dirname}/module-b/*.graphql`);
const typeDefs = mergeTypeDefs(typeDefsArray, {});

export const ModuleB = new GraphQLModule({
  typeDefs: typeDefs,
  providers: [],
  context: {
    key: "value",
  },
  imports: [ModuleA],
});
