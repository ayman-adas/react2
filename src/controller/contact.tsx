import React from 'react';
import { Outlet, Link, useLoaderData } from "react-router-dom";
import { getContacts } from "../components/contact";
import { Contact } from "../components/contact";  // Import Contact type

export default function Root() {
  const { contacts } = useLoaderData() as { contacts: Contact[] };

  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        {/* other code */}

        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <Link to={`contacts/${contact.id}`}>
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>

        {/* other code */}
      </div>
      <Outlet />
    </>
  );
}
