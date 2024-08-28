// import React from 'react';
// import './App.css';
// // import logo from './logo.svg';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Provider } from 'react-redux';

// import store from "./app/store";
// import HomePage from './pages/HomePage';
// import SignInPage from './pages/SignInPage';

// import URL_CONST from './constants/URL_const';

// function App() {
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.tsx</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //     ccccc
//     //   </header>
//     // </div>
//     <Provider store={store}>
//       <Router>
//         <Routes>
//           <Route path={`${URL_CONST.HOME}`} element={<HomePage />} />
//           <Route path={`${URL_CONST.SIGIN}`} element={<SignInPage />} />
//           {/* <Route path="/profile" element={<Profile />} /> */}
//         </Routes>
//         </Router>
//     </Provider>
//   );
// }

// export default App;

////////////////////////////////////
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { RootState } from './app/store';
import store from "./app/store";
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import ProtectedPage from './pages/ProtectedPage';
import ProfilePage from './pages/ProfilePage'
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFoundPage from './pages/NotFoundPage';

import URL_CONST from './constants/URL_const';


function App() {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  return (
    // <Provider store={store}>
    <div className="app">
      <ToastContainer />
      <Router>
        <Routes>
          <Route path={`${URL_CONST.HOME}`} element={<HomePage />} />
          <Route path={`${URL_CONST.SIGIN}`} element={<SignInPage />} />
          
          {/* Các route yêu cầu xác thực */}
          <Route element={<PrivateRoute />}>
            <Route path={`${URL_CONST.PROFILE}`} element={<ProfilePage />} />

          </Route>

          {/* Route cho trang 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
    // </Provider>
  );
}

export default App;

