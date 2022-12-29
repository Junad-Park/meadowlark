const express = require("express");
const expressHandlebars = require("express-handlebars");
const app = express();
const port = process.env.PORT || 3000;

app.engine(
    "handlebars",
    expressHandlebars({
        defaultLayout: "main",
    })
);

app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));

const fortunes = [
    "Conquer your fears or they will conquer you.",
    "Rivers need sprins.",
    "Do not fear what you don't know",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
];

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/about", (req, res) => {
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    res.render("about", { fortune: randomFortune });
});

// custom 404 page
app.use((req, res) => {
    res.status(404);
    req.render("404");
});
// custom 500 page
app.use((req, res) => {
    console.error(err.message);
    res.status(500);
    req.render("500");
});

app.listen(port, () =>
    console.log(
        `Express started on https://localhost:${port}; ` +
            `press Ctrl-C to terminate.`
    )
);
