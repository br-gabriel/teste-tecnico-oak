import Link from "next/link";
import Image from "next/image";
import LogoImage from "../../public/images/logo.jpeg";
import { useRouter } from "next/router";

export default function Header() {
    const router = useRouter();
    const { pathname } = router;
  
    return (
    <header className="w-full max-w-screen bg-white p-2 flex justify-center shadow-md">
      <div className="max-w-7xl w-[90%] flex justify-between items-center">
        <Image src={LogoImage} width={90} alt="logo da oak tecnologia" />

        {pathname == "/" ?
        <Link href="/cadastro" className="text-base hover:text-gray-400 transition duration-200 mr-3">
            Cadastrar produto
        </Link>
        :
        <Link href="/" className="text-base hover:text-gray-400 transition duration-200 mr-3">
            Voltar
        </Link>
        }
      </div>
    </header>
  );
}
