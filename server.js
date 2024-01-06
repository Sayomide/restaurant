// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.

const express = require('express');
const app = express();
const stripe = require('stripe')('sk_test_51OScz1FDiGCp6miEnWUQfp7d0Jmd5phX3s2aQqi3Q1Ufbf0PHRWY7CbGemcgn5FUMpgCEpmoRTmWiJv2FQMIQrnx00vEP6MgQW')

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:4242/success',
    cancel_url: 'http://localhost:4242/cancel',
  });

  res.redirect(303, session.url);
});

// app.listen(4242, () => console.log(`Listening on port ${4242}!`));


