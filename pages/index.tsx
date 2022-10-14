import * as React from "react"

import { GetServerSideProps } from "next"

import { fetchDatabases } from "../services"

const HomePage: React.FC = () => {
  // const [isLoading, setIsLoading] = React.useState(false);
  // const [notes, setNotes] = React.useState("");

  return (
    <section>
      <p>Welcome to Notion Forms</p>
    </section>
  )
}

export default HomePage

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await fetchDatabases()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      pages: data,
    },
  }
}
