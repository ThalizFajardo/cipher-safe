import { ReactNode } from "react";
import { Footer } from "./common/components/footer/Footer";
import { Header } from "./common/components/header/Header";

interface Props {
  children: ReactNode;
}

export const DashboardLayout = ({ children }: Props) => {
  return (
    <main>
      <Header />
      <>{children}</>
      <Footer />
    </main>
  );
};
