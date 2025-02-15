import styles from "./CardList.module.css";
import { Button } from "../../../../ui";
import { Card, IconCard, StarBtn } from "../card/Card";
import { useGetSecurityBox } from "../../hooks/useGetSecurityBox";
import { useNavigate } from "react-router-dom";

export const CardList = () => {
  const { data: securityBoxes, isLoading, error } = useGetSecurityBox({});
  const navigate = useNavigate();

  if (isLoading) return <h2>Loading....</h2>;
  if (error) return <p>Error al cargar los datos</p>;

  return (
    <div className={styles.container}>
      {securityBoxes?.map((securityBox) => (
        <Card key={securityBox.id}>
          <StarBtn />
          <IconCard text={securityBox.name} />
          <Button size="small" onClick={() => {}} type="primary">
            Entrar
          </Button>
        </Card>
      ))}
      <button onClick={() => navigate("credentail-storage")}>
        ir a pagina
      </button>
    </div>
  );
};
