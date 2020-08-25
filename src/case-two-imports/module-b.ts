import { GraphQLModule } from "@graphql-modules/core";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";

const typeDefsArray = loadFilesSync(`${__dirname}/module-b/*.graphql`);
const typeDefs = mergeTypeDefs(typeDefsArray, {});

export const ModuleB = new GraphQLModule({
  typeDefs: typeDefs,
  providers: [],
});
