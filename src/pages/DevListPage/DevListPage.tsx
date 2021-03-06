import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../../contexts/DataContext";
import { AllProject } from "../../utils/contracts";

interface DevListPageProps {}
const DevListPage: React.FC<DevListPageProps> = (props) => {
  const { data } = useData();

  return (
    <div className="container  px-4 md:px-0 my-12 mx-auto">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {data?.allUsers
          .sort((a, b) => {
            if (a.totalProjects < b.totalProjects) {
              return 1;
            }
            if (a.totalProjects > b.totalProjects) {
              return -1;
            }
            return 0;
          })
          .map((user) => {
            return (
              <Link
                key={user.id}
                to={`/dev/${user.login}`}
                className="px-1 w-full md:w-1/2 my-10 lg:px-4 lg:w-1/3"
              >
                <div className="relative h-16 bg-white dark:bg-black">
                  <img
                    style={{
                      position: "absolute",
                      top: "-2.5rem",
                      left: "50%",
                      transform: "translate(-50%, 0)",
                    }}
                    className="w-20 h-20 rounded-full"
                    src={user.avatarUrl}
                    alt=""
                  />
                </div>
                <article className="overflow-hidden rounded-lg shadow-md bg-white dark:bg-black">
                  <div className="px-6 pb-4 bg-white dark:bg-black flex flex-col items-center">
                    <div className="text-xl text-center">
                      {user.name || user.login}
                    </div>
                    <div className="flex">
                      <div className="text-xs text-indigo-800 text-gray-700 text-center mx-2">
                        <a
                          className="no-underline hover:underline focus:text-gray-900 hover:text-gray-900"
                          href={user.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          @{user.login}
                        </a>
                      </div>
                      {user.isFinalist && (
                        <span className="inline-block bg-indigo-800 text-white text-xs px-2 rounded-full uppercase font-semibold tracking-wide align-bottom">
                          Finalist
                        </span>
                      )}
                    </div>
                    <div
                      className={`${
                        user.totalProjects >= 5
                          ? "bg-green-600 text-white"
                          : "text-orange-400"
                      } text-xs text-center py-1 w-24 mx-auto rounded-md mt-2`}
                    >
                      {user.totalProjects} Submission
                      {user.totalProjects > 1 ? "s" : ""}
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default DevListPage;
