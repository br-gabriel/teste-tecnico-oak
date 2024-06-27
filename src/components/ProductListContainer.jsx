import { useContext } from "react";
import { CadProdutoContext } from "@/contexts/cadProdutoContext";
import ListItem from "./ListItem";

export default function ProductListContainer({handleOpenModal}) {
  const { products } = useContext(CadProdutoContext)

  const sortedProducts = [...products].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  
  return (
    <div className="bg-white w-[90%] md:max-w-7xl mt-10 mb-5 rounded p-8 shadow-md">
      <div className="flex items-center">
        <h1 className="font-bold text-xl">Produtos Cadastrados</h1>
        <button onClick={handleOpenModal} className="bg-green-500 hover:bg-green-600 transition duration-200 rounded px-2 py-1 text-white text-sm ml-5">
          Cadastrar produto
        </button>
      </div>

      <div className="hidden md:flex items-center justify-between font-semibold mt-6 border-b-2">
        <h2 className="min-w-[70%] text-left">Nome</h2>
        <h2 className="text-center w-full">Valor</h2>
        <h2 className="text-center w-full">Disponível</h2>
      </div>

      <ul>  
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product, index) => (
            <li key={index}>
              <ListItem
                name={product.name}
                description={product.description}
                price={product.price}
                available={product.available}
              />
            </li>
          ))
        ) : (
          <p className="text-slate-500 bg-gray-100 rounded mt-2 text-center p-10">Nenhum produto cadastrado.</p>
        )}
      </ul>
    </div>
  );
}
