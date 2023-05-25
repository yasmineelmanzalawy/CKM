import React from "react";
import Swal from "sweetalert2";

import soura from "../data/photo_5873190094939209046_y.jpg";

const Menu = () => {
  const Dishinfo = () => {
    Swal.fire({
      title: "Dish Details",
      text: "updatable dish info",
      showCancelButton: true,
      showDenyButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  const DeleteDish = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <div>
      <div className="flex justify-center">
        <a className="display: block text-center bg-[#f0f1f5] hover:bg-[#ebeced] w-[100px] rounded-[20px] p-[5px]" href="/menusetup">
          Add Dish
        </a>
      </div>
      <div className="flex flex-wrap gap-[80px] mx-[50px] my-[30px]  rounded-4 justify-center">
        <div
          class="card"
          className="w-[270px] bg-[#f0f1f5] hover:bg-[#ebeced] rounded-[20px]"
        >
          <img
            src={soura}
            class="card-img-top"
            alt="el mafrod souret taba2 bs el 3andi baa"
            className="px-4 py-6 my-6"
          />
          <div class="card-body">
            <h5
              class="card-title"
              className="text-center text-[18px] mt-[-30px] pb-4 text-[#575859] underline underline-offset-1"
            >
              Taba2 mn el menu
            </h5>
            <p class="card-text" className="text-center pb-4 px-2.5 ">
              {" "}
              info el taba2 ...info el taba2 ... info el taba2 ... info el taba2
              ... info el taba2 ..
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-4">
              <div>
                <button
                  className="text-[#575859] hover:text-[#202021]"
                  onClick={Dishinfo}
                >
                  Dish Details
                </button>
              </div>
              <div>
                <button
                  className="text-[red] underline underline-offset-1 hover:text-[#d4000a]"
                  onClick={DeleteDish}
                >
                  Delete Dish
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          class="card"
          className="w-[270px] bg-[#f0f1f5] hover:bg-[#ebeced] rounded-[20px]"
        >
          <img
            src={soura}
            class="card-img-top"
            alt="el mafrod souret taba2 bs el 3andi baa"
            className="px-4 py-6 my-6"
          />
          <div class="card-body">
            <h5
              class="card-title"
              className="text-center text-[18px] mt-[-30px] pb-4 text-[#575859] underline underline-offset-1"
            >
              Taba2 mn el menu
            </h5>
            <p class="card-text" className="text-center pb-4 px-2.5 ">
              {" "}
              info el taba2 ...info el taba2 ... info el taba2 ... info el taba2
              ... info el taba2 ..
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-4">
              <div>
                <button
                  className="text-[#575859] hover:text-[#202021]"
                  onClick={Dishinfo}
                >
                  Dish Details
                </button>
              </div>
              <div>
                <button
                  className="text-[red] underline underline-offset-1 hover:text-[#d4000a]"
                  onClick={DeleteDish}
                >
                  Delete Dish
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          class="card"
          className="w-[270px] bg-[#f0f1f5] hover:bg-[#ebeced] rounded-[20px]"
        >
          <img
            src={soura}
            class="card-img-top"
            alt="el mafrod souret taba2 bs el 3andi baa"
            className="px-4 py-6 my-6"
          />
          <div class="card-body">
            <h5
              class="card-title"
              className="text-center text-[18px] mt-[-30px] pb-4 text-[#575859] underline underline-offset-1"
            >
              Taba2 mn el menu
            </h5>
            <p class="card-text" className="text-center pb-4 px-2.5 ">
              {" "}
              info el taba2 ...info el taba2 ... info el taba2 ... info el taba2
              ... info el taba2 ..
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-4">
              <div>
                <button
                  className="text-[#575859] hover:text-[#202021]"
                  onClick={Dishinfo}
                >
                  Dish Details
                </button>
              </div>
              <div>
                <button
                  className="text-[red] underline underline-offset-1 hover:text-[#d4000a]"
                  onClick={DeleteDish}
                >
                  Delete Dish
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          class="card"
          className="w-[270px] bg-[#f0f1f5] hover:bg-[#ebeced] rounded-[20px]"
        >
          <img
            src={soura}
            class="card-img-top"
            alt="el mafrod souret taba2 bs el 3andi baa"
            className="px-4 py-6 my-6"
          />
          <div class="card-body">
            <h5
              class="card-title"
              className="text-center text-[18px] mt-[-30px] pb-4 text-[#575859] underline underline-offset-1"
            >
              Taba2 mn el menu
            </h5>
            <p class="card-text" className="text-center pb-4 px-2.5 ">
              {" "}
              info el taba2 ...info el taba2 ... info el taba2 ... info el taba2
              ... info el taba2 ..
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-4">
              <div>
                <button
                  className="text-[#575859] hover:text-[#202021]"
                  onClick={Dishinfo}
                >
                  Dish Details
                </button>
              </div>
              <div>
                <button
                  className="text-[red] underline underline-offset-1 hover:text-[#d4000a]"
                  onClick={DeleteDish}
                >
                  Delete Dish
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          class="card"
          className="w-[270px] bg-[#f0f1f5] hover:bg-[#ebeced] rounded-[20px]"
        >
          <img
            src={soura}
            class="card-img-top"
            alt="el mafrod souret taba2 bs el 3andi baa"
            className="px-4 py-6 my-6"
          />
          <div class="card-body">
            <h5
              class="card-title"
              className="text-center text-[18px] mt-[-30px] pb-4 text-[#575859] underline underline-offset-1"
            >
              Taba2 mn el menu
            </h5>
            <p class="card-text" className="text-center pb-4 px-2.5 ">
              {" "}
              info el taba2 ...info el taba2 ... info el taba2 ... info el taba2
              ... info el taba2 ..
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-4">
              <div>
                <button
                  className="text-[#575859] hover:text-[#202021]"
                  onClick={Dishinfo}
                >
                  Dish Details
                </button>
              </div>
              <div>
                <button
                  className="text-[red] underline underline-offset-1 hover:text-[#d4000a]"
                  onClick={DeleteDish}
                >
                  Delete Dish
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          class="card"
          className="w-[270px] bg-[#f0f1f5] hover:bg-[#ebeced] rounded-[20px]"
        >
          <img
            src={soura}
            class="card-img-top"
            alt="el mafrod souret taba2 bs el 3andi baa"
            className="px-4 py-6 my-6"
          />
          <div class="card-body">
            <h5
              class="card-title"
              className="text-center text-[18px] mt-[-30px] pb-4 text-[#575859] underline underline-offset-1"
            >
              Taba2 mn el menu
            </h5>
            <p class="card-text" className="text-center pb-4 px-2.5 ">
              {" "}
              info el taba2 ...info el taba2 ... info el taba2 ... info el taba2
              ... info el taba2 ..
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-4">
              <div>
                <button
                  className="text-[#575859] hover:text-[#202021]"
                  onClick={Dishinfo}
                >
                  Dish Details
                </button>
              </div>
              <div>
                <button
                  className="text-[red] underline underline-offset-1 hover:text-[#d4000a]"
                  onClick={DeleteDish}
                >
                  Delete Dish
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          class="card"
          className="w-[270px] bg-[#f0f1f5] hover:bg-[#ebeced] rounded-[20px]"
        >
          <img
            src={soura}
            class="card-img-top"
            alt="el mafrod souret taba2 bs el 3andi baa"
            className="px-4 py-6 my-6"
          />
          <div class="card-body">
            <h5
              class="card-title"
              className="text-center text-[18px] mt-[-30px] pb-4 text-[#575859] underline underline-offset-1"
            >
              Taba2 mn el menu
            </h5>
            <p class="card-text" className="text-center pb-4 px-2.5 ">
              {" "}
              info el taba2 ...info el taba2 ... info el taba2 ... info el taba2
              ... info el taba2 ..
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-4">
              <div>
                <button
                  className="text-[#575859] hover:text-[#202021]"
                  onClick={Dishinfo}
                >
                  Dish Details
                </button>
              </div>
              <div>
                <button
                  className="text-[red] underline underline-offset-1 hover:text-[#d4000a]"
                  onClick={DeleteDish}
                >
                  Delete Dish
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          class="card"
          className="w-[270px] bg-[#f0f1f5] hover:bg-[#ebeced] rounded-[20px]"
        >
          <img
            src={soura}
            class="card-img-top"
            alt="el mafrod souret taba2 bs el 3andi baa"
            className="px-4 py-6 my-6"
          />
          <div class="card-body">
            <h5
              class="card-title"
              className="text-center text-[18px] mt-[-30px] pb-4 text-[#575859] underline underline-offset-1"
            >
              Taba2 mn el menu
            </h5>
            <p class="card-text" className="text-center pb-4 px-2.5 ">
              {" "}
              info el taba2 ...info el taba2 ... info el taba2 ... info el taba2
              ... info el taba2 ..
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-4">
              <div>
                <button
                  className="text-[#575859] hover:text-[#202021]"
                  onClick={Dishinfo}
                >
                  Dish Details
                </button>
              </div>
              <div>
                <button
                  className="text-[red] underline underline-offset-1 hover:text-[#d4000a]"
                  onClick={DeleteDish}
                >
                  Delete Dish
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          class="card"
          className="w-[270px] bg-[#f0f1f5] hover:bg-[#ebeced] rounded-[20px]"
        >
          <img
            src={soura}
            class="card-img-top"
            alt="el mafrod souret taba2 bs el 3andi baa"
            className="px-4 py-6 my-6"
          />
          <div class="card-body">
            <h5
              class="card-title"
              className="text-center text-[18px] mt-[-30px] pb-4 text-[#575859] underline underline-offset-1"
            >
              Taba2 mn el menu
            </h5>
            <p class="card-text" className="text-center pb-4 px-2.5 ">
              {" "}
              info el taba2 ...info el taba2 ... info el taba2 ... info el taba2
              ... info el taba2 ..
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-4">
              <div>
                <button
                  className="text-[#575859] hover:text-[#202021]"
                  onClick={Dishinfo}
                >
                  Dish Details
                </button>
              </div>
              <div>
                <button
                  className="text-[red] underline underline-offset-1 hover:text-[#d4000a]"
                  onClick={DeleteDish}
                >
                  Delete Dish
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          class="card"
          className="w-[270px] bg-[#f0f1f5] hover:bg-[#ebeced] rounded-[20px]"
        >
          <img
            src={soura}
            class="card-img-top"
            alt="el mafrod souret taba2 bs el 3andi baa"
            className="px-4 py-6 my-6"
          />
          <div class="card-body">
            <h5
              class="card-title"
              className="text-center text-[18px] mt-[-30px] pb-4 text-[#575859] underline underline-offset-1"
            >
              Taba2 mn el menu
            </h5>
            <p class="card-text" className="text-center pb-4 px-2.5 ">
              {" "}
              info el taba2 ...info el taba2 ... info el taba2 ... info el taba2
              ... info el taba2 ..
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-4">
              <div>
                <button
                  className="text-[#575859] hover:text-[#202021]"
                  onClick={Dishinfo}
                >
                  Dish Details
                </button>
              </div>
              <div>
                <button
                  className="text-[red] underline underline-offset-1 hover:text-[#d4000a]"
                  onClick={DeleteDish}
                >
                  Delete Dish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
