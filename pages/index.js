import React from "react";
import Head from "next/head";

import Wrapper from "../src/components/Wrapper";

function Page(props) {
  return (
    <Wrapper>
      <Head>
        <title>Search</title>
      </Head>
    </Wrapper>
  );
}

// import { getRepositoriesAction } from "../../src/redux/actions/repositoriesActions";
// Page.getInitialProps = async ({ store, req }) => {
//   await store.dispatch(getRepositoriesAction());
// };

export default Page;
