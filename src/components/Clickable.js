import React from "react";
import { Button } from "reactstrap";
import './clickstyle.css';

const Clickable = props => {
  return (
    <Button onClick={()=>props.onClick(props.id)} className="flex-spacer">
      <img src={props.img} id={props.id} alt={props.character} width={100} height={100} />
    </Button>
  );
};
export default Clickable;
