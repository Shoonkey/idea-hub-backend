interface FindOptions {
  where: any,
  orderBy?: any,
  cursor?: any,
  take?: number,
  skip?: number
}

export interface PrismaDelegate<T> {
  create(args: { data: any }): Promise<T>;
  findUnique(args: FindOptions): Promise<T | null>;
  findMany(args: FindOptions): Promise<T[]>;
  update(args: { where: { id: string }; data: any }): Promise<T>;
  delete(args: FindOptions): Promise<any>;
}