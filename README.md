# graphql-modules jest issue reproduction

Reproduction repository for the following error:

```sh
 FAIL  src/case-two-imports/module-c.test.ts
  ● module-c › cant load ModuleC


          GraphQL-Modules Error: Schema is not valid!
          - #Module #module-c.test.ts_3239397735238033 doesn't have a valid schema!
          -- Unknown directive "@cacheControl".

          Possible solutions:
          - Check syntax errors in typeDefs
          - Make sure you import correct dependencies

       9 |   variableValues,
      10 | }) => {
    > 11 |   const { schema, injector } = graphqlModule;
         |           ^
      12 |
      13 |   inject && inject(InjectFunction(ModuleSessionInfo), injector);
      14 |


      at GraphQLModule.get schema [as schema] (node_modules/@graphql-modules/core/dist/index.cjs.js:413:31)
          at Array.map (<anonymous>)
      at src/mock-query.ts:11:11
      at src/mock-query.ts:8:71
      at __awaiter (src/mock-query.ts:4:12)
      at Object.exports.mockQuery (src/mock-query.ts:10:6)
```

## Description

This error occurs when trying to unit test a module, that depends/imports 2 other modules. In those cases it's unable to load the directives.

When it depends on 1 module everything seems to go fine.

This repository has 3 directories in the `src` folder:

- case-one-import: PASSES - Two modules, where B depends on A. A is mocked using jest mocks. We add the cachecontrol directive to A.
- case-one-import-as-app: PASSES - Experiment instead of running the query on Module B, run it on a new module that imports B and A. (B still depends on A and A is still mocked)
- case-two-imports: FAILS - Module A and B now mocked. Module C depends on A and B. When trying to run the query we get the error described above.

## Usage

```sh
yarn
yarn test
```
