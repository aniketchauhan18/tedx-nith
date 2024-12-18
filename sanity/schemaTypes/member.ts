import { defineField, defineType } from "sanity";

export default defineType({
  name: "member",
  type: "document",
  title: "Member",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name of the member",
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug of the member",
      options: {
        source: "name",
      },
    }),
    defineField({
      name: "role",
      type: "string",
      title: "Position / role of member",
    }),
    defineField({
      name: "memberImage",
      type: "image",
      title: "Image of member",
    }),
  ],
});
