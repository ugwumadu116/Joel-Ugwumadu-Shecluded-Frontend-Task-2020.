import React, { useEffect, useState } from "react";
import InViewMonitor from "react-inview-monitor";
import { Container, PaginateWrapper } from "./elements";
import getCats from "./cats.action";
import Notification from "../notification";
import Loading from "../loading";
import { Helmet } from "react-helmet-async";
import { connect, useSelector } from "react-redux";
import { catBreeds } from "./constants/breeds";
import { retrieveMessage } from "../../utils/helpers";
import Modal from "react-animated-modal";
import Pagination from "react-js-pagination";
import ModalCard from "../card/ModalCard";
import CatCard from "../card";
import Navbar from "../Navbar";

const App = ({ getCats }) => {
  const [paginate, setPaginate] = useState({
    currentPage: 1,
    itemsCountPerPage: 8
  });
  const [showModal, setShowModal] = useState(false);
  const [catDetail, setCatDetail] = useState({
    url: "",
    breeds: [
      {
        name: "",
        temperament: "",
        life_span: "",
        dog_friendly: "",
        child_friendly: "",
        shedding_level: ""
      }
    ]
  });

  const handlePageChang = pageNumber => {
    setPaginate({ ...paginate, currentPage: pageNumber });
  };

  const openModal = catData => {
    setShowModal(true);
    setCatDetail(catData);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const { fetching, fetched, onError, error, resp } = useSelector(
    ({ cats }) => cats
  );
  const formattedError = onError ? retrieveMessage(error) : "";
  useEffect(() => {
    catBreeds.forEach(item => {
      getCats(item);
    });
  }, []);
  const lastItemIndex = paginate.currentPage * paginate.itemsCountPerPage;
  const firstItemIndex = lastItemIndex - paginate.itemsCountPerPage;
  const currentCats = resp.slice(firstItemIndex, lastItemIndex);
  return (
    <>
      <Modal visible={showModal} closemodal={closeModal} type="zoomIn">
        <ModalCard catDetail={catDetail} />
      </Modal>
      {fetching && <Loading />}
      {onError && (
        <div>
          <Notification errormessage={formattedError} />
        </div>
      )}
      {fetched && !fetching && (
        <>
          <Helmet>
            <title>Cat list</title>
            <meta
              name="description"
              content="This page display a list of cat images and their description"
            />
            <meta property="og:site_name" content="LOTR" />
            <meta property="og:image" content="" />
          </Helmet>
          <Navbar />

          <Container>
            {currentCats.map((cat, i) => (
              <InViewMonitor
                key={`${i}${cat.id}`}
                classNameNotInView="vis-hidden"
                classNameInView={`animated fadeInUp`}
              >
                <CatCard cat={cat} openModal={openModal} />
              </InViewMonitor>
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
  getCats
};

export default connect(null, mapDispatchToProps)(App);
