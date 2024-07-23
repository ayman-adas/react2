import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

// Define the Contact type
export  interface Contact {
  id: string;
  first?: string;
  last?: string;
  createdAt: number;
  [key: string]: any;
}

// Fake network delay cache
let fakeCache: { [key: string]: boolean } = {};

// Fetch contacts with optional query filtering
export  async function getContacts(query?: string): Promise<Contact[]> {
  await fakeNetwork(`getContacts:${query}`);
  let contacts: Contact[] = await localforage.getItem("contacts") || [];
  if (query) {
    contacts = matchSorter(contacts, query, { keys: ["first", "last"] });
  }
  return contacts.sort(sortBy("last", "createdAt"));
}

// Create a new contact
export  async function createContact(): Promise<Contact> {
  await fakeNetwork();
  let id = Math.random().toString(36).substring(2, 9);
  let contact: Contact = { id, createdAt: Date.now() };
  let contacts = await getContacts();
  contacts.unshift(contact);
  await setContacts(contacts);
  return contact;
}

// Fetch a contact by ID
export  async function getContact(id: string): Promise<Contact | null> {
  await fakeNetwork(`contact:${id}`);
  let contacts: Contact[] = await localforage.getItem("contacts") || [];
  let contact = contacts.find(contact => contact.id === id);
  return contact ?? null;
}

// Update a contact by ID
export  async function updateContact(id: string, updates: Partial<Contact>): Promise<Contact> {
  await fakeNetwork();
  let contacts: Contact[] = await localforage.getItem("contacts") || [];
  let contact = contacts.find(contact => contact.id === id);
  if (!contact) throw new Error(`No contact found for ID: ${id}`);
  Object.assign(contact, updates);
  await setContacts(contacts);
  return contact;
}

// Delete a contact by ID
export  default  async function deleteContact(id: string): Promise<boolean> {
  let contacts: Contact[] = await localforage.getItem("contacts") || [];
  let index = contacts.findIndex(contact => contact.id === id);
  if (index > -1) {
    contacts.splice(index, 1);
    await setContacts(contacts);
    return true;
  }
  return false;
}

// Set contacts in localforage
async  function setContacts(contacts: Contact[]): Promise<void> {
  await localforage.setItem("contacts", contacts);
}

// Fake network delay
async function fakeNetwork(key?: string): Promise<void> {
  if (!key) {
    fakeCache = {};
  }
  if (key && fakeCache[key]) {
    return;
  }
  if (key) {
    fakeCache[key] = true;
  }
  return new Promise(res => {
    setTimeout(res, Math.random() * 800);
  });
}
