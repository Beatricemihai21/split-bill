import React, { useState } from "react";
import "./SplitBill.css";

function SplitBill() {
  const [amount, setAmount] = useState("");
  const [people, setPeople] = useState("");
  const [result, setResult] = useState(null);

  const calculateSplit = () => {
    const total = parseFloat(amount);
    const numPeople = parseInt(people);

    if (isNaN(total) || isNaN(numPeople) || numPeople === 0) {
      setResult("Introduceti valori valide");
      return;
    }

    const perPerson = total / numPeople;
    setResult(`Fiecare persoana plateste: ${perPerson.toFixed(2)} lei `);
  };

  return (
    <div className="split-container">
      <h2 className="split-title">Imparte nota</h2>

      <div className="split-input-group">
        <input
          type="number"
          placeholder="Suma totala(lei)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="split-input"
        ></input>

        <input
          tyoe="number"
          placeholder="Numar de persoane"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          className="split-input"
        ></input>
      </div>

      <button className="split-button" onClick={calculateSplit}>
        Calculeaza
      </button>

      {result && <p className="split-result">{result}</p>}
    </div>
  );
}
export default SplitBill;
