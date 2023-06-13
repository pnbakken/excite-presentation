import Header from "@/components/header";
import "/style/style.scss";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import { ClientComponent } from "@/components/utility/client-component";
import OverflowWrapper from "@/components/utility/overflow-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Excite Tech AS Presentation",
  description: "Excite Tech AS Presentation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientComponent>
          <Header />
          <OverflowWrapper>{children}</OverflowWrapper>
          <Footer />
        </ClientComponent>
      </body>
    </html>
  );
}
