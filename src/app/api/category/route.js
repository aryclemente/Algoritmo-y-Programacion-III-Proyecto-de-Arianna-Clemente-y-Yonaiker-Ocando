import { query } from "../../../database/conection";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  try {
    const { rows } = await query('SELECT * FROM "Category"');

    // console.log("rows", rows);

    if (!rows || rows.length === 0) {
      return NextResponse.json({
        data: null,
        error: { message: "Category not found" },
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
