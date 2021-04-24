export const fetchPages = async () => {
  const response = await fetch(`${process.env.BASE_URL}/`, {
    headers: {
      Authentication: `Bearer ${process.env.NOTION_API_TOKEN}`,
    },
  });
  const data = await response.json();
  return data;
};
