function RequireAcces({ children, roles }) {
  const role = localStorage.getItem("role");
  if (roles.includes(role)) {
    return children;
  } else {
    return <Navigate to="/error401" />;
  }
}

export default RequireAcces;
