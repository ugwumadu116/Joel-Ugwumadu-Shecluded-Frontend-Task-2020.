import React, { useEffect, useState } from "react";
import { Container, PaginateWrapper } from "../cats/elements";
import { LOTRCArd } from "./elements";
import getLOTR from "./lotr.action";
import Notification from "../notification";
import Loading from "../loading";
import { Helmet } from "react-helmet-async";
import { connect, useSelector } from "react-redux";
import { retrieveMessage } from "../../utils/helpers";
import Pagination from "react-js-pagination";

const App = ({ getLOTR }) => {
  const [paginate, setPaginate] = useState({
    currentPage: 1,
    itemsCountPerPage: 8
  });

  const handlePageChang = pageNumber => {
    setPaginate({
      ...paginate,
      currentPage: pageNumber
    });
  };

  const { fetching, fetched, onError, error, resp } = useSelector(
    ({ lotr }) => lotr
  );
  const formattedError = onError ? retrieveMessage(error) : "";
  useEffect(() => {
    getLOTR();
  }, []);

  const lastItemIndex = paginate.currentPage * paginate.itemsCountPerPage;
  const firstItemIndex = lastItemIndex - paginate.itemsCountPerPage;
  const currentCats = resp.slice(firstItemIndex, lastItemIndex);
  return (
    <>
      {fetching && <Loading />}
      {onError && (
        <div>
          <Notification errormessage={formattedError} />
        </div>
      )}
      {fetched && !fetching && (
        <>
          <Helmet>
            <title>LOTR list</title>
            <meta
              name="description"
              content="This page displays Lord Of The Ring characters and description about them."
            />
            <meta property="og:site_name" content="LOTR" />
            <meta property="og:image" content="" />
          </Helmet>

          <Container>
            {currentCats.map(item => (
              <LOTRCArd key={item._id}>
                <div className="topic-wrapper">
                  <h1 className="topic">{item.name}</h1>
                  <h1 className="topic">{item.gender}</h1>
                </div>
                <div className="d-flex">
                  <h1 className="key">Birth</h1>
                  <p className="value">{item.birth}</p>
                </div>
                <div className="d-flex">
                  <h1 className="key">Spouse</h1>
                  <p className="value">{item.spouse} </p>
                </div>
                <div className="d-flex">
                  <h1 className="key">Death</h1>
                  <p className="value">{item.death} </p>
                </div>
              </LOTRCArd>
            ))}
          </Container>
          <PaginateWrapper>
            <Pagination
              activePage={paginate.currentPage}
              itemsCountPerPage={paginate.itemsCountPerPage}
              totalItemsCount={resp.length}
              pageRangeDisplayed={5}
              onChange={handlePageChang}
            />
          </PaginateWrapper>
        </>
      )}
    </>
  );
};

const mapDispatchToProps = {
  getLOTR
};

export default connect(null, mapDispatchToProps)(App);
