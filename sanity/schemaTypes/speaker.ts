import { defineField, defineType } from "sanity";

export default defineType({
  name: "speaker",
  type: "document",
  title: "Speaker",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name of the speaker",
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug of the speaker",
      options: {
        source: "name",
      },
    }),
    defineField({
      name: "speakerImageUrl",
      type: "image",
      title: "Image of speaker",
    }),
    defineField({
      name: "shortBio",
      type: "string",
      title: "Short bio of the speaker",
    }),
    defineField({
      name: "Description",
      type: "string",
      title: "Description of the speaker",
    }),
  ],
});
