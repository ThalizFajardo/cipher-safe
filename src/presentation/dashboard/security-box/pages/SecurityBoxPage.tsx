import styles from "./SecurityBoxPage.module.css";

import { DashboardLayout } from "../../DashboardLayout";
import { OrderBy } from "../components/order-by/OrderBy";
import { FilterBy } from "../components/filter-by/FilterBy";
import { useState } from "react";
import { CardList } from "../components/card-list/CardList";

const SecurityBoxPage = () => {
  const [activeTab, setActiveTab] = useState<"todos" | "favoritos">("todos");

  const handleToggle = (tab: "todos" | "favoritos") => {
    setActiveTab(tab);
  };

  return (
    <DashboardLayout>
      <section className={styles.securityBoxContainer}>
        <section className={styles.containerFilters}>
          <OrderBy />
          <FilterBy activeTab={activeTab} onToggle={handleToggle} />
        </section>
        <CardList />
      </section>
    </DashboardLayout>
  );
};

export default SecurityBoxPage;
