import { useState, useCallback } from "react";

const useLoading = (initialState) => {
  const [loading, setLoading] = useState(initialState);

  const toggleLoading = useCallback(() => setLoading((oldState) => !oldState));

  return [loading, toggleLoading];
};

export default useLoading;
