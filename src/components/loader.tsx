import { Outlet, Link } from "react-router-dom";
import { getContacts, createContact } from "./contact";

export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}
export async function Action() {
  const contact = await createContact();
  return { contact };
}