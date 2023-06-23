import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import ErrorPage from "./error/page";
import LoginBtn from "./components/LoginBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  // 서버컴포넌트에서 사용가능
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="navbar">
          <div className='navbar-left'>
          <Link href="/">홈</Link>
          <Link href="/list">LIST</Link>
          <Link href="/write">작성페이지</Link>
          </div>
          <div className = 'navbar-right'>
            <LoginBtn login={session ? true : false} />
            {session && <p>{session.user.name}님 반갑습니다</p>}
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
