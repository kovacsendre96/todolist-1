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
        <p className="margin-right-sm">Filter:</p>
        <select className="margin-right-md">
          <option>Option1</option>
          <option>Option2</option>
          <option>Option3</option>
        </select>
        <p className="margin-right-sm">Sort:</p>
        <select className="margin-right-sm">
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
