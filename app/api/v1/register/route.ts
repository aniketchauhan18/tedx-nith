import { db } from "@/server/db/connection";
import { NextResponse } from "next/server";
import { users } from "@/server/db/schema";
import { v4 as uuidv4 } from "uuid";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  const { name, email } = await req.json();

  // validating inputs here
  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 },
    );
  }

  const existingUser = await db.query.users.findFirst({
    where: eq(users.email, email),
  })
  if (existingUser) {
    return NextResponse.json(
      {
        error: "User is already registered",
      },
      { status: 409 },
    );
  }

  const userData = {
    id: uuidv4(),
    name,
    email,
    createdAt: new Date(),
    updatedAt: new Date(),
  } as {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
  };

  try {
    const user = await db.insert(users).values(userData).returning();

    return NextResponse.json(
      { message: "User registered successfully", user },
      { status: 201 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "User registration failed" },
      { status: 500 },
    );
  }
}
