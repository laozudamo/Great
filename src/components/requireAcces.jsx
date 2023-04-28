import Error401 from "@/views/error/401";

function RequireAcces({ children, roles }) {
  const role = localStorage.getItem("role");
  if (roles.includes(role)) {
    return children;
  } else {
    return <Error401></Error401>;
  }
}

export default RequireAcces;
