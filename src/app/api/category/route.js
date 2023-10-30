import { query } from "../../../database/conection";
import { NextResponse } from "next/server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const GET = async (req, res) => {
  try {
    // version supabase
    const supabase = createServerComponentClient({ cookies });
    const data = await supabase.from("Category").select();

    // version con pg
    //const { rows } = await query('SELECT * FROM "Category"');

    // console.log("rows", rows);

    // if (!rows || rows.length === 0) {
    //   return NextResponse.json({
    //     data: null,
    //     error: { message: "Category not found" },
    //   });
    // }

    // version supabase
    return NextResponse.json(data);

    // version pg
    //return NextResponse.json({ data: rows, error: null });
  } catch (error) {
    console.error("Error executing query:", error);
    return NextResponse.json({
      data: null,
      error: { message: "Internal server errorC" },
    });
  }
};
