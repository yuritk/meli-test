import React from "react";
import Head from "next/head";

function Page(props) {
  return (
    <div>
      <Head>
        <title>Search</title>
      </Head>
    </div>
  );
}

// import { getRepositoriesAction } from "../../src/redux/actions/repositoriesActions";
// Page.getInitialProps = async ({ store, req }) => {
//   await store.dispatch(getRepositoriesAction());
// };

export default Page;
