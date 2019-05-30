import React, { Fragment } from "react";
import Head from "next/head";

import Breadcrumbs from "../src/components/organisms/Breadcrumbs";
import Content from "../src/components/atoms/Content";
import ResultsList from "../src/components/organisms/ResultsList";
import mockedList from "../src/__fixtures__/list.json";
import mockedProduct from "../src/__fixtures__/product.json";
import ProductDetails from "../src/components/organisms/ProductDetails";
import Product from "../src/resources/Store/entities/Product";
import Author from "../src/resources/Store/entities/Author";
import { searchResultsAction } from "../src/redux/actions/resultsActions";

const author = new Author(mockedProduct.author)
const product = new Product(mockedProduct.item);
const list = mockedList.items.map(product => new Product(product));
const links = mockedList.categories.map(category => ({
  path: category,
  label: category
}));

function Page({ id, search, results }) {
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
        <Breadcrumbs links={results.categories} />
        <ResultsList list={results.items} />
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

Page.getInitialProps = async ({ store, query }) => {
  const { id, search } = query;

  await store.dispatch(searchResultsAction(search))

  const { results } = store.getState();

  return {
    id,
    search,
    results
  };
};

export default Page;
