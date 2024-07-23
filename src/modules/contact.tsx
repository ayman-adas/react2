// Define the Contact type
interface Contact {
    id: string;
    first?: string;
    last?: string;
    createdAt: number;
    [key: string]: any;
  }