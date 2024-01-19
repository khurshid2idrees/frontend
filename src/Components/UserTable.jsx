import React from "react";

export default function UserTable({ data }) {
  return (
    <>
      <>
        {/* component */}

        <div className="flex flex-wrap -mx-3 mb-5">
          <div className="w-full max-w-full px-3 mb-6  mx-auto">
            <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
              <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
                {/* card header */}
                <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
                  <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
                    <span className="mr-3 font-semibold text-dark">
                      Projects Deliveries
                    </span>
                    <span className="mt-1 font-medium text-secondary-dark text-lg/normal">
                      All projects from the Loopple team
                    </span>
                  </h3>
                  <div className="relative flex flex-wrap items-center my-2">
                    <a
                      href="javascript:void(0)"
                      className="inline-block text-[.925rem] font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-secondary active:bg-light focus:bg-light"
                    >
                      {" "}
                      See other projects{" "}
                    </a>
                  </div>
                </div>
                {/* end card header */}
                {/* card body  */}
                <div className="flex-auto block py-8 pt-6 px-9">
                  <div className="overflow-x-auto">
                    <table className="w-full my-0 align-middle text-dark border-neutral-200">
                      <thead className="align-bottom">
                        <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                          <th className="pb-3 text-left min-w-[175px]">
                            MEMBER NAME
                          </th>
                          <th className="pb-3 text-center min-w-[100px]">
                            FLAT NO.
                          </th>
                          <th className="pb-3 text-center min-w-[100px]">
                            COLLECTED
                          </th>
                          <th className="pb-3  text-center min-w-[175px]">
                            REQUIRED COLLECTION IN (2024)
                          </th>
                          <th className="pb-3  text-center min-w-[100px]">
                            LAST COLLECTED
                          </th>
                          <th className="pb-3 text-center min-w-[50px]">
                            DETAILS
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((index) => (
                          <tr
                            className="border-b border-dashed last:border-b-0"
                            key={index.id}
                          >
                            <td className="p-3 pl-0">
                              <div className="flex items-center">
                                {/* <div className="relative inline-block shrink-0 rounded-2xl me-3">
      <img
        src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-49-new.jpg"
        className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
        alt=""
      />
    </div> */}
                                <div className="flex flex-col justify-start">
                                  <a
                                    href="javascript:void(0)"
                                    className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"
                                  >
                                    {" "}
                                    {index.attributes.name}
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="p-3 pr-0 text-center">
                              <span className="font-semibold text-light-inverse text-md/normal">
                                {index.attributes.flat}
                              </span>
                            </td>
                            <td className="p-3 pr-0 text-center">
                              <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="w-5 h-5 mr-1"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                                  />
                                </svg>{" "}
                                {index.attributes.paymentCollected} ₹
                              </span>
                            </td>
                            <td className="p-3  text-center">
                              <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">
                                {" "}
                                {index.attributes.TotalAmount} ₹
                              </span>
                            </td>
                            <td className="pr-0 text-center">
                              <span className="font-semibold text-light-inverse text-md/normal">
                                {index.attributes.createdAt.slice(0, 10)}
                              </span>
                            </td>
                            <td className="p-3 pr-0 text-center">
                              <button className="ml-8 relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                                <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                    />
                                  </svg>
                                </span>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
