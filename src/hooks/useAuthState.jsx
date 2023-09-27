"use client";
import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useUser } from "@supabase/auth-helpers-react";

//analiza si hay un usuarioa aiutenticado, si no hay ninguno es estaodo 1 si hay uno es 2
const useAuthState = () => {
  const [state, setState] = useState(0);

  const supabase = createClientComponentClient();

  const user = useUser();

  const findUser = async () => {
    const data = await supabase.auth.getSession();

    console.log(data);

    setState(!data.data.user ? 1 : 2);
  };

  useEffect(() => {
    findUser();
  }, []);

  return state;
};

export default useAuthState;
