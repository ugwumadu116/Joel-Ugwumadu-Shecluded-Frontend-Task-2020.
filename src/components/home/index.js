import React, { lazy, Fragment} from "react";
import { Helmet } from "react-helmet-async";

import { Container } from "./elements";


const Home = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Enter title </title>

        <meta
          name="description"
          content=""
        />
        <meta name="author" content="Joel" />
        <meta name="robots" content="all" />
        <meta name="googlebot" content="all" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="" />
        <meta property="og:image" content="" />
        <meta property="og:title" content="" />
        <meta
          property="og:description"
          content=""
        />
      </Helmet>
      <Container>
        <h1> welcome</h1>
      </Container>
    </Fragment>
  );
};

export default Home;
