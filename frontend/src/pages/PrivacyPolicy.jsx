import React from "react";
import Title from "../components/Title";

const PrivacyPolicy = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-700">
      <Title text1="PRIVACY" text2="POLICY" />
      <p className="mt-6">
        At Forever, we value your privacy. We collect only the information necessary 
        to process your orders and improve your shopping experience. We do not share 
        your personal data with third parties except to complete transactions or comply 
        with legal requirements.
      </p>
      <p className="mt-4">
        By using our website, you agree to the collection and use of information 
        in accordance with this policy.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
