import React from "react";
import { redirect } from "react-router-dom";

// Action function to handle form submission and redirection
export async function destroyAction({ params }) {
  return redirect("/");
}

// Component to render the delete form
export default function Destroy() {
  return (
    <>
    <div>
    <form
      method="post"
      action="destroy"
      onSubmit={(event) => {
        if (!confirm("Please confirm you want to delete this record.")) {
          event.preventDefault();
        }
      }}
    >
      <button type="submit">Delete</button>
    </form>
    </div>
    </>
  );
}
