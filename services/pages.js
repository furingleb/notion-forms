export const fetchPage = async (id) => {
  const response = await fetch(`${process.env.BASE_URL}/pages/${id}`, {
    headers: {
      Authentication: `Bearer ${process.env.NOTION_API_TOKEN}`,
    },
  });
  const data = await response.json();
  return data;
};
