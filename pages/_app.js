import PropTypes from "prop-types";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Head from "next/head";
import wrapper from "../store/configureStore";
import withReduxSaga from 'next-redux-saga';

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <title>트위터</title>
      </Head>
      <Component />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(withReduxSaga(App));
