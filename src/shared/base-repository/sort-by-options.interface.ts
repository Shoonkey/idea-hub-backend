export type SortByOptions<TSortableProps = any> = {
  [P in keyof TSortableProps]: { order: 'asc' | 'desc' };
};
