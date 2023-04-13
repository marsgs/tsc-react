import { useState } from "react";

//props
//use interface or type alias
interface Props {
  //define properties and their types
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

//props immutable
function ListGroup({ items, heading, onSelectItem }: Props) {
  //hook useState
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //arr[0] //variable (selectedIndex)
  //arr[1] //updater function

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Item Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
