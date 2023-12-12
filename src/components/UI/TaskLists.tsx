"use client";
import { Button, Input, Select } from "antd";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";

const { Search } = Input;

const TaskLists = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [filterDomain, setFilterDomain] = useState<string>("");

    const handleSearch = (value: string) => {
        setSearchQuery(value);
      };
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
      };
  return (
    <div className="mx-8 sm:mx-24">
      <div
      className="my-10 flex flex-wrap justify-center items-center gap-3"
      >
        <Search
          placeholder="Search By Name"
          allowClear
          enterButton="Search"
          size="middle"
          onSearch={handleSearch}
          style={{ width: 300, marginRight: 16 }}
        />
        <Select
          placeholder="Filter Task"
          onChange={handleChange}
          size="middle"
          style={{ width: 150, marginRight: 16 }}
          options={[
            { value: 'All', label: 'All' },
            { value: 'true', label: 'Complete' },
            { value: 'false', label: 'InComplete' },
          ]}
        >
        </Select>
        <Button size="middle"  type="primary"><PlusOutlined /> Creae Task</Button>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
       <div>one</div>
       <div>one</div>
       <div>one</div>
      </div>
    </div>
  );
};
export default TaskLists;
