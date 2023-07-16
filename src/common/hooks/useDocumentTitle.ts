import { useRef, useEffect } from "react";

function useDocumentTitle(title: string, prevailOnUnmount = false) {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    const trailingTitle = "Stocks";
    document.title = `${title} | ${trailingTitle}`;
  }, [title]);

  useEffect(
    () => () => {
      if (!prevailOnUnmount) {
        document.title = defaultTitle.current;
      }
    },
    []
  );
}

export default useDocumentTitle;
