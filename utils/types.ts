export interface CryptoCoin {
  id: string;
  name: string;
  image: string;
  current_price: number;
  [key: string]: string | number | null;
}
