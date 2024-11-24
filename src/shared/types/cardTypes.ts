export interface cardTypes {
  id: string;
  title: string;
  description: string;
  username: string;
  comments: number;
  cardTime: string;
  type: "min" | "standart";
  classname?: string;
  likes?: number;
}
