import React from "react";

export default function UserData({ data }) {
  // console.log(data.attributes.months.data );

  const months = data.map((entry) => {
    return entry.attributes.months.data.map((month) => month.attributes.month);
  });

  // Flatten the array (since there's an array for each entry)
  const flattenedMonths = months.flat();

  // Output the result
  // console.log(flattenedMonths);

  return (
    <>
      <>
        {/* component */}
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="m-16">
              {data.map((detail) => (
                <div key={detail.id}>
                  <h1 className="ml-12">
                    Member Name: {detail.attributes.name}
                  </h1>
                  <h1 className="ml-12 mt-2">
                    {" "}
                    Email: {detail.attributes.email}{" "}
                  </h1>
                  <h1 className="ml-12 mt-2">
                    {" "}
                    Phone: {detail.attributes.phone}{" "}
                  </h1>
                </div>
              ))}
            </div>
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center">
                  <thead className="border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4"
                      >
                        Month
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4"
                      >
                        Amount Collected
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {data.map((index) => (
                      <tr className="border-b" key={index.id}>
                        {flattenedMonths.map((data) => (
                          <td
                            className="flex flex-col border-b text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap"
                            key={data.id}
                          >
                            <h1 className="text-red-600">{data}</h1>
                          </td>
                        ))}

                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {index.attributes.January}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-center mt-8">Total Amount Left :</p>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
