export type Cocktail = {
  name: string;
  imageUrl: string;
  ingredients: string;
  price: string;
  href?: string;
};

export type SignatureCocktailsSectionProps = {
  title?: string;
  subtitle?: string;
  items?: Cocktail[];
};