"use client";

import { useEffect, useState } from "react";
import { CryptoCoin } from "@/utils/types";
import getData from "@/services/getCryptoCosts";

export default function CryptoList() {
  const [loading, setLoading] = useState<boolean>(false);
  const [coinList, setCoinList] = useState<CryptoCoin[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleClick = async () => {
    setCurrentPage((prev) => prev + 1);
  };

  useEffect(() => {
    setLoading(true);

    getData(currentPage)
      .then((data) => {
        if (currentPage === 1) {
          setCoinList([...data]);
        } else {
          setCoinList((prev) => [...prev, ...data]);
        }
      })
      .finally(() => setLoading(false));
  }, [currentPage]);

  return (
    <section className="crypto-list-section flex h-full w-full flex-col items-center gap-2">
      <h1>Crypto list</h1>
      {loading ? (
        <span className="loader" />
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {coinList.map((coin: CryptoCoin) => (
              <tr key={coin.id}>
                <td>{coin.name}</td>
                <td align="right">{coin.current_price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button
        type="button"
        className={loading ? "disabled" : ""}
        onClick={handleClick}
      >
        Fetch more
      </button>
    </section>
  );
}
