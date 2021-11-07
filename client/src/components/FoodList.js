import React from "react";
import styled from "styled-components";

import Table from "react-bootstrap/Table";
import { FaPlus } from "react-icons/fa";

const Styled = styled.div`
  .searchResults {
    border-style: ridge;
  }
  .icon {
    color: green;
  }
  .plus-icon-position {
    text-align: right;
    margin-right: 25px;
  }
`;

const emoji = [
  "🍔",
  "🥙",
  "🥣",
  "🍲",
  "🍰",
  "🍛",
  "🥡",
  "🥓",
  "🍝",
  "🍕",
  "🥗",
  "🍽",
  "🍜",
  "🌭",
  "🍱",
  "🥘",
  "🍟",
];

const randomEmoji = () => emoji[Math.floor(Math.random() * emoji.length)];

const FoodList = (props) => {
  return (
    <React.Fragment>
      <Styled>
        <div className="searchResults">
          <Table hover>
            <tbody>
              <td></td>
              <td></td>
              <td>🧈</td>
              <td>🍞</td>
              <td>🥩</td>
              <td>kCal</td>
              <tr>
                <td> {randomEmoji()}</td>
                <td>{props.food.description}</td>
                <td>{props.food.fat} Fat</td>
                <td>{props.food.carbohydrates} Carbs</td>
                <td>{props.food.protein} Protein</td>
                <td>{props.food.calories} /100g</td>
                <div className="plus-icon-position">
                  <FaPlus className="icon" />
                </div>
              </tr>
            </tbody>
          </Table>
        </div>
      </Styled>
    </React.Fragment>
  );
};

export default FoodList;
