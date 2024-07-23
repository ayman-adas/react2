import {
    Outlet,
    Link,
    useLoaderData,
    
  } from "react-router-dom";
  import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';

  import Input from '@mui/material/Input';

  import { getContacts, createContact } from "./contact";
  import * as React from 'react';

  export async function action() {
    const contact = await createContact();
    return { contact };
  }
  /* other code */
  function MyFormHelperText() {
    const { focused } = useFormControl() || {};
  
    const helperText = React.useMemo(() => {
      if (focused) {
        return 'This field is being focused';
      }
  
      return 'Helper text';
    }, [focused]);
  
    return <FormHelperText>{helperText}</FormHelperText>;
  }
  
  export default function Upload() {
    // const { contacts } = useLoaderData() as { contacts: Contact[] };
  function MyFormHelperText() {
  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return 'This field is being focused';
    }

    return 'Helper text';
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}

    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div>
            {/* other code */}
            <form noValidate autoComplete="off" method="post">
      <FormControl sx={{ width: '25ch' }}>

        <OutlinedInput placeholder="Please enter text" />
        <button type="submit">New</button>

        <MyFormHelperText />
      </FormControl>
    </form>
          </div>
          
          {/* other code */}
        </div>
      </>
    );
  }
  setInterval(()=>{<h1>ayman</h1>}, 1000);

  