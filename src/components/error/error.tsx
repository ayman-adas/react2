import { useRouteError } from "react-router-dom";

export default function ErrorPage( ) {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
      if (error instanceof Error) {

        <i>{}</i>}
      </p>
    </div>
  );
}