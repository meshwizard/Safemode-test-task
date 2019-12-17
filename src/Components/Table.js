import React from "react";
import MaterialTable from "material-table";
import "./Icons.css";
import data from "./data.json";

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: "First Name", field: "first_name" },
        { title: "Last Name", field: "last_name" },
        { title: "Email", field: "email" },
        { title: "Phone Number", field: "phoneNumber", type: "numeric" },
        { title: "Role", field: "role" }
      ],
      data: data
    };
  }

  render() {
    return (
      <MaterialTable
        title="People"
        columns={this.state.columns}
        data={this.state.data}
        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  const data = this.state.data;
                  data.push(newData);
                  this.setState({ data }, () => resolve());
                }
                resolve();
              }, 1000);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  const data = this.state.data;
                  const index = data.indexOf(oldData);
                  data[index] = newData;
                  this.setState({ data }, () => resolve());
                }
                resolve();
              }, 1000);
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  let data = this.state.data;
                  const index = data.indexOf(oldData);
                  data.splice(index, 1);
                  this.setState({ data }, () => resolve());
                }
                resolve();
              }, 1000);
            })
        }}
        options={{
          rowStyle: {
            backgroundColor: "768a76"
          },
          headerStyle: {
            backgroundColor: "#b0cfb0",
            color: "#FFF"
          }
        }}
      />
    );
  }
}
