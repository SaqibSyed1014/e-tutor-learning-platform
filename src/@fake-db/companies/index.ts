import {ReactElement} from "react";

export interface Company {
  id: string;
  name: string;
  logo: ReactElement;
  review: string
  reviewer: string
  designation: string
}

