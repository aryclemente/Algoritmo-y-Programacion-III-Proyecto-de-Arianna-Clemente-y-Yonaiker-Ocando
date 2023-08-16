import { NextResponse } from "next/server";
import * as jose from "jose";
const users = [
  {
    userName: "Yonaiker",
    pass: "123456",
  },
  {
    userName: "Arianna",
    pass: "0000",
  },
  {
    userName: "Reynaldo",
    pass: "1234",
  },
];

const secret = new TextEncoder().encode(
  "cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2"
);
const alg = "HS256";

export async function POST(request) {
  const data = await request.json();

  const user = users.find((f) => f.userName === data.userName);

  if (!user) {
    return new Response("El usuario no existe", { status: 401 });
  }
  if (user.pass != data.pass) {
    return new Response("La contraseña es incorrecta", { status: 401 });
  }

  const jwt = await new jose.SignJWT({ name: user.userName })
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setIssuer("urn:yonaiker:issuer")
    .setAudience("urn:yonaiker:audience")
    .setExpirationTime("2h")
    .sign(secret);

  return NextResponse.json({ token: jwt });
}
