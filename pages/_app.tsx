import React from "react";
import Head from "next/head";
import { NextComponentType, NextPageContext } from "next";

const App = ({
  Component,
}: {
  Component: NextComponentType<NextPageContext>;
}) => {
  return (
    <>
      <Head>
        <title>Profile List!</title>
      </Head>
      <Component />
    </>
  );
};

export default App;
