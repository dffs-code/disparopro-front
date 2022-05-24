import GlobalStyles from '../styles/global';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <ToastContainer
          position="top-center"
          autoClose={3000}
          // theme='dark'
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          pauseOnHover
        />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
