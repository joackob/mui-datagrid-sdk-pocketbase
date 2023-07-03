import type { NextPage } from "next";
import { useAppDispatch } from "@/src/store/hooks";
import AdminsTable from "@/src/admins/AdminsTable";
import { useEffect } from "react";
import { set } from "@/src/admins/thunks";

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(set());
  });
  return <AdminsTable />;
};

export default Home;
