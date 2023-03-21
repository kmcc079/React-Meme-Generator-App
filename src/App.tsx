import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from "./redux/store";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import routes from './config/routes';
import AuthCheck from "./auth/AuthCheck";

function App() {
  return (
      <BrowserRouter>
        <Navbar />
          <Provider store={store}>
          <Routes>
            { routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={
                  route.protected ? (
                  <AuthCheck>
                    <route.component />
                  </AuthCheck>
                  ) : (
                    <route.component />
                  )
                }
                />
            )) }
          </Routes>
          </Provider>
        <Footer />
      </BrowserRouter>
  )
}

export default App
