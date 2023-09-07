import { useState, useEffect } from "react";

const useTabSwitch = (tabs, defaultTab) => {
  const [currentTab, setCurrentTab] = useState(defaultTab);

  // init
  useEffect(() => {
    setCurrentTab(defaultTab);
  }, [defaultTab]);

  const handleTabSwitch = (tab) => {
    setCurrentTab(tab);
  };

  return [currentTab, handleTabSwitch];
};

export default useTabSwitch;
