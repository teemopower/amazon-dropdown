import React from "react";

export default class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: ["", "Seattle", "San Francisco", "Los Angeles", "Chicago"],
      selected: false,
      city: "",
      list: []
    };
  }

  handleChange(e) {
    e.persist();
    this.setState({
      city: e.target.value,
      selected: true
    });
  }

  addToList() {
    this.setState({
      list: [...this.state.list, this.state.city]
    });
  }

  delete(val) {
    this.setState({
      list: this.state.list.filter(x => x !== val)
    });
  }

  render() {
    const { items, selected, list } = this.state;
    return (
      <div>
        <label>Reference image</label>
        <br />
        <br />
        <select onChange={this.handleChange.bind(this)}>
          {items.map((val, i) => {
            return (
              <option key={i} value={val}>
                {val}
              </option>
            );
          })}
        </select>
        <br />
        <br />
        <button
          disabled={!selected}
          onClick={() => {
            this.addToList();
          }}
        >
          Add to List
        </button>
        <div>
          <ul>
            {list.map((val, i) => {
              return (
                <li key={i} className="list-container">
                  <div>{val}</div>
                  <div>
                    <button onClick={() => this.delete(val)}>Delete</button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
