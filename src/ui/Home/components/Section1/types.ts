import { UIEvent, Ref } from 'react';

export interface IOutterProps {
  onScroll?: (e: UIEvent<Element>) => void;
  sectionRef: Ref<HTMLDivElement>;
}

export interface IProps extends IOutterProps {}
