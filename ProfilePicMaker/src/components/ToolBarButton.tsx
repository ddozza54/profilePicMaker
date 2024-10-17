import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { toolBarCategoryAtom } from '../atoms';

interface ToolBarButton {
  name: string;
  category: string;
}

const ToolBarBtn = styled.button`
  width: 100%;
  height: 3rem;
  border: none;
  font-size: medium;
  cursor: pointer;
`;

export default function ToolBarButton({ name, category }: ToolBarButton) {
  const setToolBarCategory = useSetRecoilState(toolBarCategoryAtom);
  return <ToolBarBtn onClick={() => setToolBarCategory(category)}>{name}</ToolBarBtn>;
}
