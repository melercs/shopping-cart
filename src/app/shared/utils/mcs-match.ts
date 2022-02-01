
export function sumCollection(collection: any[], factorA, factorB): number {
  return collection.reduce((a, b) =>  a + (b[factorA] * b[factorB]), 0);
}
