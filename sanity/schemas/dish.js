export default {
  name: "dish",
  title: "Dishes",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name of dish",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      title: "Short description",
      type: "string",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "price",
      title: "Price of dish in GBP",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image of dish",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
