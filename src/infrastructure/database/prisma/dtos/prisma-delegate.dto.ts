interface FindByIdOptions {
  where: { id: string };
}

export interface PrismaDelegate<T> {
  create(args: { data: any }): Promise<T>;
  findUnique(args: FindByIdOptions): Promise<T | null>;
  update(args: FindByIdOptions & { data: any }): Promise<T>;
  delete(args: FindByIdOptions): Promise<any>;
}
