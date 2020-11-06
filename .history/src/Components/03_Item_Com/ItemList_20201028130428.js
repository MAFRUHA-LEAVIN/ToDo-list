import React from "react";
import "./listItems.scss";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import Pagination from "../04_Pagination/Pagination";
import { paginate } from "../Reusable_Component/02_Pagination/paginate";
import TodoItem from "../05_compot/ItemList";
import { Table } from "react-bootstrap";

class Organizer extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
      pageSize: 5,
    };
  }
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  render() {
    const { length: count } = this.props.items;
    if (count === 0)
      return (
        <div className="">
          <p></p>
        </div>
      );
    const items = paginate(
      this.props.items,
      this.state.currentPage,
      this.state.pageSize
    );
    return (
      <div>
        <Table className="ui striped table">
          <thead>
            <tr>
              <th className="counter-1">Todo item list: {count}.</th>
            </tr>
            {items.map((item) => {
              return (
                <TodoItem
                  key={item.id}
                  item={item}
                  onDeleteItem={this.props.onDeleteItem}
                  UpdateItem={this.props.UpdateItem}
                />
              );
            })}
          </thead>
        </Table>
        <br />
        <div className="">
          <Pagination
            itemsCount={this.props.items.length}
            pageSize={this.state.pageSize}
            onPageChange={this.handlePageChange}
            currentPage={this.state.currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Organizer;
