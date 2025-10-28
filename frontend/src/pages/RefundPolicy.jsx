import React from "react";
import Title from "../components/Title";

const RefundPolicy = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-700">
      <Title text1="REFUND" text2="POLICY" />
      <p className="mt-6">
        If you are not satisfied with your purchase, you can request a return or refund 
        within 7 days of delivery. The product must be unused, in its original packaging, 
        and accompanied by proof of purchase.
      </p>
      <p className="mt-4">
        Refunds will be processed to the original payment method within 5-7 business days 
        after inspection.
      </p>
    </div>
  );
};

export default RefundPolicy;
