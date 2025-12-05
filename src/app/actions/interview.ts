'use server';
import { neon } from '@neondatabase/serverless';

export async function createNewInterview(formData: FormData) {
  const sql = neon(`${process.env.POSTGRES_URL}`);

  const Date = formData.get('Date') as string;
  const Time = formData.get("Time") as string;
  const Person = formData.get("Person") as string;
  const Email = formData.get("Email") as string;
  const Phone = formData.get("Phone") as string;
  const About = formData.get("About") as string;

  
  await sql
    `INSERT INTO public."Interviews" (id, "Date", "Time", "Person", "Email", "Phone", "About") VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, $6)`,
    [Date, Time, Person, Email, Phone, About]
  ;
}