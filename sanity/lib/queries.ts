import { defineQuery } from "next-sanity";

export const MEMBERS_QUERY = defineQuery(`*[_type == "member"] {
  _id,
  name,
  slug,
  role,
  "memberImageUrl": memberImage.asset->url
}

`);

export const SPEAKERS_QUERY = defineQuery(`*[_type == "speaker"] {
  _id,
  name,
  slug,
  shortBio,
  Description,
  "speakerImageUrl": speakerImage.asset->url
}

`);
