export interface IHandlers {
  handleScroll?: EventListenerOrEventListenerObject;
}

export interface IState {
  headerIsActive?: boolean;
  setHeaderState?: (value: any) => void;
}

export interface IProps extends
  IHandlers,
  IState {}
