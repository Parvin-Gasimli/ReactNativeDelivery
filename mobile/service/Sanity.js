import sanityClient, { createClient } from "@sanity/client";
import imageurlBuilder from "@sanity/image-url";

// export const sanityClient = SanityClient(sanityClientConfig);

export const client = createClient({
  projectId: "59rnvxij",
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: true,
});
const builder = imageurlBuilder(client);
export const urlFor = (source) => {
  return builder.image(source);
};
