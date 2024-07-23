interface Tour {
    id: number;
    name: string;
    duration: number;
    rating: number;
    numberOfReviews: number;
    price: number;
    image: string;
  }
  
  interface City {
    id: number;
    name: string;
    tours: Tour[];
  }
  