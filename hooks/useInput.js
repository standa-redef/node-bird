import { useState, useCallback } from "react";

// 커스텀 훅 예시
export default (initialValue = null) => {
  const [value, setValue] = useState(initialValue);

  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, handler];
};
