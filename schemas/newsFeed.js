export default {
  name: "newsFeed",
  type: "document",
  title: "RSS Feed Subscriptions",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "url",
      type: "url",
      title: "url",
    },
    {
      name: "filter",
      type: "string",
      title: "Filters",
    },
    {
      name: "diagnostic",
      type: "boolean",
      title: "Output Diagnostics",
      description:
        "An output of the JSON will be posted to the terminal with each post",
      initialValue: false,
    },
    {
      name: "thumbnail",
      type: "image",
      title: "Thumbnail",
    },
    {
      name: "category",
      type: "reference",
      title: "Category",
      to: [{ type: "newsCategory" }],
    },
  ],
};
