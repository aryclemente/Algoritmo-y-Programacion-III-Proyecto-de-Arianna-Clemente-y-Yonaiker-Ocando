import { NextResponse } from "next/server";
import { query } from "../../../../database/conection";

export const GET = async (req, { params }) => {
  //capturamos el id que pasamos por parametros
  const id = params.id;

  // const supabase = createServerComponentClient({ cookies });

  try {
    const { rows } = await query("SELECT * FROM Product WHERE id = $1", [id]);

    if (rows.length === 0) {
      return NextResponse.json({
        data: null,
        error: { message: "Product not found" },
      });
    }

    return NextResponse.json({ data: rows[0], error: null });
  } catch (error) {
    console.error("Error executing query:", error);
    return NextResponse.json({
      data: null,
      error: { message: "Internal server error" },
    });
  }

  // const { data, error } = await supabase
  //   .from("Product")
  //   .select(
  //     `id, strongId, name, price, image, stock, discount, Category(id, name)`
  //   )
  //   .eq("id", id);

  // if (!data) {
  //   return NextResponse.json({ data, error });
  // }
  // return NextResponse.json({ data, error });
};

// export const DELETE = async (req, { params }) => {
//   //capturamos el id que pasamos por parametros
//   const id = params.id;

//   // const supabase = createServerComponentClient({ cookies });

//   const { data, error } = await supabase.from("Product").delete().eq("id", id);

//   if (!data) {
//     return NextResponse.json({ data, error });
//   }
//   return NextResponse.json({ data, error });
// };
