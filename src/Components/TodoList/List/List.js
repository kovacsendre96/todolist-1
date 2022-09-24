import ListItem from "./ListItem";

const List = ({ todos }) => {
  return (
    <div className="wrapper">
      {todos.map((todo) => (
        <ListItem title={todo.title} date={todo.date} status={todo.status} key={todo.id} />
      ))}
    </div>
  );
};

export default List;
