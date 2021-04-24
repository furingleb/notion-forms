import React from "react";

import { fetchPages } from "../services/pages";

const HomePage = () => {
  // const [isLoading, setIsLoading] = React.useState(false);
  // const [notes, setNotes] = React.useState("");

  return (
    <section>
      <p>Welcome to Notion Capture</p>
    </section>
  );
};

export default HomePage;

export async function getServerSideProps(context) {
  const data = await fetchPages();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      pages: data,
    }, // will be passed to the page component as props
  };
}
