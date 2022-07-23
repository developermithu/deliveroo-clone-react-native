export default {
  name: "restaurent",
  title: "Restaurent",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Restaurent name",
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
      name: "short_deimagescription",
      title: "Image of the restaurent",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "lat",
      title: "Latitude of the restaurent",
      type: "number",
    },
    {
      name: "long",
      title: "Logitude of the restaurent",
      type: "number",
    },
    {
      name: "address",
      title: "Restaurent address",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      title: "Enter a rating from (1-5 Stars)",
      type: "number",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(5)
          .error("Please enter a value beetwen 1 and 5"),
    },
    {
      name: "type",
      title: "Category",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: { type: "category" },
    },
    {
      name: "dishes",
      title: "Dishes",
      type: "array",
      of: [{ type: "reference", to: { type: "dish" } }],
    },
  ],
};
