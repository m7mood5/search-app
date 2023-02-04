import React, { useState } from "react";
import './accordion.css';
import { BsStarFill } from "react-icons/bs";
import Container from "../../layout/Container/container";
import ResetBtn from "../ResetBtn";
const items = [
  {
    title: "Categories",
    content: [
      {name:"Shoes",value:"Shoes"},
      {name:"Sweet Shirt",value:"Sweet"},
    ],
  },
  {
    title: "Rating",
    content: [
      {name:<BsStarFill />,value:"1"},
      {name:<><BsStarFill /><BsStarFill /></>,value:"2"},
      {name: <><BsStarFill /><BsStarFill /><BsStarFill /></>,value:"3"},
      {name:<><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /></>,value:"4"},
      {name:<><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /></>,value:"5"},
    ],
  },
  {
    title: "Price",
    content: [
      {name:"100EGY ~~ 1000EGY",value:"10000"},
      {name:"1000EGY ~~ 2000EGY",value:"20000"},
    ],
  },
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderItems = items.map((item, index) => {
    const active = index === activeIndex;
    return (
      <div key={item.title} className="accordion-item">
        <div
          style={{
            background:"#fff",
            padding: "10px 20px",
            cursor: "pointer",
          }}
          onClick={() => onTitleClick(index)}
        >
          {item.title}
        </div>
       {active && <div className="accordion-body">{item.content.length > 0 && item.content.map((item)=><div className="accordion-body-item">{item.name}</div>)}</div>}
      </div>
    );
  });

  return <Container><ResetBtn/>
  <>{renderItems}</></Container>;
};


export default Accordion;
