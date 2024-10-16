import styled from 'styled-components';

interface ToolBarButton {
  name: string;
  category: string;
  setcategoryFn: (category: string) => void;
}

const ToolBarBtn = styled.button`
  width: 100%;
  height: 3rem;
  border: none;
  font-size: medium;
  cursor: pointer;
`;

export default function ToolBarButton({ name, category, setcategoryFn }: ToolBarButton) {
  return <ToolBarBtn onClick={() => setcategoryFn(category)}>{name}</ToolBarBtn>;
}
