import React from "react";
import "./listItems.scss";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
//import Pagination from "../04_Pagination/Pagination";
//import { paginate } from "../Reusable_Component/02_Pagination/paginate";

class TodoItem extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <div>
        <div className="list">
          <p>
            <input
              type="text"
              id={item.id}
              value={item.text}
              onChange={(e) => {
                this.props.UpdateItem(e.target.value, item.id);
              }}
            />
            <span>
              <DeleteOutlineIcon
                onClick={() => this.props.onDeleteItem(item.id)}
              />
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default TodoItem;
