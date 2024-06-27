import { createContext, useEffect, useState } from "react";

export const CadProdutoContext = createContext();

export default function CadProdutoContextProvider({children}){
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [available, setAvailable] = useState("Não");
    const [products, setProducts] = useState([]);
    
    function cadastrarProduto(product) {
        const newProducts = [...products, product];
        setProducts(newProducts);
        localStorage.setItem('products', JSON.stringify(newProducts));
    };

    async function getProducts(){
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        setProducts(storedProducts);
    }

    useEffect(() => {
        getProducts();
    }, []);

    return(
        <CadProdutoContext.Provider value={{
            products, 
            cadastrarProduto, 
            name, 
            setName,
            price, 
            setPrice,
            description, 
            setDescription,
            available, 
            setAvailable,
            }}>
            {children}
        </CadProdutoContext.Provider>
    )
}