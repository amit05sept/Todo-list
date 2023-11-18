const List = function (props) {
  return (
    <li className="item" >
      <button className="delete-item" onClick={()=>props.onSelect(props.id)}> X </button> {props.item}
    </li>
  );
};


export default List;