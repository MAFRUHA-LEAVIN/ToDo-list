import React from "react";
import TodoItem from "../03_Item_Com/ItemList";
import SearchBox from "../Reusable_Component/01_Search/Search";
//import Pagination from "../04_Pagination/Pagination";
//import { paginate } from "../Reusable_Component/02_Pagination/paginate";
//import Pagination from "react-pagination-js";
import "./firstpage.scss";

class FirstPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],

      InitialInput: {
        text: "",
        id: "",
      },
      searchTodo: "",
      currentPage: 5,
      totalPages: null,
      activePage: 1,
    };
    this.onTextChange = this.onTextChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);
    this.UpdateItem = this.UpdateItem.bind(this);
  }
  onTextChange = (event) => {
    this.setState({
      InitialInput: { text: event.target.value, id: Date.now() },
    });
  };

  onSearch = (e) => {
    this.setState({ searchTodo: e.target.value });
  };

  addItem(e) {
    e.preventDefault();
    const addnewItem = this.state.InitialInput;
    if (addnewItem.text !== "") {
      const addnewItems = [...this.state.items, addnewItem];
      this.setState({
        items: addnewItems,
        InitialInput: { text: "", id: "" },
      });
    }
  }

  onDeleteItem(id) {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    this.setState({ items: filteredItems });
  }

  UpdateItem(text, id) {
    const items = this.state.items;
    items.map((item) => {
      if (item.id === id) {
        item.text = text;
      }
      return item;
    });
    this.setState({ items: items });
    console.log(items);
  }
  handlePageChange = (currentPage) => {
    this.setState({ activePage: currentPage });
  };

  render() {
    return (
      <div classname="row">
        <div className="todolist">
          <div className="head">
            <h1 className="title">ToDo List</h1>
          </div>

          <form id="to-do-form">
            <input
              type="text"
              value={this.state.InitialInput.text || ""}
              onChange={this.onTextChange}
            />

            <button className="button" onClick={this.addItem}>
              Add
            </button>
          </form>

          <TodoItem
            items={this.state.items}
            onDeleteItem={this.onDeleteItem}
            UpdateItem={this.UpdateItem}
          />

          {/*   <div>
          <SearchBox />
        </div> */}
        </div>
        <div className="todolistSearch">
          <div className="head">
            <h1 className="title">Search Item:</h1>
          </div>
          <SearchBox placeholder="SearchItem" />
        </div>
      </div>
    );
  }
}
export default FirstPage;
