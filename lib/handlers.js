const fortune = require("./fortune");

exports.home = (req, res) => res.render("home");

exports.about = (req, res) =>
    res.render("about", { fortune: fortune.getFortune() });

exports.greeting = (req, res) =>
    res.render("greeting", {
        message: "Hello esteemed programmer!",
        style: req.query.style,
        userid: req.cookies.userid,
        username: req.session.username,
    });

exports.sectionTest = (req, res) => res.render("section-test");

exports.noLayout = (req, res) => res.render("no-layout", { layout: null });

exports.notFound = (req, res) => res.status(404).render("404");

/* eslint-disable no-unused-vars */
exports.serverError = (err, req, res, next) => res.status(500).render("500");
/* eslint-disable no-unused-vars */
