import React, { useState } from "react";
import Highlight from "./higlight/Highlight";
import classes from "./Autocomplete.module.css";

export type item = {
  value: string;
  id: string;
};

type AutocompleteProps = {
  id: string;
  data: item[];
  label: string;
};

const Autocomplete: React.FunctionComponent<AutocompleteProps> = ({
  id,
  data,
  label,
}) => {
  const [val, setVal] = useState<string>("");

  function handleChange(e: React.FormEvent<HTMLInputElement>): void {
    setVal(e.currentTarget.value);
  }
  function filterData(data: item[]): JSX.Element | undefined {
    const items = data.filter((d) =>
      d.value.toLocaleLowerCase().includes(val.trim().toLocaleLowerCase())
    );
    if (items.length === 0 || val.trim() === "") {
      return;
    }
    return (
      <ul className={classes.list}>
        {items.map((item) => (
          <li key={item.id} onClick={() => setVal(item.value)}>
            <Highlight value={item.value} subvalue={val} />
          </li>
        ))}
      </ul>
    );
  }
  return (
    <section className={classes.autocomplete}>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} value={val} onChange={handleChange} />
      {filterData(data)}
    </section>
  );
};

export default Autocomplete;
