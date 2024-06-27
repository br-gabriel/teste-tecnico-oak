import { Inter } from "next/font/google";
import Header from "@/components/Header";
import FormPageContainer from "@/components/FormPageContainer";

const inter = Inter({ subsets: ["latin"] });

export default function Cadastro(){
    return(
        <main className={`bg-blue-50 min-h-screen flex flex-col items-center ${inter.className}`}>
            <Header />
            <FormPageContainer />
        </main>
    )
}