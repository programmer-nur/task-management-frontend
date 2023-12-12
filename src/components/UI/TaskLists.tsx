"use client";

import { Button, Input, Select } from "antd";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import TaskCard from "./TaskCard";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { filterData, searched } from "@/redux/slices/filterSlice";

const { Search } = Input;

const TaskLists = () => {
  const dispatch = useAppDispatch();
const { searchTerm, status } = useAppSelector((state) => state.filter);



  const handleSearch = (value: string) => {
    dispatch(searched(value));
  };
  const handleChange = (value: boolean | null) => {
    dispatch(filterData(value));
  };
  return (
    <div className="mx-8 sm:mx-24">
      <div className="my-10 flex flex-wrap justify-center items-center gap-3">
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
            { value: null, label: "All" },
            { value: true, label: "Complete" },
            { value: false, label: "InComplete" },
          ]}
        ></Select>
        <Button size="middle" type="primary">
          <PlusOutlined /> Create Task
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
};
export default TaskLists;
