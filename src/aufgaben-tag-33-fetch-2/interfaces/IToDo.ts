export interface IToDo {
  map(arg0: (todos: IToDo) => void): unknown;
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
