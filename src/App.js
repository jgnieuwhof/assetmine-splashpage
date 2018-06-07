import React from "react";
import { Document, Page as PageBase } from "react-pdf";
import styled from "react-emotion";
import { compose, withState } from "recompose";

import { releaseUrl } from "./common/env";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import WindowDimensions from "./components/WindowDimensions";
import { Column, Img, P } from "./uikit/Core";

import industryLeaders from "./img/industryLeaders.jpg";

const Container = styled(Column)`
  * {
    box-sizing: border-box;
  }
  ${({ theme }) => theme.backgroundLight};
`;

const StyledPageBase = styled(PageBase)`
  canvas {
    margin: 0 auto;
  }
`;
const Page = ({ width, ...x }) => (
  <StyledPageBase width={width > 1000 ? 1000 : width} {...x} />
);

const PdfViewer = compose(withState("width", "setWidth", 0))(
  ({ width, setWidth, documentRef = React.createRef() }) => (
    <Modal isOpen={true}>
      <WindowDimensions
        onChange={({ width, height }) => {
          setWidth((documentRef.current || {}).clientWidth);
          console.log({ width, height });
        }}
        render={() => (
          <div ref={documentRef}>
            <Document file={releaseUrl}>
              <Page pageNumber={1} {...{ width }} />
              <Page pageNumber={2} {...{ width }} />
            </Document>
          </div>
        )}
      />
    </Modal>
  )
);

const App = () => (
  <Container>
    <Header />
    <Column>
      <Img alt="industry leaders" src={industryLeaders} responsive />
    </Column>
    <Column contained pt={5} pb={5}>
      <P>
        Whether it is for you, for your company, for your clients, for the
        creditors of insolvent companies, or for governments, at AssetMine, our
        goal is to help you reclaim your unclaimed property.
      </P>
      <P>
        It is estimated that federal, provincial, and state governments around
        the world are holding more than $100 billion in unclaimed money and
        other property that has accumulated over many years.
      </P>
      <P>
        Our mission is to see those funds reconnected to the legal or beneficial
        owners whether they be people, companies or governments.
      </P>
    </Column>
    <Footer />
    <PdfViewer />
  </Container>
);

export default App;
