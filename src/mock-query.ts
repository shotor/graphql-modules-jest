import { execute } from "graphql";
import { InjectFunction } from "@graphql-modules/di";
import { ModuleSessionInfo } from "@graphql-modules/core";

export const mockQuery = async ({
  graphqlModule,
  document,
  inject,
  variableValues,
}) => {
  const { schema, injector } = graphqlModule;

  inject && inject(InjectFunction(ModuleSessionInfo), injector);

  const result = await execute({
    schema,
    variableValues,
    document,
  });

  return result;
};
