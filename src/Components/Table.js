import React from "react";
import MaterialTable from "material-table";
import { forwardRef } from "react";
import AddBox from "@material-ui/icons/AddBox";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

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
      data: [
        {
          id: "a4194b50-7457-45fe-b91b-36ba1bc2b82f",
          first_name: "Iran",
          last_name: "Zam",
          email: "iran@connectlogistics.co",
          phoneNumber: "054-321-34-21",
          role: "ADMIN"
        },
        {
          id: "0c68c435-6981-4ec3-b729-fc4cd688758b",
          first_name: "Oriana",
          last_name: "Friedman",
          email: "oriana@connectlogistics.co",
          phoneNumber: "058-434-97-21",
          role: "ADMIN"
        },
        {
          id: "c811b200-f990-499b-a024-a38e4e385282",
          first_name: "Hanan",
          last_name: "Friedman",
          email: "hanan@connectlogistics.co",
          phoneNumber: "052-444-32-12",
          role: "FLEET MANAGER"
        },
        {
          id: "daa507fd-ef35-46a8-b5b7-3a1c33fc99f2",
          first_name: "Tali",
          last_name: "Balan",
          email: "tali@connectlogistics.co",
          phoneNumber: "054-565-02-65",
          role: "FLEET MANAGER"
        },
        {
          id: "e857b751-9d5a-4d94-920a-6866e23d46a8",
          first_name: "Cartis",
          last_name: "Halevi",
          email: "halevi@connectlogistics.co",
          phoneNumber: "052-342-86-90",
          role: "FLEET MANAGER"
        },
        {
          id: "d4b0734b-2912-4e94-bce9-8eab2ab50360",
          first_name: "Karina",
          last_name: "Coweuppe",
          email: "karina@connectlogistics.co",
          phoneNumber: "058-666-43-06",
          role: "FLEET MANAGER"
        }
      ]
    };
  }

  render() {
    return (
      <MaterialTable
        icons={tableIcons}
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
