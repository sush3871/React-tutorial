import { useRef, useEffect } from 'react';

const FocusInput = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} placeholder="I will be auto-focused" />;
};

export default FocusInput