import Graph from "graphology";
import { PlainObject } from "sigma/types";

export type ModelTypes = "user" | "code" | "post" | "annotation" | "topic";

export type TableColumn = {
  property: string;
  label: string;
  type?: "string" | "boolean" | "number" | "date" | "url";
  generateFromNode?: (graph: Graph, node: string) => any;
};

export type ModelType = {
  id: ModelTypes;
  name: string;
  color: string;
  icon: string;
  label_field: string;
  tableColumns: TableColumn[];
};

export type ConfigType = {
  networkStyle: {
    scopeColor: string;
    selectColor: string;
  };
  graphql: { http: string };
  models: { [key: string]: ModelType };
};

// TODO: Scope should be ModelTypes: string[] but I don't know how to go around TypeScript constraint
export type Scope = {
  [key: string]: string[];
};
