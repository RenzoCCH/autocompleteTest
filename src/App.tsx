import { useEffect, useState } from "react";
import "./App.css";
import Autocomplete from "./components/Autocomplete";
import { item } from "./components/Autocomplete";

type apiItem = { [key: string]: { [key: string]: string } };
function App() {
  const [countries, setCountries] = useState<item[]>([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name"
      );
      const data = await response.json();
      setCountries(
        data.map((c: apiItem) => ({
          id: c.name?.common,
          value: c.name?.common,
        }))
      );
    })();
  }, []);
  return (
    <>
      <p>Click on the option to set the value</p>
      <Autocomplete id="country" label="Country" data={countries} />
    </>
  );
}

export default App;
