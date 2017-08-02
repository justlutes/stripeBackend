const configureStripe = require("stripe");

const STRIPE_SECRET_KEY =
  process.env.NODE_ENV === "production"
    ? process.env.STRIPE_LIVE
    : process.env.STRIPE_TEST;

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;
