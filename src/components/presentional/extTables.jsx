import React from "react";
import { Table, Input, Button, Icon } from "antd";
import Highlighter from "react-highlight-words";

const data = [
  {
    key: "1",
    pos: 1,
    Team: "Katwe United",
    PL: 8,
    GD: 5,
    PTS: 15
  },
  {
    key: "2",
    pos: 2,
    Team: "KCCA United",
    PL: 8,
    GD: 5,
    PTS: 15
  },
  {
    key: "3",
    pos: 3,
    Team: "Buddu united",
    PL: 8,
    GD: 5,
    PTS: 15
  },
  {
    key: "4",
    pos: 4,
    Team: "Express United",
    PL: 8,
    GD: 5,
    PTS: 15
  },
  {
    key: "5",
    pos: 5,
    Team: "Villa FC",
    PL: 8,
    GD: 5,
    PTS: 15
  },
  {
    key: "6",
    pos: 6,
    Team: "Kololo United",
    PL: 8,
    GD: 5,
    PTS: 15
  },
  {
    key: "7",
    pos: 7,
    Team: "Butyambala City FC",
    PL: 8,
    GD: 5,
    PTS: 15
  },
  {
    key: "8",
    pos: 8,
    Team: "Kireka United",
    PL: 8,
    GD: 5,
    PTS: 15
  },
  {
    key: "9",
    pos: 9,
    Team: "Tooro FC",
    PL: 8,
    GD: 5,
    PTS: 15
  },
  {
    key: "10",
    pos: 10,
    Team: "Mbale united FC",
    PL: 8,
    GD: 5,
    PTS: 15
  },
  {
    key: "11",
    pos: 11,
    Team: "Express United",
    PL: 8,
    GD: 5,
    PTS: 15
  },
  {
    key: "12",
    pos: 12,
    Team: "Villa FC",
    PL: 8,
    GD: 5,
    PTS: 15
  },
  {
    key: "13",
    pos: 13,
    Team: "Kololo United",
    PL: 8,
    GD: 5,
    PTS: 15
  },
  {
    key: "14",
    pos: 14,
    Team: "Butyambala City FC",
    PL: 8,
    GD: 5,
    PTS: 15
  },
  {
    key: "15",
    pos: 15,
    Team: "Kololo United",
    PL: 8,
    GD: 5,
    PTS: 15
  },
  {
    key: "16",
    pos: 16,
    Team: "Butyambala City FC",
    PL: 8,
    GD: 5,
    PTS: 15
  }
];

class ExtreTables extends React.Component {
  state = {
    searchText: ""
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button
          onClick={() => this.handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text => (
      <Highlighter
        highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
        searchWords={[this.state.searchText]}
        autoEscape
        textToHighlight={text.toString()}
      />
    )
  });

  handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: "" });
  };

  render() {
    const columns = [
      {
        title: "POS",
        dataIndex: "pos",
        key: "pos",
        width: "10px"
      },
      {
        title: "Team",
        dataIndex: "Team",
        key: "Team",
        width: "100px",
        ...this.getColumnSearchProps("Team")
      },
      {
        title: "PL",
        dataIndex: "PL",
        key: "PL",
        width: "10px"
      },
      {
        title: "GD",
        dataIndex: "GD",
        key: "GD",
        width: "10px"
      },
      {
        title: "PTS",
        dataIndex: "PTS",
        key: "PTS",
        width: "10px"
      }
    ];
    return <Table columns={columns} dataSource={data} size="small" />;
  }
}

export default ExtreTables;
