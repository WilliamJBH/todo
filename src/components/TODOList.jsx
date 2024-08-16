function TODOList() {
  return <ol className="todo_list">{/* <li> list goes here */}</ol>;
}

export default TODOList;

function Item({ item }) {
  return (
    <li id="{item?.id}" className="todo_item">
      <button className="todo_items_left"></button>
    </li>
  );
}
