import ListItem from "./ListItem";

const List = ({ todos }) => {
  return (
    <div className="wrapper">
      {todos.map((todo, index) => (
        <ListItem title={todo.title} date={todo.date} status={todo.status} key={index} />
      ))}
    </div>
  );
};

export default List;
