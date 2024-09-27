/** @format */

import React from "react";
import "../../src/index.css";
import { LikeOutlined } from "@ant-design/icons";

export default function FastB() {
  return (
    <>
      <div className="flex md:cols-2 h-[43rem]">
        <div className="w-1/3 page border">
          <div>
            <LikeOutlined />
          </div>
        </div>
        <div className="w-2/3 page border">
          <h1>second column</h1>
        </div>
      </div>
    </>
  );
}
