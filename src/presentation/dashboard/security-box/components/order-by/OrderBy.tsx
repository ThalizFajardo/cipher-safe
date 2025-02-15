import styles from "./OrderBy.module.css";
import { CustomSelect } from "../../../../ui/select/CustomSelect";

export const OrderBy = () => {
  const handleSelect = (value: string) => {
    console.log(value);
  };

  return (
    <div className={styles.orderByContainer}>
      <span>Ordenar Por:</span>
      <CustomSelect
        onSelect={handleSelect}
        options={["Alfabéticos", "Fecha de Creación", "Cantidad de Registros"]}
      />
    </div>
  );
};
