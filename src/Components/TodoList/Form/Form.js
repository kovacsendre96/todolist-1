import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountDownAlt } from '@fortawesome/free-solid-svg-icons'


const Form = () => {
  return (
    <div className="flex-center card control">
      <h3>My Todo's</h3>
      <form>
        <input className="margin-sm" type="text" placeholder="Add new..."></input>
        <input className="margin-sm" type="date"></input>
        <button className="add-btn" type="submit">
          Add
        </button>
      </form>
      <div className="filter-sort flex-center ">
        <label className="margin-sm" htmlFor="filter">Filter:</label>
        <select className="margin-sm" id="filter">
          <option>Option1</option>
          <option>Option2</option>
          <option>Option3</option>
        </select>
        <label className="margin-sm" htmlFor="sort">Sort:</label>
        <select className="margin-sm" id="sort">
          <option>Option1</option>
          <option>Option2</option>
          <option>Option3</option>
        </select>
        <FontAwesomeIcon className='fav-icon-sort' icon={faSortAmountDownAlt} />
      </div>
    </div>
  );
};

export default Form;
