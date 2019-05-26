import React, { Fragment } from "react";
import Head from "next/head";

import Breadcrumbs from "../src/components/organisms/Breadcrumbs";
import Content from "../src/components/atoms/Content";
import ResultsList from "../src/components/organisms/ResultsList";
import mockedLinks from "../src/__fixtures__/breadcrumbs.json";
import mockedList from "../src/__fixtures__/list.json";

function Page({ id }) {
  function _renderResultsOrProductDetail() {
    if (id)
      return (
        <Fragment>
          <Breadcrumbs links={mockedLinks} />
        </Fragment>
      );
    return (
      <Fragment>
        <Breadcrumbs links={mockedLinks} />
        <ResultsList list={mockedList} />
      </Fragment>
    );
  }
  return (
    <Content as="main">
      <Head>
        <title>Results</title>
      </Head>
      {_renderResultsOrProductDetail()}
    </Content>
  );
}

Page.getInitialProps = async ({ query }) => {
  const { id } = query;
  return {
    id
  };
};

export default Page;
