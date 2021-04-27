type LogLevel = "error" | "warning" | "info" | "debug" | "off";

interface ConfigLog {
  console_level: LogLevel;
  file_level: LogLevel;
  file_maxsize: string;
  file_retention: string;
  file_path: string;
}

interface ConfigNeo4j {
  url: string;
  login: string;
  password: string;
  options?: { [key: string]: string | boolean | number };
}

export interface Config {
  port: number;
  error_with_stack: boolean;
  logs: ConfigLog;
  neo4j: ConfigNeo4j;
}

export const config: Config = {
  port: process.env.BACKEND_PORT ? Number(process.env.BACKEND_PORT) : 4000,
  error_with_stack: process.env.ERROR_WITH_STACK ? true : false,
  logs: {
    console_level: process.env.LOG_CONSOLE_LEVEL || "info",
    file_level: process.env.LOG_FILE_LEVEL || "error",
    file_maxsize: "200m",
    file_retention: "7d",
    file_path: "./",
  },
  neo4j: {
    url: process.env.NEO4J_URL || "bolt://localhost:7687",
    login: process.env.NEO4J_LOGIN || "neo4j",
    password: process.env.NEO4J_PASSWORD || "admin",
  },
};
