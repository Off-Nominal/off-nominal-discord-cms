export default {
  name: "eventPartyMessages",
  type: "document",
  title: "Event Party Messages",
  fields: [
    {
      name: "message",
      type: "string",
      title: "Message",
    },
    {
      name: "force",
      type: "boolean",
      title: "Force",
    },
    {
      name: "timestamp",
      type: "number",
      title: "Time",
      validation: (Rule) => Rule.max(60).min(0),
    },
  ],
};
