import React from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import "./listItems.scss";

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
