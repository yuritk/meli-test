import React from "react";
import Head from "next/head";

import Breadcrumbs from "../src/components/organisms/Breadcrumbs";
import Content from "../src/components/atoms/Content";
import ResultsList from "../src/components/organisms/ResultsList";
import mockedLinks from '../src/__fixtures__/breadcrumbs.json';
import mockedList from '../src/__fixtures__/list.json'

function Page(props) {
  return (
    <Content as="main">
      <Head>
        <title>Results</title>
      </Head>
      <Breadcrumbs links={mockedLinks} />
      <ResultsList list={mockedList} />
    </Content>
  );
}

// import { getRepositoriesAction } from "../../src/redux/actions/repositoriesActions";
// Page.getInitialProps = async ({ store, req }) => {
//   await store.dispatch(getRepositoriesAction());
// };

export default Page;
