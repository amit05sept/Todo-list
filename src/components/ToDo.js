import React, { useState } from "react";
import List from "./List";
import emptyList from "../img/emptyList.png";
import Button from "./JsonButton";

const ToDo = function () {
  const [inputList, setinputList] = useState("");
  const [itemList, setitemList] = useState([]);

  // updating the state of inputList
  const itemEnter = function (e) {
    setinputList(e.target.value);
  };

  // adding item to the list  || updating the state of itemList
  const listOfItem = function () {
    // this is also a way to do it.
    // const newList = [...itemList, inputList];
    // setitemList(newList);

    // but this is also a cool way
    setitemList((oldList) => {
      return inputList.length === 0 ? oldList : [...oldList, inputList];
    });

    // emptying the input list, as the item have been added
    setinputList("");
  };

  // deleting the item
  const deleteItem = function (id) {
    setitemList((oldList) => {
      return oldList.filter((ele, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="background-div">
        <div className="main-div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <div className="add-item">
            <input
              className="add-input"
              placeholder="Add Item"
              onChange={itemEnter}
              value={inputList}
            />
            <button className="add-button" onClick={listOfItem}>
              +
            </button>
          </div>

          <div className="list">
            {itemList.length === 0 ? (
              <img className="empty-list-img" src={emptyList} />
            ) : (
              itemList.map((item, index) => {
                return (
                  <List
                    item={item}
                    id={index}
                    key={index}
                    onSelect={deleteItem}
                  />
                );
              })
            )}
          </div>
          <Button list={itemList}  setList = {setitemList}/>
        </div>
      </div>
    </>
  );
};

export default ToDo;
