import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortAmountDownAlt } from "@fortawesome/free-solid-svg-icons";

const Form = ({
  enteredTitle,
  setEnteredTitle,
  enteredDate,
  setEnteredDate,
  status,
  addTodoHandler,
}) => {
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const todoData = {
    title: enteredTitle,
    date: enteredDate,
    status: status,
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodoHandler(todoData);
    setEnteredTitle("");
    setEnteredDate("");
    console.log(todoData);
  };

  return (
    <div className="flex-center card control">
      <h3>My Todo's</h3>
      <form onSubmit={onSubmitHandler}>
        <input
          className="margin-sm"
          type="text"
          placeholder="Add new..."
          value={enteredTitle}
          onChange={titleChangeHandler}
        ></input>
        <input
          className="margin-sm"
          type="date"
          value={enteredDate}
          onChange={dateChangeHandler}
        ></input>
        <button className="add-btn" type="submit">
          Add
        </button>
      </form>
      <div className="filter-sort flex-center ">
        <label className="margin-sm" htmlFor="filter">
          Filter:
        </label>
        <select className="margin-sm" id="filter">
          <option>Option1</option>
          <option>Option2</option>
          <option>Option3</option>
        </select>
        <label className="margin-sm" htmlFor="sort">
          Sort:
        </label>
        <select className="margin-sm" id="sort">
          <option>Option1</option>
          <option>Option2</option>
          <option>Option3</option>
        </select>
        <FontAwesomeIcon className="fav-icon-sort" icon={faSortAmountDownAlt} />
      </div>
    </div>
  );
};

export default Form;
