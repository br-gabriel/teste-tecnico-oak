import { useContext } from "react";
import { CadProdutoContext } from "@/contexts/cadProdutoContext";
import ReactModal from "react-modal";

export default function ModalForm({ isModalOpen, onRequestClose }) {
  const {
    name,
    setName,
    price,
    setPrice,
    description,
    setDescription,
    available,
    setAvailable,
    cadastrarProduto,
  } = useContext(CadProdutoContext);

  function handleSubmit(e) {
    e.preventDefault();

    const product = {
      name,
      price,
      description,
      available,
    };

    cadastrarProduto(product);

    setName("");
    setPrice("");
    setDescription("");
    setAvailable("Não");
    onRequestClose();
  }

  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          backgroundColor: "#00000060",
        },
        content: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "90%",
          maxWidth: "600px",
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
      }}
    >
      <div className="w-full flex items-center justify-between">
        <h2 className="font-bold text-2xl">Cadastrar Produto</h2>
        <button
          type="button"
          onClick={onRequestClose}
          className="bg-slate-100 border border-slate-300 rounded p-2"
        >
          fechar
        </button>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col mt-4">
        <label for="nome" className="font-semibold">
          Nome do produto:
        </label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-slate-100 border border-slate-300 rounded p-2 mb-2"
          required
        />

        <label for="preco" className="font-semibold">
          Preço:
        </label>
        <input
          type="number"
          id="preco"
          name="preco"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="bg-slate-100 border border-slate-300 rounded p-2 mb-2"
          required
        />

        <label for="descricao" className="font-semibold">
          Descrição:
        </label>
        <textarea
          name="descricao"
          id="descricao"
          rows={5}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="bg-slate-100 border border-slate-300 rounded p-2 mb-2 resize-none"
        ></textarea>

        <label for="disponivel" className="font-semibold">
          Disponível?
        </label>
        <div class="mb-4 flex gap-4">
          <label>
            <input
              type="radio"
              id="disponivel-sim"
              name="disponivel"
              value="Sim"
              onChange={(e) => setAvailable(e.target.value)}
              required
            />{" "}
            Sim
          </label>
          <label>
            <input
              type="radio"
              id="disponivel-nao"
              name="disponivel"
              value="Não"
              onChange={(e) => setAvailable(e.target.value)}
              required
            />{" "}
            Não
          </label>
        </div>

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 transition duration-200 rounded px-3 py-2 text-white text-md"
        >
          Cadastrar produto
        </button>
      </form>
    </ReactModal>
  );
}
