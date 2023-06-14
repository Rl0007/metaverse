import React from "react";
import StripeCheckout from "react-stripe-checkout";

const PaymentForm = () => {
  const handleToken = (token) => {
    // You can send the token to your server for processing
    // Example: sendTokenToServer(token);
    console.log(token);
  };

  return (
    <StripeCheckout
      stripeKey="YOUR_PUBLIC_API_KEY"
      token={handleToken}
      name="Your Company"
      description="Payment for Services"
      amount={1000} // Amount in cents
      currency="USD"
      email="example@example.com"
      allowRememberMe={false}
    >
      <button>Pay Now</button>
    </StripeCheckout>
  );
};

export default PaymentForm;
