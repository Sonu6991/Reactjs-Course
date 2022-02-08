import React, { createContext } from "react";

const ApiContext = createContext();

const ApiProvider = () => {
  const [isLoading, setIsLoading] = useState(second);
  const [feedBack, setFeedBack] = useState({});

  const value = { isLoading, setIsLoading, feedBack, setFeedBack };
  return (
    <ApiContext.Provider value={value}>{props.children}</ApiContext.Provider>
  );
};

export default ApiProvider;
