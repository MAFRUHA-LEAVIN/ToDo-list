import React from "react";
import OrganizerItems from "./02_OrganizerItems";
import SearchBox from "../Reusable_Component/01_Search/Search";
//import Weather from "./04_Weather";
import styled from "../styles";

class FirstPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
      items: [],
      weather: [],
      InitialInput: {
        text: "",
        id: "",
      },
      searchTodo: "",
      currentPage: 1,
      pageSize: 5,
    };
    this.onTextChange = this.onTextChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);
    this.UpdateItem = this.UpdateItem.bind(this);
  }
  currentTime() {
    this.setState({
      time: new Date(),
    });
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
      return null;
    });
    this.setState({ items: items });
  }
  componentDidMount() {
    setInterval(() => this.currentTime(), 1000);
  }

  render() {
    console.log(this.state.weather);
    const { items, searchTodo } = this.state;

    const isTodoDefined = Array.isArray(items);
    let filteredUser;
    if (isTodoDefined) {
      filteredUser = items.filter((filtering) =>
        filtering.text.toLowerCase().includes(searchTodo.toLowerCase())
      );
    }
    return (
      <div>
        <div style={styled.rowlist}>
          <div style={styled.head}>
            <h1 style={styled.h1}>ToDo List</h1>
          </div>
          <div>
            <input
              style={styled.Inp}
              type="text"
              value={this.state.InitialInput.text || ""}
              onChange={this.onTextChange}
            />

            <button style={styled.btn} onClick={this.addItem}>
              ADD
            </button>
          </div>
          <div>
            <SearchBox
              placeholder="Search todo ...."
              handleChange={(e) =>
                this.setState({ searchTodo: e.target.value })
              }
            />
          </div>
          {isTodoDefined ? (
            <OrganizerItems
              items={filteredUser}
              onDeleteItem={this.onDeleteItem}
              UpdateItem={this.UpdateItem}
            />
          ) : (
            <div>Error: todo not defined </div>
          )}
          <br />
        </div>
        <div style={styled.rowlist1}>
          <div style={styled.date}>{this.state.time.toLocaleTimeString()}</div>
        </div>
      </div>
    );
  }
}
export default FirstPage;
