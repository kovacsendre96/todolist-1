import { v4 as uuidv4 } from 'uuid';

export const DUMMY_TODOS = [
  {
    title: "Főzés",
    date: "2022.10.15",
    status: "success",
    id: uuidv4(),
  },
  {
    title: "Mosogatás",
    date: "2022.10.16.",
    status: "progress",
    id: uuidv4(),
  }
];
