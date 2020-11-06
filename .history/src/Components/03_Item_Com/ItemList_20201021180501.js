import React from "react";
import "./listItems.scss";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
//import Pagination from "../04_Pagination/Pagination";
//import { paginate } from "../Reusable_Component/02_Pagination/paginate";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      pageSize: 10,
    };
  }

  render() {
    const { items } = this.props;
    return (
      <div>
        {items.map((item) => {
          <div className="list" key={item.id}></div>;
          <div>{item.text} </div>;
        })}
      </div>
    );
  }
}

export default TodoItem;
