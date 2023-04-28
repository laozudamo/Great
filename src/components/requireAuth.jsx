import Login from "@/views/login/login.jsx";
function RequireAuth({ children }) {
  const token = localStorage.getItem("token");
  if (token) {
    return children;
  } else {
    return <Login></Login>;
  }
}

export default RequireAuth;
