export const getPages = async () => {
  const response = await fetch(`${process.env.BASE_URL}/`);
  const data = await response.json();
  return data;
};
