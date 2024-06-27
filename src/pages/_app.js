import CadProdutoContextProvider from "@/contexts/cadProdutoContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <CadProdutoContextProvider>
      <Component {...pageProps} />
    </CadProdutoContextProvider>
  );
}
