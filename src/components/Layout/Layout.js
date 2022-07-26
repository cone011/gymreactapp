import { Fragment } from "react";
import Header from "../UI/Header";
import Footer from "../UI/Footer";

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
