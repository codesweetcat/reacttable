import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    // fetch(url, {
    //   method: "GET"
    // })
    //   .then(res => res.json())
    //   .then(posts => {
    //     console.log(posts);
    //     this.setState({ posts: posts });
    //   });
    axios.get(url).then(res => {
      console.log(res);
      this.setState({ posts: res.data });
    });
  }
  render() {
    const { posts } = this.state;
    // console.log("posts123", posts);
    const columns = [
      {
        Header: "User ID",
        accessor: "userId" // String-based value accessors!
      },
      {
        Header: "ID",
        accessor: "id",
        sortable: true,
        filterable: true
        // Cell: props => <span className="number">{props.value}</span> // Custom cell components!
      },
      //progress bar
      {
        Header: "Profile Progress",
        accessor: "progress",
        Cell: row => (
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#dadada",
              borderRadius: "2px"
            }}
          >
            <div
              style={{
                width: `${row.value}%`,
                height: "100%",
                backgroundColor:
                  row.value > 66
                    ? "#85cc00"
                    : row.value > 33
                      ? "#ffbf00"
                      : "#ff2e00",
                borderRadius: "2px",
                transition: "all .2s ease-out"
              }}
            />
          </div>
        )
      },

      {
        Header: "Title",
        accessor: "title",
        sortable: true,
        filterable: true
      },
      {
        Header: "Content",
        accessor: "body", // String-based value accessors!
        sortable: false,
        filterable: false
      },
      {
        Header: "Action",
        Cell: props => {
          return (
            <div>
              <button
                style={{ backgroundColor: "#85cc00" }}
                onClick={() => {
                  console.log(props.original);
                }}
              >
                LinkA
              </button>
              <button className="">LinkB</button>
            </div>
          );
        }
      }
    ];

    const data = [
      {
        userId: 1,
        id: 1,
        progress: 30,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body:
          "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        userId: 1,
        id: 2,
        progress: 80,
        title: "qui est esse",
        body:
          "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      }
    ];

    return (
      <div>
        <ReactTable
          columns={columns}
          data={data}
          defaultPageSize={10}
          className=" -highlight"
        />
      </div>
    );
  }
}

export default App;
