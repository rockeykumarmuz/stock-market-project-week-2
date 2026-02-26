import { useEffect, useState } from "react";
import protobuf from "protobufjs";
import type { Stock } from "../types/stockType";

const StockStream = () => {
  const [prices, setPrices] = useState({});

  useEffect(() => {
    let socket: WebSocket;
    let PricingData: any;

    const init = async () => {
      // Load proto only ONCE
      const root = await protobuf.load(".../../../../public/Pricing.proto");
      PricingData = root.lookupType("ticker");

      socket = new WebSocket("wss://streamer.finance.yahoo.com");

      socket.onopen = () => {
        socket.send(
          JSON.stringify({
            // subscribe: ["TSLA", "AAPL", "BTC-USD"],
            subscribe: ['BTC-USD', 'ETH-USD', 'DOGE-USD']
          })
        );
      };

      socket.onmessage = (event) => {
        try {
          const base64String = event.data;

          // Convert Base64 to Uint8Array
          const binaryData = Uint8Array.from(
            atob(base64String),
            (c) => c.charCodeAt(0)
          );

          // Decode protobuf
          const message = PricingData.decode(binaryData);
          const data = PricingData.toObject(message);

          // Update UI state
          setPrices((prev) => ({
            ...prev,
            [data.id]: data,
          }));

          // Log the timestamp to see if it's actually "new" data
    console.log(`Time: ${message.time} | Price: ${message.price}`);
        } catch (err) {
          console.error("Decoding error:", err);
        }
      };

      socket.onerror = (err) => {
        console.error("WebSocket error:", err);
      };
    };

    init();

    return () => {
      if (socket) socket.close();
    };
  }, []);

  const columnData: Stock[] = Object.values(prices)

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>📈 Live Market Data (Protobuf)</h2>

      {Object.keys(prices).length === 0 ? (
        <p>Waiting for data...</p>
      ) : (
        <table border={1} cellPadding="10">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Price</th>
              <th>Change</th>
              <th>Volume</th>
            </tr>
          </thead>
          <tbody>
            {columnData.map((stock) => (
              <tr key={stock.id}>
                <td>{stock.id}</td>
                <td>${stock.price?.toFixed(2)}</td>
                <td
                  style={{
                    color:
                      stock.change > 0 ? "green" : "red",
                  }}
                >
                  {stock.change?.toFixed(2)}
                </td>
                <td>{stock.dayVolume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StockStream;