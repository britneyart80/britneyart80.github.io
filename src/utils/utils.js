export const formatDate = (start, end) => {
  return `${start.toLocaleString("en-us", {
    month: "long",
    year: "numeric",
  })} - ${
    end
      ? end.toLocaleString("en-us", { month: "long", year: "numeric" })
      : "Present"
  }`;
};
