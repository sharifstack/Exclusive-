import React from "react";
import { useLocation, Link } from "react-router-dom";

const BreadCrumb = () => {
  const { pathname } = useLocation();
  let pathNameArr = pathname.split("/").filter((path) => path);
  let breadCrumbPath = "";
  console.log(pathNameArr);

  return (
    <div className="my-20">
      <div className="container">
        <div className="flex items-end gap-3">
          <div className="inline-block0">
            <Link
              to="/"
              className="font-poppins font-normal text-sm text-[rgba(0,0,0,0.52)]"
            >
              Home
            </Link>
          </div>
          {pathNameArr?.map((name, index) => {
            breadCrumbPath += `/${name}`;
            const lastBreadCrumb = index === pathNameArr?.length - 1;

            return lastBreadCrumb ? (
              <>
                <div className="text-[rgba(0,0,0,0.52)]">/</div>
                <div
                  key={index}
                  className="font-poppins font-normal text-sm text-[#000000]"
                >
                  {name}
                </div>
              </>
            ) : (
              <>
                <div className="text-[rgba(0,0,0,0.52)]">/</div>
                <div key={index}>
                  <Link
                    to={breadCrumbPath}
                    className="font-poppins font-normal text-sm text-[rgba(0,0,0,0.52)] "
                  >
                    {name}
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
