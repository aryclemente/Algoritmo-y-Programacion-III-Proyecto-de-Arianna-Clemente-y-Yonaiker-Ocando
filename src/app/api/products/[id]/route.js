import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  //capturamos el id que pasamos por parametros
  const id = params.id;

  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase.from("Product").select().eq("id", id);

  if (!data) {
    return NextResponse.json({ data, error });
  }
  return NextResponse.json({ data, error });
};

export const DELETE = async (req, { params }) => {
  //capturamos el id que pasamos por parametros
  const id = params.id;

  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase.from("Product").delete().eq("id", id);

  if (!data) {
    return NextResponse.json({ data, error });
  }
  return NextResponse.json({ data, error });
};
