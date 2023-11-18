const ToDo = function () {
  return (
    <>
      <div className="background-div">
        <div className="main-div">
        <br />
          <h1>ToDo List</h1>
          <br />
          <div className="add-item">
          <input  className="add-input" placeholder="Add Item"/>
          <button className="add-button" >+</button>
          </div>

          <o className="list">
           <li className="item"> <button className="delete-item" >X</button> buy mango</li>
          </o>
        </div>
      </div>
    </>
  );
};

export default ToDo;
