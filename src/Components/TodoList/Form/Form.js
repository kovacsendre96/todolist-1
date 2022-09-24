import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountDownAlt } from '@fortawesome/free-solid-svg-icons'


const Form = () => {
  return (
    <div className="flex-center control">
      <h3>My Todo's</h3>
      <form>
        <input className="margin-right-md" type="text" placeholder="Add new..."></input>
        <input className="margin-right-sm" type="date"></input>
        <button className="add-btn" type="submit">
          Add
        </button>
      </form>
      <div className="filter-sort flex-center ">
        <label className="margin-right-sm" for="filter">Filter:</label>
        <select className="margin-right-md" id="filter">
          <option>Option1</option>
          <option>Option2</option>
          <option>Option3</option>
        </select>
        <label className="margin-right-sm" for="sort">Sort:</label>
        <select className="margin-right-sm" id="sort">
          <option>Option1</option>
          <option>Option2</option>
          <option>Option3</option>
        </select>
        <FontAwesomeIcon className='my-fav-icons margin-right-lg' icon={faSortAmountDownAlt} />
      </div>
    </div>
  );
};

export default Form;
