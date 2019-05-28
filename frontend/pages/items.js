import React, { Fragment } from "react";
import Head from "next/head";

import Breadcrumbs from "../src/components/organisms/Breadcrumbs";
import Content from "../src/components/atoms/Content";
import ResultsList from "../src/components/organisms/ResultsList";
import mockedList from "../src/__fixtures__/list.json";
import mockedProduct from "../src/__fixtures__/product.json";
import ProductDetails from "../src/components/organisms/ProductDetails";
import Product from "../src/Store/entities/Product";
import Author from "../src/Store/entities/Author";

const author = new Author(mockedProduct.author)
const product = new Product(mockedProduct.item);
const list = mockedList.items.map(product => new Product(product));
const links = mockedList.categories.map(category => ({
  path: category,
  label: category
}));

function Page({ id }) {
  function _renderResultsOrProductDetails() {
    if (id)
      return (
        <Fragment>
          <Breadcrumbs links={links} />
          <ProductDetails {...product} />
        </Fragment>
      );
    return (
      <Fragment>
        <Breadcrumbs links={links} />
        <ResultsList list={list} />
      </Fragment>
    );
  }
  return (
    <Content as="main">
      <Head>
        <title>Results</title>
      </Head>
      {_renderResultsOrProductDetails()}
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
