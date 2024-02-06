import livro from "../models/Livros.js"
class LivroController {
  static async listarLivros(req, res) {
    try {
      const listaLivros = await livro.find({});
      res.status(200).json({ message: "Livros encontrados com sucesso", listaLivros});
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição` });
    }
  }

  static async obterLivro(req, res) {
    try {
      const livroEncontrado = await livro.findById(req.params.id);
      res.status(200).json({ message: "Livro encontrado com sucesso", livroEncontrado });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição` });
    }
  }

  static async criarLivro(req, res) {
    try {
      const novoLivro = await livro.create(req.body);
      res.status(201).json({ message: "Livro criado com sucesso", novoLivro });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição` });
    }
  }

  static async atualizarLivro(req, res) {
    try {
      const livroAtualizado = await livro.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).json({ message: "Livro atualizado com sucesso", livroAtualizado});
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição` });
    }
  }

  static async deletarLivro(req, res) {
    try {
      await livro.findByIdAndDelete(req.params.id);
      res.status(204).end({ message: "Livro excluído com sucesso" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição` });
    }
  }
};

export default LivroController
