import "./card.css";
import { Collection } from "./collection";
export const Button = (prop) => {
  return (
    <>
      <button className="button" onClick={() => ayns(prop)}>
        Add Item
      </button>
    </>
  );
};
function ayns(prop) {
    console.log(prop);
    
   <Collection data={prop} />;
}
