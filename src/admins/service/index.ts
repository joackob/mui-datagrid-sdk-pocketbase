import { pb } from "./pb";
import { AdminProps } from "../interfaces";
import { Admin } from "../interfaces";

export const postAdmin = async (data: AdminProps): Promise<Admin> => {
  const res = await pb.collection("admins").create(data);
  return {
    ...data,
    id: res.id,
  };
};

export const getAdmins = async (): Promise<Admin[]> => {
  const res = await pb.collection("admins").getFullList();
  const admins = res.map((admin) => ({
    id: admin.id,
    nombre: admin.nombre,
    apellido: admin.apellido,
    email: admin.email,
    avatar: `${pb.files.getUrl(admin, admin.avatar)}`,
  }));
  return admins;
};
