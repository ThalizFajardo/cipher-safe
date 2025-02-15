import styled from "styled-components";

const SwitchContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`;

interface SwitchButtonProps {
  $active: boolean;
}

const SwitchButton = styled.div<SwitchButtonProps>`
  padding: 0.8rem 1.6rem;
  border-radius: 2rem;
  background-color: ${({ $active }) =>
    $active ? "var(--a2-primary-color)" : "#ccc"};
  color: var(--pressed-primary-color);
  font-weight: bold;
  transition: background-color 0.3s;
  font-size: 1.5rem;
`;

interface Props {
  activeTab: "todos" | "favoritos";
  onToggle: (tab: "todos" | "favoritos") => void;
}

export const FilterBy = ({ activeTab, onToggle }: Props) => {
  return (
    <SwitchContainer>
      <SwitchButton
        $active={activeTab === "todos"}
        onClick={() => onToggle("todos")}
      >
        Todos
      </SwitchButton>
      <SwitchButton
        $active={activeTab === "favoritos"}
        onClick={() => onToggle("favoritos")}
      >
        Favoritos
      </SwitchButton>
    </SwitchContainer>
  );
};
