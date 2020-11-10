export interface TodoItem {
  id: string;
  label: string;
  done: boolean;
  due: number | null;
}
