import React from "react";

const Loader = ({ loading, children }) => {
  if (loading) {
    return (
      <p style={{ textAlign: "center", padding: "16px" }}>Данные загружаются</p>
    );
  }
  return <>{children}</>;
};

export default Loader;
