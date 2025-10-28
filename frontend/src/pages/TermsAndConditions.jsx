import React from "react";
import Title from "../components/Title";

const TermsAndConditions = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-700">
      <Title text1="TERMS" text2="& CONDITIONS" />
      <p className="mt-6">
        Welcome to Forever. By accessing or using our website, you agree to comply 
        with our terms and conditions. All purchases made are subject to product 
        availability and our return/refund policy.
      </p>
      <p className="mt-4">
        We reserve the right to update or modify these terms at any time without prior notice.
      </p>
    </div>
  );
};

export default TermsAndConditions;
