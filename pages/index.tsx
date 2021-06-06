import React, { FC } from "react";
import { GetServerSideProps } from "next";

import { fetchDatabases } from "../services";

const HomePage: FC = () => {
  // const [isLoading, setIsLoading] = React.useState(false);
  // const [notes, setNotes] = React.useState("");

  return (
    <section>
      <p>Welcome to Notion Capture</p>
    </section>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await fetchDatabases();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      pages: data,
    },
  };
};
