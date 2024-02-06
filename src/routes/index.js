import express from "express";
import livro from "./LivrosRouters.js";

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send({ titulo: "Api de livros", version: "1.0.0" });
    })

    app.use(express.json(),livro);
    
};

export default routes;