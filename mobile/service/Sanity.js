import sanityClient from "@sanity/client";
import imageurlBuilder from "@sanity/image-url";

// export const sanityClient = SanityClient(sanityClientConfig);

export const client = sanityClient({
  projectId: "6z0nn06o",
  dataset: "production",
  apiVersion: "2021-03-25",
  token: process.env.SANITY_TOKEN,
  useCdn: true,
});
const builder = imageurlBuilder(client);
export const urlFor = (source) => {
  return builder.image(source);
};
