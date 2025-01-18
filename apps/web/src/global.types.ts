import { ReactNode } from "react";

interface ISideBarSchema {
  id: string;
  code: string;
  name: string;
  icon: ReactNode;
  path: String;
}

export type { ISideBarSchema };
