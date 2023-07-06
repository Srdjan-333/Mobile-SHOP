const express = require('express');
const router = express.Router();
const ErrorHandler = require('../utils/ErrorHandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const Order = require('../model/order');

// Kreiranje nove porudžbine
router.post(
  '/create-order',
  catchAsyncErrors(async (req, res, next) => {
    try {
      console.log('Primljen zahtev na /api/v2/orders/create-order');
      const { cart, shippingAddress, totalPrice, paymentInfo } = req.body;

      // Grupisanje stavki iz korpe po shopId
      const shopItemsMap = new Map();

      for (const item of cart) {
        const shopId = item.shopId;
        if (!shopItemsMap.has(shopId)) {
          shopItemsMap.set(shopId, []);
        }
        shopItemsMap.get(shopId).push(item);
      }

      // Kreiranje porudžbine za svaku prodavnicu
      const orders = [];

      for (const [shopId, items] of shopItemsMap) {
        const order = await Order.create({
          cart: items,
          shippingAddress,
          totalPrice,
          paymentInfo,
        });

        orders.push(order);
      }

      res.status(201).json({
        success: true,
        orders,
      });
    } catch (error) {
      console.log('Error:', error);
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

module.exports = router;
