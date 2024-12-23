import { type SchemaTypeDefinition } from "sanity";
import member from "./member";
import speaker from "./speaker";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [member, speaker],
};
