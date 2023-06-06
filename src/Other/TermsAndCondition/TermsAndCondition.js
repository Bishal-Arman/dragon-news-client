import React from "react";
import { Link } from "react-router-dom";

const TermsAndCondition = () => {
  return (
    <div>
      <h3>Please read carefully the terms and conditions</h3>
      <Link to="/register">Go Back</Link>
    </div>
  );
};

export default TermsAndCondition;
