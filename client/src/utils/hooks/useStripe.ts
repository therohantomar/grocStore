import { loadStripe } from "@stripe/stripe-js";


type StripeInfo = {
  quantity: number;
  priceId: string;
}[];

export const useStripe = (info: StripeInfo) => {
  const lineItems = info.map((element) => ({
    quantity: element.quantity,
    price: element.priceId,
  }));

  const handlePayment = async () => {
    const stripe = await loadStripe(
      import.meta.env.VITE_REACT_APP_PUBLISHABLE_KEY as string
    );

    if (!stripe) {
      throw new Error("Stripe is not loaded");
    }

    try {
      const { error } = await stripe.redirectToCheckout({
        lineItems,
        mode: "payment",
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/cancel`,
        billingAddressCollection:"required"
      });

      if (error) {
        console.log("Payment Failed", error);
      }
    } catch (error) {
      console.error("Error loading Stripe:", error);
    }
  };

  return handlePayment;
};
