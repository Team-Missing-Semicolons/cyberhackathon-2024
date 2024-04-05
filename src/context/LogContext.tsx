import {
  useContext,
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";

const apiUrl = "http://localhost:3000";

type Log = {
  id: number;
  data: unknown;
  type: string;
  timestamp: number;
  unitId: number;
};

type LogContextValue = {
  logs: Array<Log>;
};

const LogContext = createContext<LogContextValue | undefined>(undefined);

export function useLogs() {
  const context = useContext(LogContext);

  if (!context) {
    throw new Error("useLogs() can be used only inside <LogContextProvider>");
  }

  return context;
}

export const LogContextProvider = ({ children }: PropsWithChildren) => {
  const [logs, setLogs] = useState<Array<Log>>([]);

  useEffect(() => {
    const timeout = setInterval(async () => {
      const response = await fetch(`${apiUrl}/log`);
      const data = await response.json();
      setLogs(data);
    }, 1000 * 5);

    return () => clearTimeout(timeout);
  }, []);

  return <LogContext.Provider value={{ logs }}>{children}</LogContext.Provider>;
};
