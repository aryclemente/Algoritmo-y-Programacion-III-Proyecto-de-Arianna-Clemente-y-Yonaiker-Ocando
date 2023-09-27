import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const fetch = "fetch(procces.env.NEXT_PUBLIC_SUPABASE_URL)";

export const GET = async (req, res) => {
  const supabase = createServerComponentClient({ cookies });

  const data = await supabase.from("Product").select();

  return NextResponse.json(data);
};

export const POST = async (req, res) => {
  // const supabase = createServerComponentClient({ cookies });

  // const { data, error } = await supabase
  //   .from("Product")
  //   .insert([{ id: 1, name: "Denmark" }])
  //   .select();

  // return NextResponse.json(data);

  const product = await req.json();
  console.log("product", product);
  const result = await fetch(procces.env.NEXT_PUBLIC_SUPABASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  const newProduct = await result.json();

  return NextResponse.json(data);
};
