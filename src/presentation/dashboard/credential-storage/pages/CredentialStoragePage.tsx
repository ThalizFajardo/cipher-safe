import { useNavigate } from "react-router-dom";

const CredentialStoragePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)}>devolver</button>
    </div>
  );
};

export default CredentialStoragePage;
