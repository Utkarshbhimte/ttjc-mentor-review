import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DevListPageContainer = styled.div``;

interface DevListPageProps {}
const DevListPage: React.FC<DevListPageProps> = (props) => {
  return (
    <div className="container mx-auto mt-8">
      <div className="rounded overflow-hidden shadow-lg px-4 py-8 bg-white">
        <div className="flex">
          <div className="w-1/3 text-center">
            <span className="block text-3xl mb-2">32</span>
            <span className="text-gray-600 text-sm">Total Projects</span>
          </div>
          <div className="w-1/3 text-center">
            <span className="block text-3xl mb-2">32</span>
            <span className="text-gray-600 text-sm">Pending for Approval</span>
          </div>
          <div className="w-1/3 text-center">
            <span className="block text-3xl mb-2">32</span>
            <span className="text-gray-600 text-sm">Approved Projects</span>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridGap: "1rem",
        }}
        className="mt-6"
      >
        <Link
          to="/project/random"
          className="rounded overflow-hidden shadow-lg px-4 py-8 bg-white"
        >
          <div className="text-base">Project name</div>
        </Link>
      </div>
    </div>
  );
};

export default DevListPage;
