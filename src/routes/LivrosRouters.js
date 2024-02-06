import express from "express";
import LivroController from "../controllers/LivroController.js";

const routes = express.Router();

routes.get("/livros", LivroController.listarLivros);
routes.post("/livros", LivroController.criarLivro);
routes.put("/livros/:id", LivroController.atualizarLivro);
routes.delete("/livros/:id", LivroController.deletarLivro);
routes.get("/livros/:id", LivroController.obterLivro);

export default routes;


