import React from "react";
import "./grid.css";

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { aliveCells: [] };
    this.makeCellAlive = this.makeCellAlive.bind(this);
  }

  makeCellAlive(event) {
    let id = event.target.id;
    this.state.aliveCells.push(id.split("_").map(e => +e));
    let element = document.getElementById(id);
    element.style.backgroundColor = "green";
  }

  createRow(rowIndex) {
    let row = [];
    for (let columnIndex = 0; columnIndex < this.props.size; columnIndex++) {
      let ids = rowIndex + "_" + columnIndex;
      row.push(<td onClick={this.makeCellAlive} id={ids} key={ids} />);
    }
    return row;
  }

  createTable() {
    let table = [];
    for (let rowIndex = 0; rowIndex < this.props.size; rowIndex++) {
      let row = this.createRow(rowIndex);
      table.push(<tr key={rowIndex}>{row}</tr>);
    }
    return <tbody id="table-body">{table}</tbody>;
  }

  render() {
    return (
      <div>
        <h2> Game Of Life</h2>
        <div className="table-view">
          <table id="table">{this.createTable()}</table>
        </div>
      </div>
    );
  }
}

export default Grid;
