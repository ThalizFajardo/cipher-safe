import styled from "styled-components";

import { useSelector } from "react-redux";
import { ProfileCircle } from "../profile-circle/ProfileCircle";
import { RootState } from "../../../../store";

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const UserName = styled.h3`
  font-size: 1.5rem;
  color: var(--a5-surface-color);
`;

export const ProfileInfo = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <InfoContainer>
      <UserName>{user?.name}</UserName>
      <ProfileCircle name={user?.name || "NN"} />
    </InfoContainer>
  );
};
