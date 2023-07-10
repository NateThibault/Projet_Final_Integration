import "./globals.css";
import { Inter } from "next/font/google";
import MyMenu from "@/components/molecules/my-menu/my-menu";
import MyFooter from "@/components/molecules/my-footer/my-footer";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fr" }];
}
export const metadata = {
  title: "TP3 Intégration",
  description:
    "Created by Nathan Thibault, Priscila Carvalho, Toufik Dellys, Marie-Pier Dubois, William Bitton",
};
interface LayoutParams {
  locale: string;
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: LayoutParams;
}) {
  let translations;
  try {
    translations = (await import(`../../languages/${params.locale}.json`))
      .default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang={params.locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={params.locale} messages={translations}>
          <MyMenu />
          <main
            style={{ width: "80%", margin: "0 auto", marginBottom: "80px" }}
          >
            {children}
          </main>
          <footer
            style={{ position: "fixed", left: 0, bottom: 0, width: "100%" }}
          >
            <MyFooter />
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
