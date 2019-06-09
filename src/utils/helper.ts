export const scrollTo = (ref: any): void => {
  try {
    window.scrollTo({
      top: typeof ref === 'number'
        ? ref
        : ref.current
          ? ref.current.offsetTop
          : ref.offsetTop,
      behavior: 'smooth',
    });
  } catch {
    // window.scrollTo is not supported
  }
};
