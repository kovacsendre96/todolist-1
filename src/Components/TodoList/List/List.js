import ListItem from "./ListItem";

const List = () => {
  return (
    <>
      <ListItem title={"Főzés"} date={"2022.10.15"} status={'success'} />
      <ListItem title={"Mosogatás"} date={"2022.10.16"} status={'progress'} />
    </>
  );
};

export default List;
