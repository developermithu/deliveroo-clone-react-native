import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "iwcl3qpo",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: true,  // `false` if you want to ensure fresh data
});

const builder = imageUrlBuilder(client);

// export urlFor
export const urlFor = (source) => builder.image(source);

// Run this to add extension for localhost 3000 CORS policy
// sanity cors add http://localhost:3000
export default client;
