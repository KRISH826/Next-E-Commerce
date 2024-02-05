/** @format */

"use client";
import React, { ReactNode } from "react";
import { CartProvider as UscProvider } from "use-shopping-cart";

const CartProvider = ({ children }: { children: ReactNode }) => {
  return (
    <UscProvider
      mode='payment'
      cartMode='client-only'
      stripe={process.env.NEXT_STRIPE_KEY as string}
      successUrl='http://localhost:3000/success'
      cancelUrl='http://localhost:3000/error'
      currency='USD'
      billingAddressCollection={true}
      shouldPersist={true}
      language='en-US'>
      {children}
    </UscProvider>
  );
};

export default CartProvider;
