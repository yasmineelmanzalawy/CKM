import React from "react";
import DataTable from "react-data-table-component";
import { useState } from "react";
import { BsTextarea } from "react-icons/bs";


function Supplier2() {
  const columns = [
    {
      name: "ID",
      selector: (row) => row.ID,
      sortable: true,
      isPrimaryKey: true,
      width: "80px",
      textAlign: "Center"

    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      width: "150px",
    },
    {
      name: "category",
      selector: (row) => row.category,
      width: "150px",
      textAlign: "Center"

    },
    {
      name: "Adress",
      selector: (row) => row.Adress,
      width: "150px",
      textAlign: "Center"

    },
    {
      name: "Email",
      selector: (row) => row.Email,
      sortable: true,
      width: "250px",
      textAlign: "Center"

    },
    {
      name: "Phone",
      selector: (row) => row.Phone,
      width: "200px",
      textAlign: "Center"

    },
    {
      name: "Notes",
      selector: (row) => row.Notes,
      width: "150px",
      textAlign: "Center",
    

    },
  ];
  const data = [
    {
      ID: 1,
      name: "yasmine",
      Email: "yasmine@gmail.com",
      category: "meat",
      Phone: "01094837186",
      Adress: "Alex",
    },
    {
      ID: 2,
      name: "toka",
      Email: "toka@gmail.com",
      category: "meat",
      Phone: "01094837186",
      Adress: "Alex",
    },
    {
      ID: 3,
      name: "rana",
      Email: "rana@gmail.com",
      category: "meat",
      Phone: "01094837186",
      Adress: "Alex",
    },
    {
      ID: 4,
      name: "bosy",
      Email: "bosy@gmail.com",
      category: "meat",
      Phone: "01094837186",
      Adress: "Alex",
    },
    {
      ID: 5,
      name: "sama",
      Email: "sama@gmail.com",
      category: "meat",
      Phone: "01094837186",
      Adress: "Alex",
    },
    {
      ID: 6,
      name: "salma",
      Email: "salma@gmail.com",
      category: "meat",
      Phone: "01094837186",
      Adress: "Alex",
    },
    {
      ID: 7,
      name: "ali",
      Email: "ali@gmail.com",
      category: "meat",
      Phone: "01094837186",
      Adress: "Alex",
    },
    {
      ID: 8,
      name: "yusef",
      Email: "yusef@gmail.com",
      category: "meat",
      Phone: "01094837186",
      Adress: "Alex",
    },
    {
      ID: 9,
      name: "menna",
      Email: "menna@gmail.com",
      category: "meat",
      Phone: "01094837186",
      Adress: "Alex",
    },
    {
      ID: 10,
      name: "alaa",
      Email: "alaa@gmail.com",
      category: "meat",
      Phone: "01094837186",
      Adress: "Alex",
    },
    {
      ID: 11,
      name: "sarah",
      Email: "sarah@gmail.com",
      category: "meat",
      Phone: "01094837186",
      Adress: "Alex",
    },
    {
      ID: 12,
      name: "rowan",
      Email: "rowan@gmail.com",
      category: "meat",
      Phone: "01094837186",
      Adress: "Alex",
    },
    {
      ID: 13,
      name: "heba",
      Email: "heba@gmail.com",
      category: "meat",
      Phone: "01094837186",
      Adress: "Alex",
    }
  ]
  const editing = { allowDeleting: true, allowEditing: true };
  const toolbarOptions = ['Delete'];

  const [records, setRecords ] = useState(data);
  function handleFilter(event) {
    const newData = data.filter(row => {
      return row.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
  }

  return (
    <div className="container my-[70px] mx-[150px] w-[1200px]">
      <div className="text-end">
       <input type="text" className=" border-4" onChange={handleFilter}/>
      </div>

      <DataTable
        columns={columns}
        data={data}
        fixedHeader
        editSettings={editing}
        pagination
        toolbar={toolbarOptions}
        selectableRows

      ></DataTable>
    </div>
  );
}

export default Supplier2;
