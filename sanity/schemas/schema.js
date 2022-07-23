// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import restaurent from "./restaurent";
import category from "./category";
import dish from "./dish";
import featured from "./featured";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([restaurent, category, dish, featured]),
});
