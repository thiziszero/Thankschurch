// AppContext.tsx

import React, { createContext, useContext, useState, ReactNode } from "react";

interface AppContextType {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <AppContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

// 기존 사이드바 컨텍스트 호환성을 위한 함수
export const useSidebarContext = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useAppContext();
  return { isSidebarOpen, setIsSidebarOpen };
};

export default AppContext;
