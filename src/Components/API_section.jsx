import { useState, useEffect } from "react";
import axios from "axios";

const URL =
  "https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws/";

const API_section = () => {
  const [card, setCard] = useState([]);
  const fetchCard = async () => {
    const response = await axios.get(URL);
    setCard(response.data);
    console.log(response.data);
  };

  console.log(card);

  useEffect(() => {
    fetchCard();
  }, []);

  return (
    <div className="w-11/12 mx-auto">
      <div>
        {card.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.imageURL} alt={item.title} />
              <p>{item.title}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default API_section;
