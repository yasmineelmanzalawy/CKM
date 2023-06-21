import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDelete, AiFillEdit ,AiFillCloseCircle , AiFillCheckCircle } from "react-icons/ai";
import axios from "../axios.config";
import { ThreeDots } from "react-loader-spinner";
import Swal from "sweetalert2";

const Staff = () => {
  const [loading, setLoading] = useState(true);
  const [staff, setStaff] = useState([]);
  const [editingSalaryId, setEditingSalaryId] = useState(null);
  const [newSalary, setNewSalary] = useState("");

  useEffect(() => {
    const getStaff = async () => {
      const url = "api/Staff";
      try {
        const response = await axios.get(url);
        setStaff(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    getStaff();
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `api/Staff/${id}`;
        axios
          .delete(url)
          .then(() => {
            setStaff((prevStaff) =>
              prevStaff.filter((member) => member.id !== id)
            );
            Swal.fire("Deleted!", "The staff member has been deleted.", "success");
          })
          .catch((error) => {
            console.error(error);
            Swal.fire(
              "Error",
              "An error occurred while deleting the staff member.",
              "error"
            );
          });
      }
    });
  };

  const handleEditSalary = (id) => {
    setEditingSalaryId(id);
  };

  const handleSalaryChange = (e) => {
    setNewSalary(e.target.value);
  };

  const handleUpdateSalary = (id) => {
    const url = `api/Staff/${id}`;
    const payload = { sallery: newSalary , _method:"PUT" };
    axios
      .post(url, payload)
      .then(() => {
        setStaff((prevStaff) =>
          prevStaff.map((member) => {
            if (member.id === id) {
              return { ...member, sallery: newSalary };
            }
            return member;
          })
        );
        setEditingSalaryId(null);
        setNewSalary("");
        Swal.fire("Success!", "The staff member's salary has been updated.", "success");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire(
          "Error",
          "An error occurred while updating the staff member's salary.",
          "error"
        );
      });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ThreeDots color="#6366F1" height={120} width={120} />
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col justify-center mx-[50px]">
        <div className=" text-center">
          <Link to="/employees">
            <button className="text-center mt-[-50px]  bg-[#ebeced] p-2 text-lg text text-[#575859] rounded-lg">
              Add Staff
            </button>
          </Link>
        </div>
        <div className="overflow-x-auto">
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 font-jarkata font-medium">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-[#575859] uppercase bg-[#ebeced]    "
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-[#575859] uppercase bg-[#ebeced] "
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-[#575859] uppercase bg-[#ebeced] "
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-[#575859] uppercase bg-[#ebeced] "
                    >
                      Salary
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-[#575859] uppercase bg-[#ebeced] "
                    >
                      Address
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-[#575859] uppercase bg-[#ebeced] "
                    >
                      Phone
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-[#575859] uppercase bg-[#ebeced] "
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-3 text-xs font-bold text-left text-[#575859] uppercase bg-[#ebeced] "
                    >
                      Employed At
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-3 text-xs font-bold text-left text-[#575859] uppercase bg-[#ebeced] "
                    ></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {staff.map((x) => (
                    <tr key={x.id}>
                      <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {x.id}
                      </td>
                      <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {x.name}
                      </td>
                      <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {x.role}
                      </td>
                      <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {editingSalaryId === x.id ? (
                          <input
                            type="text"
                            className="px-2 py-1 text-sm bg-white rounded-md"
                            value={newSalary}
                            onChange={handleSalaryChange}
                          />
                        ) : (
                          x.sallery
                        )}
                      </td>
                      <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {x.address}
                      </td>
                      <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {x.phone}
                      </td>
                      <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {x.email}
                      </td>
                      <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {x.created_at}
                      </td>
                      <td className="px-1 py-4 flex gap-4 text-right whitespace-nowrap">
                        {editingSalaryId === x.id ? (
                          <button
                            className="hover:scale-110 duration-300 ease-out text-green-500 hover:text-green-700 cursor-pointer"
                            onClick={() => handleUpdateSalary(x.id)}
                          >
                            <AiFillCheckCircle size={20} />
                          </button>
                        ) : (
                          <button
                            className="hover:scale-110 duration-300 ease-out text-red-500 hover:text-red-700 cursor-pointer"
                            onClick={() => handleDelete(x.id)}
                          >
                            <AiOutlineDelete size={20} />
                          </button>
                        )}
                        {editingSalaryId === x.id ? (
                          <button
                            className="hover:scale-110 duration-300 ease-out text-gray-500 hover:text-gray-700 cursor-pointer"
                            onClick={() => setEditingSalaryId(null)}
                          >
                            <AiFillCloseCircle size={20} />
                          </button>
                        ) : (
                          <button
                            className="hover:scale-110 ease-out duration-300"
                            onClick={() => handleEditSalary(x.id)}
                          >
                            <AiFillEdit size={20} />
                          </button>
                        )}
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
  );
};

export default Staff;
