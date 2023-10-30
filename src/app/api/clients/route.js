import { query } from "../../../database/conection";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  try {
    const { rows } = await query(
      'select c.*, json_agg(json_build_object(\'id\', c.id, \'name\', c.name)) as "Factura" from "Clientes" p  left join "clientes_factura" pc on pc.cliente_id = p.id left join "Factura" c on pc.factura_id = c.id group by p.id'
    );

    // const { data, error } = await supabase.from("Client").select();

    if (!rows || rows.length === 0) {
      return NextResponse.json({
        data: null,
        error: { message: "Client not found" },
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
};
