const Form = () => {
  return (
    <div className="control">
      <h3>My Todo's</h3>
      <form>
        <input placeholder="Add new..."></input>
        <input type="date"></input>
        <button className="add-btn">Add</button>
      </form>
      <div className="filter-sort">
        <p className="filter__title">Filter:</p>
        <select className="filter__select">
          <option>Option1</option>
          <option>Option2</option>
          <option>Option3</option>
        </select>
        <p className="sort__title">Sort:</p>
        <select className="sort__select">
          <option>Option1</option>
          <option>Option2</option>
          <option>Option3</option>
        </select>
      </div>
    </div>
  );
};

export default Form;
