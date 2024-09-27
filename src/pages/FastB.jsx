/** @format */

import React, { useState } from "react";
import "../../src/index.css";
import user from "../../src/assets/people03.png";
import owner from "../../src/assets/owner.png";
import Land from "../../src/assets/icons/land.png";
import family from "../../src/assets/icons/family.png";
import justice from "../../src/assets/icons/justice.png";
import police from "../../src/assets/icons/polic.png";
import health from "../../src/assets/icons/health.png";
import ai from "../../src/assets/robot.png";
import { RightSquareOutlined } from "@ant-design/icons";
import { LeftCircleOutlined } from "@ant-design/icons";
import { CloseCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";



export default function FastB() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex md:cols-2 h-[44rem] bg-primary">
        {/* main card of services on small devices */}
        {open && (
          <div className="sm:hidden block">
            <div className=" rounded-md  w-full fixed flex justify-end sm:block">
              <div className="bg-primary rounded-md w-3/4 h-[47rem] scroll-auto overflow-auto">
                <div className="md:w-2/3 h-[41.2rem] page">
                  <div className="flex space-x-4 p-4">
                    <div>
                      <img className="w-8 h-auto" src={ai} alt="Joshua User" />
                    </div>
                    <div className="items-center flex">
                      <h1 className="font-poppins font-bold text-xl text-white">
                        Where Safety Meets Swift{" "}
                        <span className="text-secondary">Solutions.</span>
                      </h1>
                      <CloseCircleOutlined className="text-2xl text-dimWhite"
                        onClick={() => setOpen((prevOpen) => !prevOpen)}
                      />
                    </div>
                  </div>
                  <div className="p-4 scroll-auto overflow-auto h-[36.5rem]">
                    {/* family depertments services */}
                    <div className=" flex space-x-4 p-4 w-full">
                      <div>
                        <img
                          className="w-12 p-2 rounded-full border-2 border-dimWhite hover:bg-secondary"
                          src={family}
                          alt="Joshua User"
                        />
                      </div>
                      <div className="items-center flex">
                        <h1 className="font-poppins font-semibold text-lg text-white">
                          Family Services
                        </h1>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4  p-4 w-full my-1 text-dimWhite">
                      <div className="container scrollbar-transparent hover:scrollbar-red border-t-0 border-b-0 border-r-0 border-l-2 border-secondary w-full h-[15rem] text-start pl-4 overflow-auto scroll-auto">
                        <Link to="#">
                          <p className="py-1">Certificate of Being Single</p>{" "}
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Recommendation Letter for Persons with
                          </p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Gender and Family Promotion MoUs
                          </p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">Guardianship Record</p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Authentication for an orphan's status
                          </p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">Divorce Services</p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Authentication for an orphan's status
                          </p>
                        </Link>
                      </div>
                      <div className="container scrollbar-transparent hover:scrollbar-red border-t-0 border-b-0 border-r-0 border-l-2 border-secondary w-full h-[15rem] text-start pl-4 overflow-auto scroll-auto">
                        <Link to="#">
                          <p className="py-1">Certificate of Being Single</p>{" "}
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Recommendation Letter for Persons with
                          </p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Gender and Family Promotion MoUs
                          </p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">Guardianship Record</p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Authentication for an orphan's status
                          </p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">Divorce Services</p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Authentication for an orphan's status
                          </p>
                        </Link>
                      </div>
                      <div className="container scrollbar-transparent hover:scrollbar-red border-t-0 border-b-0 border-r-0 border-l-2 border-secondary w-full h-[15rem] text-start pl-4 overflow-auto scroll-auto">
                        <Link to="#">
                          <p className="py-1">Certificate of Being Single</p>{" "}
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Recommendation Letter for Persons with
                          </p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Gender and Family Promotion MoUs
                          </p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">Guardianship Record</p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Authentication for an orphan's status
                          </p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">Divorce Services</p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Authentication for an orphan's status
                          </p>
                        </Link>
                      </div>
                    </div>
                    {/* Land depertments services */}
                    <div className=" flex space-x-4 p-4 w-full">
                      <div>
                        <img
                          className="w-12 p-2 rounded-full border-2 border-dimWhite hover:bg-secondary"
                          src={Land}
                          alt="Joshua User"
                        />
                      </div>
                      <div className="items-center flex">
                        <h1 className="font-poppins font-semibold text-lg text-white">
                          Land Services
                        </h1>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4  p-4 w-full my-1 text-dimWhite">
                      <div className="container scrollbar-transparent hover:scrollbar-red border-t-0 border-b-0 border-r-0 border-l-2 border-secondary w-full h-[15rem] text-start pl-4 overflow-auto scroll-auto">
                        <Link to="#">
                          <p className="py-1">Certificate of Being Single</p>{" "}
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Recommendation Letter for Persons with
                          </p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Gender and Family Promotion MoUs
                          </p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">Guardianship Record</p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Authentication for an orphan's status
                          </p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">Divorce Services</p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Authentication for an orphan's status
                          </p>
                        </Link>
                      </div>
                      <div className="container scrollbar-transparent hover:scrollbar-red border-t-0 border-b-0 border-r-0 border-l-2 border-secondary w-full h-[15rem] text-start pl-4 overflow-auto scroll-auto">
                        <Link to="#">
                          <p className="py-1">Certificate of Being Single</p>{" "}
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Recommendation Letter for Persons with
                          </p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Gender and Family Promotion MoUs
                          </p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">Guardianship Record</p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Authentication for an orphan's status
                          </p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">Divorce Services</p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Authentication for an orphan's status
                          </p>
                        </Link>
                      </div>
                      <div className="container scrollbar-transparent hover:scrollbar-red border-t-0 border-b-0 border-r-0 border-l-2 border-secondary w-full h-[15rem] text-start pl-4 overflow-auto scroll-auto">
                        <Link to="#">
                          <p className="py-1">Certificate of Being Single</p>{" "}
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Recommendation Letter for Persons with
                          </p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Gender and Family Promotion MoUs
                          </p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">Guardianship Record</p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Authentication for an orphan's status
                          </p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">Divorce Services</p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Authentication for an orphan's status
                          </p>
                        </Link>
                      </div>
                    </div>
                    {/* Police depertments services */}
                    <div className=" flex space-x-4 p-4 w-full">
                      <div>
                        <img
                          className="w-12 p-2 rounded-full border-2 border-dimWhite hover:bg-secondary"
                          src={police}
                          alt="Joshua User"
                        />
                      </div>
                      <div className="items-center flex">
                        <h1 className="font-poppins font-semibold text-lg text-white">
                          Police Services
                        </h1>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4  p-4 w-full my-1 text-dimWhite">
                      <div className="container scrollbar-transparent hover:scrollbar-red border-t-0 border-b-0 border-r-0 border-l-2 border-secondary w-full h-[15rem] text-start pl-4 overflow-auto scroll-auto">
                        <Link to="#">
                          <p className="py-1">Certificate of Being Single</p>{" "}
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Recommendation Letter for Persons with
                          </p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Gender and Family Promotion MoUs
                          </p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">Guardianship Record</p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Authentication for an orphan's status
                          </p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">Divorce Services</p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Authentication for an orphan's status
                          </p>
                        </Link>
                      </div>
                      <div className="container scrollbar-transparent hover:scrollbar-red border-t-0 border-b-0 border-r-0 border-l-2 border-secondary w-full h-[15rem] text-start pl-4 overflow-auto scroll-auto">
                        <Link to="#">
                          <p className="py-1">Certificate of Being Single</p>{" "}
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Recommendation Letter for Persons with
                          </p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Gender and Family Promotion MoUs
                          </p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">Guardianship Record</p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Authentication for an orphan's status
                          </p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">Divorce Services</p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Authentication for an orphan's status
                          </p>
                        </Link>
                      </div>
                      <div className="container scrollbar-transparent hover:scrollbar-red border-t-0 border-b-0 border-r-0 border-l-2 border-secondary w-full h-[15rem] text-start pl-4 overflow-auto scroll-auto">
                        <Link to="#">
                          <p className="py-1">Certificate of Being Single</p>{" "}
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Recommendation Letter for Persons with
                          </p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Gender and Family Promotion MoUs
                          </p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">Guardianship Record</p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Authentication for an orphan's status
                          </p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">Divorce Services</p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Authentication for an orphan's status
                          </p>
                        </Link>
                      </div>
                    </div>
                    {/* Health depertments services */}
                    <div className=" flex space-x-4 p-4 w-full">
                      <div>
                        <img
                          className="w-12 p-2 rounded-full border-2 border-dimWhite hover:bg-secondary"
                          src={health}
                          alt="Joshua User"
                        />
                      </div>
                      <div className="items-center flex">
                        <h1 className="font-poppins font-semibold text-lg text-white">
                          Health Services
                        </h1>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4  p-4 w-full my-1 text-dimWhite">
                      <div className="container scrollbar-transparent hover:scrollbar-red border-t-0 border-b-0 border-r-0 border-l-2 border-secondary w-full h-[15rem] text-start pl-4 overflow-auto scroll-auto">
                        <Link to="#">
                          <p className="py-1">Certificate of Being Single</p>{" "}
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Recommendation Letter for Persons with
                          </p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Gender and Family Promotion MoUs
                          </p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">Guardianship Record</p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Authentication for an orphan's status
                          </p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">Divorce Services</p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Authentication for an orphan's status
                          </p>
                        </Link>
                      </div>
                      <div className="container scrollbar-transparent hover:scrollbar-red border-t-0 border-b-0 border-r-0 border-l-2 border-secondary w-full h-[15rem] text-start pl-4 overflow-auto scroll-auto">
                        <Link to="#">
                          <p className="py-1">Certificate of Being Single</p>{" "}
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Recommendation Letter for Persons with
                          </p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Gender and Family Promotion MoUs
                          </p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">Guardianship Record</p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Authentication for an orphan's status
                          </p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">Divorce Services</p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Authentication for an orphan's status
                          </p>
                        </Link>
                      </div>
                      <div className="container scrollbar-transparent hover:scrollbar-red border-t-0 border-b-0 border-r-0 border-l-2 border-secondary w-full h-[15rem] text-start pl-4 overflow-auto scroll-auto">
                        <Link to="#">
                          <p className="py-1">Certificate of Being Single</p>{" "}
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Recommendation Letter for Persons with
                          </p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Gender and Family Promotion MoUs
                          </p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">Guardianship Record</p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Authentication for an orphan's status
                          </p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">Divorce Services</p>
                        </Link>
                        <Link to="#">
                          <p className="py-1">
                            Authentication for an orphan's status
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* first column */}
        <div className="w-full sm:w-1/3">
          <div className="flex space-x-8 p-8 m-1 bg-gradient-to-r from-primary to-secondary h-32 items-center text-center rounded-lg">
            <div className="">
              <img
                className="flex justify-center items-center w-16 h-auto border-2 border-dimWhite rounded-full hover:bg-dimWhite"
                src={owner}
                alt="Joshua Admin"
              />
            </div>
            <div className="w-full">
              <h1 className="font-bold text-start text-xl text-dimWhite ">
                Hi, There 👋
              </h1>
            </div>

            {/* on small devices */}
            <div className="ml-auto sm:hidden">
              <LeftCircleOutlined
                onClick={() => setOpen((prevOpen) => !prevOpen)}
                className="text-2xl text-primaryhover:text-dimWhite hover:text-dimWhite"
              />
            </div>
          </div>

          <div className="bg-primary  p-2 m-1 rounded-lg justify-center items-center text-center space-y-4">
            <div className="bg-[#018b8e] rounded-md w-full h-[27rem] scroll-auto overflow-auto">
              <div className="flex space-x-4 p-4">
                <div className="">
                  <img
                    className="w-auto h-24 rounded-full"
                    src={ai}
                    alt="Joshua User"
                  />
                </div>
                <div className="bg-primary m-1 rounded-bl-3xl rounded-r-xl w-80 text-start">
                  <h1 className="text-md py-6 px-6 text-dimWhite">
                    Hi, How can I assist You to day ?
                  </h1>
                </div>
              </div>
              <div className="space-x-1 ml-8 flex">
                <div className="rounded-3xl h-8 w-10 border-2 border-white hover:bg-white">
                  😡
                </div>
                <div className="rounded-3xl h-8 w-10 border-2 border-white hover:bg-white">
                  😐
                </div>
                <div className="rounded-3xl h-8 w-10 border-2 border-white hover:bg-white">
                  🤗
                </div>
              </div>
            </div>
            <div className="flex w-full h-16 bg-[#018b8e] rounded-md">
              <input
                className="bg-transparent font-semibold p-4 w-full outline-none border-none text-dimWhite"
                type="text"
                name="prompt"
                id="prompt"
                placeholder="Message FastB "
              />

              <RightSquareOutlined className="w-12 text-3xl text-dimWhite hover:text-secondary" />
            </div>
          </div>
        </div>

        {/* second column */}
        <div className="hidden sm:block md:w-2/3 h-[41.2rem] page">
          <div className="flex space-x-4 p-4">
            <div>
              <img className="w-8 h-auto" src={ai} alt="Joshua User" />
            </div>
            <div className="items-center flex">
              <h1 className="font-poppins font-bold text-xl text-white">
                Where Safety Meets Swift{" "}
                <span className="text-secondary">Solutions.</span>
              </h1>
            </div>
          </div>
          <div className="p-4 scroll-auto overflow-auto h-[36.5rem]">
            {/* family depertments services */}
            <div className=" flex space-x-4 p-4 w-full">
              <div>
                <img
                  className="w-12 p-2 rounded-full border-2 border-dimWhite hover:bg-secondary"
                  src={family}
                  alt="Joshua User"
                />
              </div>
              <div className="items-center flex">
                <h1 className="font-poppins font-semibold text-lg text-white">
                  Family Services
                </h1>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4  p-4 w-full my-1 text-dimWhite">
              <div className="container scrollbar-transparent hover:scrollbar-red border-t-0 border-b-0 border-r-0 border-l-2 border-secondary w-full h-[15rem] text-start pl-4 overflow-auto scroll-auto">
                <Link to="#">
                  <p className="py-1">Certificate of Being Single</p>{" "}
                </Link>
                <Link to="#">
                  <p className="py-1">Recommendation Letter for Persons with</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Gender and Family Promotion MoUs</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Guardianship Record</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Authentication for an orphan's status</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Divorce Services</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Authentication for an orphan's status</p>
                </Link>
              </div>
              <div className="container scrollbar-transparent hover:scrollbar-red border-t-0 border-b-0 border-r-0 border-l-2 border-secondary w-full h-[15rem] text-start pl-4 overflow-auto scroll-auto">
                <Link to="#">
                  <p className="py-1">Certificate of Being Single</p>{" "}
                </Link>
                <Link to="#">
                  <p className="py-1">Recommendation Letter for Persons with</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Gender and Family Promotion MoUs</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Guardianship Record</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Authentication for an orphan's status</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Divorce Services</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Authentication for an orphan's status</p>
                </Link>
              </div>
              <div className="container scrollbar-transparent hover:scrollbar-red border-t-0 border-b-0 border-r-0 border-l-2 border-secondary w-full h-[15rem] text-start pl-4 overflow-auto scroll-auto">
                <Link to="#">
                  <p className="py-1">Certificate of Being Single</p>{" "}
                </Link>
                <Link to="#">
                  <p className="py-1">Recommendation Letter for Persons with</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Gender and Family Promotion MoUs</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Guardianship Record</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Authentication for an orphan's status</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Divorce Services</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Authentication for an orphan's status</p>
                </Link>
              </div>
            </div>
            {/* Land depertments services */}
            <div className=" flex space-x-4 p-4 w-full">
              <div>
                <img
                  className="w-12 p-2 rounded-full border-2 border-dimWhite hover:bg-secondary"
                  src={Land}
                  alt="Joshua User"
                />
              </div>
              <div className="items-center flex">
                <h1 className="font-poppins font-semibold text-lg text-white">
                  Land Services
                </h1>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4  p-4 w-full my-1 text-dimWhite">
              <div className="container scrollbar-transparent hover:scrollbar-red border-t-0 border-b-0 border-r-0 border-l-2 border-secondary w-full h-[15rem] text-start pl-4 overflow-auto scroll-auto">
                <Link to="#">
                  <p className="py-1">Certificate of Being Single</p>{" "}
                </Link>
                <Link to="#">
                  <p className="py-1">Recommendation Letter for Persons with</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Gender and Family Promotion MoUs</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Guardianship Record</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Authentication for an orphan's status</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Divorce Services</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Authentication for an orphan's status</p>
                </Link>
              </div>
              <div className="container scrollbar-transparent hover:scrollbar-red border-t-0 border-b-0 border-r-0 border-l-2 border-secondary w-full h-[15rem] text-start pl-4 overflow-auto scroll-auto">
                <Link to="#">
                  <p className="py-1">Certificate of Being Single</p>{" "}
                </Link>
                <Link to="#">
                  <p className="py-1">Recommendation Letter for Persons with</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Gender and Family Promotion MoUs</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Guardianship Record</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Authentication for an orphan's status</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Divorce Services</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Authentication for an orphan's status</p>
                </Link>
              </div>
              <div className="container scrollbar-transparent hover:scrollbar-red border-t-0 border-b-0 border-r-0 border-l-2 border-secondary w-full h-[15rem] text-start pl-4 overflow-auto scroll-auto">
                <Link to="#">
                  <p className="py-1">Certificate of Being Single</p>{" "}
                </Link>
                <Link to="#">
                  <p className="py-1">Recommendation Letter for Persons with</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Gender and Family Promotion MoUs</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Guardianship Record</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Authentication for an orphan's status</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Divorce Services</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Authentication for an orphan's status</p>
                </Link>
              </div>
            </div>
            {/* Police depertments services */}
            <div className=" flex space-x-4 p-4 w-full">
              <div>
                <img
                  className="w-12 p-2 rounded-full border-2 border-dimWhite hover:bg-secondary"
                  src={police}
                  alt="Joshua User"
                />
              </div>
              <div className="items-center flex">
                <h1 className="font-poppins font-semibold text-lg text-white">
                  Police Services
                </h1>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4  p-4 w-full my-1 text-dimWhite">
              <div className="container scrollbar-transparent hover:scrollbar-red border-t-0 border-b-0 border-r-0 border-l-2 border-secondary w-full h-[15rem] text-start pl-4 overflow-auto scroll-auto">
                <Link to="#">
                  <p className="py-1">Certificate of Being Single</p>{" "}
                </Link>
                <Link to="#">
                  <p className="py-1">Recommendation Letter for Persons with</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Gender and Family Promotion MoUs</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Guardianship Record</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Authentication for an orphan's status</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Divorce Services</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Authentication for an orphan's status</p>
                </Link>
              </div>
              <div className="container scrollbar-transparent hover:scrollbar-red border-t-0 border-b-0 border-r-0 border-l-2 border-secondary w-full h-[15rem] text-start pl-4 overflow-auto scroll-auto">
                <Link to="#">
                  <p className="py-1">Certificate of Being Single</p>{" "}
                </Link>
                <Link to="#">
                  <p className="py-1">Recommendation Letter for Persons with</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Gender and Family Promotion MoUs</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Guardianship Record</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Authentication for an orphan's status</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Divorce Services</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Authentication for an orphan's status</p>
                </Link>
              </div>
              <div className="container scrollbar-transparent hover:scrollbar-red border-t-0 border-b-0 border-r-0 border-l-2 border-secondary w-full h-[15rem] text-start pl-4 overflow-auto scroll-auto">
                <Link to="#">
                  <p className="py-1">Certificate of Being Single</p>{" "}
                </Link>
                <Link to="#">
                  <p className="py-1">Recommendation Letter for Persons with</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Gender and Family Promotion MoUs</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Guardianship Record</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Authentication for an orphan's status</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Divorce Services</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Authentication for an orphan's status</p>
                </Link>
              </div>
            </div>
            {/* Health depertments services */}
            <div className=" flex space-x-4 p-4 w-full">
              <div>
                <img
                  className="w-12 p-2 rounded-full border-2 border-dimWhite hover:bg-secondary"
                  src={health}
                  alt="Joshua User"
                />
              </div>
              <div className="items-center flex">
                <h1 className="font-poppins font-semibold text-lg text-white">
                  Health Services
                </h1>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4  p-4 w-full my-1 text-dimWhite">
              <div className="container scrollbar-transparent hover:scrollbar-red border-t-0 border-b-0 border-r-0 border-l-2 border-secondary w-full h-[15rem] text-start pl-4 overflow-auto scroll-auto">
                <Link to="#">
                  <p className="py-1">Certificate of Being Single</p>{" "}
                </Link>
                <Link to="#">
                  <p className="py-1">Recommendation Letter for Persons with</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Gender and Family Promotion MoUs</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Guardianship Record</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Authentication for an orphan's status</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Divorce Services</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Authentication for an orphan's status</p>
                </Link>
              </div>
              <div className="container scrollbar-transparent hover:scrollbar-red border-t-0 border-b-0 border-r-0 border-l-2 border-secondary w-full h-[15rem] text-start pl-4 overflow-auto scroll-auto">
                <Link to="#">
                  <p className="py-1">Certificate of Being Single</p>{" "}
                </Link>
                <Link to="#">
                  <p className="py-1">Recommendation Letter for Persons with</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Gender and Family Promotion MoUs</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Guardianship Record</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Authentication for an orphan's status</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Divorce Services</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Authentication for an orphan's status</p>
                </Link>
              </div>
              <div className="container scrollbar-transparent hover:scrollbar-red border-t-0 border-b-0 border-r-0 border-l-2 border-secondary w-full h-[15rem] text-start pl-4 overflow-auto scroll-auto">
                <Link to="#">
                  <p className="py-1">Certificate of Being Single</p>{" "}
                </Link>
                <Link to="#">
                  <p className="py-1">Recommendation Letter for Persons with</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Gender and Family Promotion MoUs</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Guardianship Record</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Authentication for an orphan's status</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Divorce Services</p>
                </Link>
                <Link to="#">
                  <p className="py-1">Authentication for an orphan's status</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
