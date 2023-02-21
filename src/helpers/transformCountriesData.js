export const transformCountriesData = data => {
  return data.map(
    ({ id, original_title, original_language }) => ({
      id: id,
      title: original_title,
      language: original_language,
    }),
  );
};
