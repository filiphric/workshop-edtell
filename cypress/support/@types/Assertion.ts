export {}
declare global {
    namespace Chai {
      interface Assertion {
        jsonSchema(schema: object): Assertion;
      }
  }
}