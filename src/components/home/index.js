import React, { lazy, Fragment } from "react";
import { Helmet } from "react-helmet-async";
import { Container } from "./elements";
const Navbar = lazy(() => import("../Navbar"));
const Hero = lazy(() => import("./Hero"));

const Home = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Home - LOTR app</title>

        <meta name="description" content="" />
        <meta name="author" content="Joel" />
        <meta name="robots" content="all" />
        <meta name="googlebot" content="all" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="" />
        <meta property="og:image" content="" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
      </Helmet>
      <Container>
        <Navbar />
        <Hero />
      </Container>
    </Fragment>
  );
};

export default Home;
