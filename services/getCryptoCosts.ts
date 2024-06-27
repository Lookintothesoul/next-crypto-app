import { CryptoCoin } from "@/utils/types";

const getData = async (page: number): Promise<CryptoCoin[]> => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}`,
  );

  return response.json();
};

export default getData;
