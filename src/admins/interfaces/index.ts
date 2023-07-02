export type AdminProps = {
  nombre: string;
  apellido: string;
  email: string;
  avatar: string;
};

export type Admin = AdminProps & {
  id: string;
};

export enum StatusStateAdmins {
  loading,
  offline,
  online,
  error,
}
