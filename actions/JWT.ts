import * as jose from "jose";
import { cookies } from "next/headers";

/* ---------- Types ---------- */
interface IProps {
  mobile: string;
  userId: string;
}

export type IDecodedToken = {
  mobile: string;
  userId: string;
  exp: number;
  iat: number;
};

/* ---------- Helpers ---------- */
function getSecret(): Uint8Array {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error("JWT_SECRET is not defined");
  return new TextEncoder().encode(secret);
}

/* ---------- Create JWT ---------- */
export const onCreateJWT = async ({ userId, mobile }: IProps) => {
  const secret = getSecret();

  const payload = {
    userId,
    mobile,
  };

  const jwt = await new jose.SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("240h") // ده روز
    .sign(secret);

  return jwt;
};

/* ---------- Verify JWT ---------- */
export const verifyJWT = async (token: string): Promise<IDecodedToken> => {
  const secret = getSecret();

  const { payload } = await jose.jwtVerify(token, secret);

  return payload as IDecodedToken;
};

/* ---------- Get Decoded Value from Cookie ---------- */
export const JwtDecodedValue = async (): Promise<IDecodedToken | null> => {
  const cookieStore = cookies();
  const token = (await cookieStore).get("token")?.value;

  if (!token) return null;

  try {
    return await verifyJWT(token);
  } catch (err) {
    console.error("JWT verification failed:", err);
    return null;
  }
};
