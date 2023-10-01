import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase.from("Product").select();

  return NextResponse.json({ data, error });
};

export const POST = async (req, res) => {
  const supabase = createServerComponentClient({ cookies });

  const product = await req.json();

  const { data, error } = await supabase
    .from("Product")
    .insert([product])
    .select();

  return NextResponse.json({ data, error });
};
