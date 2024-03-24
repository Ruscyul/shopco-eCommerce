export interface ProductType {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  count: number;
}

export interface RootState {
  filters: {
    price: {
      min: number;
      max: number;
    };
    minRating: number;
    categories: string[];
  };
  sortBy: {
    currentSorting: string;
  };
  cart: {
    productList: [
      {
        id: number;
        count: number;
      },
    ];
  };
}
