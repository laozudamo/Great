import Signin from "@/views/Sign/Signin.jsx";
function RequireAuth({ children }) {
  const token = localStorage.getItem("token");
  if (token) {
    return children;
  } else {
    return <Signin></Signin>;
  }
}

export default RequireAuth;
