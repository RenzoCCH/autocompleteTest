import classes from './Highlight.module.css'

type HighlightProps = {
  value: string;
  subvalue: string;
};
let id = 0;
function getId() {
  return id++;
}
const Highlight = ({
  value,
  subvalue,
}: HighlightProps): string | (string | JSX.Element)[] => {
  if (!subvalue.trim() && value.includes(subvalue)) {
    return value;
  }
  // escape special characters on regex
  const sb = subvalue.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  // split text on subvalue, including subvalue, and remove empty values
  const valuesArray = value
    .split(new RegExp(`(${sb})`, "gi"))
    .filter((s) => s !== "");
  // wrap array in higlighted span
  return valuesArray.map((v) => {
    if (v.trim().toLocaleLowerCase() === subvalue.trim().toLocaleLowerCase()) {
      return <span className={classes.selected} key={getId()}>{v}</span>;
    }
    return v;
  });
};

export default Highlight;
