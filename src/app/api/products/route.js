import { NextResponse } from "next/server";
import { query } from "../../../database/conection";
// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";

export const GET = async (req, res) => {
  try {
    const { rows } = await query(
      'select p.*, json_agg(json_build_object(\'id\', c.id, \'name\', c.name)) as "Category" from "Product" p  left join "product_categories" pc on pc.product_id = p.id left join "Category" c on pc.category_id = c.id group by p.id'
    );

    console.log("rows", rows);

    if (!rows || rows.length === 0) {
      return NextResponse.json({
        data: null,
        error: { message: "Product not found" },
      });
    }

    return NextResponse.json({ data: rows, error: null });
  } catch (error) {
    console.error("Error executing query:", error);
    return NextResponse.json({
      data: null,
      error: { message: "Internal server error" },
    });
  }

  // const supabase = createServerComponentClient({ cookies });

  // const { data, error } = await supabase
  //   .from("Product")
  //   .select(
  //     `id, strongId, name, price, image, stock, discount, Category(id, name)`
  //   );

  // return NextResponse.json({ data, error });
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
