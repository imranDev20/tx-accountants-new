import React, { useState } from "react";
import getStripe from "../utils/Stripe";
import LoadingSpinner from "./LoadingSpinner";

getStripe();

const Checkout = ({ priceId, isSubscription }) => {
  const [loading, setLoading] = useState(false);

  const redirectToCheckout = async (event) => {
    event.preventDefault();
    setLoading(true);

    const stripe = await getStripe();
    const { error } = await stripe?.redirectToCheckout({
      mode: `${isSubscription ? `subscription` : `payment`}`,
      lineItems: [{ price: String(priceId), quantity: 1 }],
      successUrl: `http://localhost:8000/post-stripe/`,
      cancelUrl: `http://localhost:8000/`,
    });

    if (error) {
      console.warn("Error:", error);
      setLoading(false);
    }
  };

  return (
    <button
      className={`bg-secondary px-5 py-2 flex items-center rounded-full transition-colors uppercase font-medium text-white disabled:pointer-events-none disabled:cursor-auto disabled:bg-secondary/60 border border-transparent hover:border-secondary hover:bg-white hover:text-secondary`}
      disabled={loading}
      onClick={redirectToCheckout}
    >
      Pay Now{" "}
      {loading && (
        <LoadingSpinner
          className={`w-5 h-5 ml-2 text-gray-200/50 animate-spin fill-white`}
        />
      )}
    </button>
  );
};

export default Checkout;
