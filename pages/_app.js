import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../komponenten/Layout';
import '../styles/custom.sass';
import store from '../redux/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
          <Component {...pageProps} />
      </Layout> 
    </Provider>
  )
}

export default MyApp
