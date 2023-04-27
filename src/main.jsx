import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "normalize.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const AuthenticatedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       isAuthenticated ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
//       )
//     }
//   />
// );

// const AdminRoute = ({ component: Component, userRole, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       userRole === 'admin' ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to={{ pathname: '/', state: { from: props.location } }} />
//       )
//     }
//   />
// );
