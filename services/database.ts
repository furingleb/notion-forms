import dotenv from "dotenv"
dotenv.config({ path: ".env" })

export const fetchDatabases = async (): Promise<any> => {
  const response = await fetch(`${process.env.BASE_URL}/database/`, {
    headers: {
      Authentication: `Bearer ${process.env.NOTION_API_TOKEN}`,
    },
  })
  const data = await response.json()
  return data
}

export const fetchDatabase = async (id: string): Promise<any> => {
  const response = await fetch(`${process.env.BASE_URL}/database/${id}`, {
    headers: {
      Authentication: `Bearer ${process.env.NOTION_API_TOKEN}`,
    },
  })
  const data = await response.json()
  return data
}
