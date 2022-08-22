const express = require("express");
const NewsletterModel = require("../model/newsletter");

module.exports.Newsletter = async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ msg: "Please send all the Details" });
  }
  let telegram = "";
  let discord = "";
  if (req.body.telegram) {
    telegram = req.body.telegram;
  }
  if (req.body.discord) {
    discord = req.body.discord;
  }

  const data = new NewsletterModel({
    name,
    email,
    telegram,
    discord,
  });

  data
    .save()
    .then((response) => {
      // If everything goes as planed
      //use the retured user document for something
      return res
        .status(200)
        .json({ msg: "Details saved Successfully :)", id: response._id });
    })
    .catch((error) => {
      //When there are errors We handle them here
      console.log(error);
      res.status(404).json({ msg: "Bad Request" });
    });
};
