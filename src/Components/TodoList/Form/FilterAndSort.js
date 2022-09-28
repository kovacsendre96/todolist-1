import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortAmountDownAlt } from "@fortawesome/free-solid-svg-icons";

const FilterAndSort = ({ todos, setTodos, copyTodos }) => {
  const onChangeFilterHandler = (event) => {
    const filteredTodos = copyTodos.filter(
      (todo) => todo.status === event.target.value
    );
    return setTodos(filteredTodos);
  };

  return (
    <div className="filter-sort flex-center ">
      <label htmlFor="filter">Filter:</label>
      <select
        className="margin-sm"
        id="filter"
        onChange={onChangeFilterHandler}
      >
        <option value={"all"}>All</option>
        <option value={"progress"}>Progress</option>
        <option value={"success"}>Success</option>
      </select>
      <label htmlFor="sort">Sort:</label>
      <select className="margin-sm" id="sort">
        <option>Sort Newest to Oldest</option>
        <option>Sort Oldest to Newest</option>
      </select>
      <FontAwesomeIcon className="fav-icon-sort" icon={faSortAmountDownAlt} />
    </div>
  );
};

export default FilterAndSort;
