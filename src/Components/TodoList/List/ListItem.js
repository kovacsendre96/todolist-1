import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ListItem = ({ title, date, status }) => {
  return (
    <div className="flex-center card todo">
      <div>{title}</div>
      <div>
        <div className="flex-center settings">
          <button>
            <FontAwesomeIcon icon={faCheck} />
          </button>
          <button>
            Edit
            <FontAwesomeIcon icon={faPencil} />
          </button>
          <button>
            Delete
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
        <div>{date}</div>
      </div>
    </div>
  );
};

export default ListItem;
