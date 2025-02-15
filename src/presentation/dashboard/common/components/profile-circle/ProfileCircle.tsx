import styled from "styled-components";

import { getInitials } from "../../../../utils";

interface Props {
  name: string;
}

const Circle = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--hover-primary-color);
  color: white;
  font-weight: bold;
  font-size: 2rem;
`;

export const ProfileCircle = ({ name }: Props) => {
  return <Circle>{getInitials(name)}</Circle>;
};
