import React from "react";
import Head from "next/head";

import Breadcrumbs from "../src/components/organisms/Breadcrumbs";
import Content from "../src/components/atoms/Content";

const mockedLinks = [
  {
    path: '/',
    label: 'Eletronica, Audio y Video',
  },
  {
    path: '/',
    label: 'IPod',
  },
  {
    path: '/',
    label: 'Reproductores',
  },
  {
    path: '/',
    label: 'IPod touch',
  },
  {
    label: '32 GB',
  },
]

function Page(props) {
  return (
    <Content>
      <Head>
        <title>Results</title>
      </Head>
      <Breadcrumbs links={mockedLinks} />
    </Content>
  );
}

// import { getRepositoriesAction } from "../../src/redux/actions/repositoriesActions";
// Page.getInitialProps = async ({ store, req }) => {
//   await store.dispatch(getRepositoriesAction());
// };

export default Page;
