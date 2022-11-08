import { useSelector } from "react-redux";
import { Dialog, Transition, Switch } from "@headlessui/react";
import axios from "axios";
import { Fragment, useState } from "react";

export default function PetInfo({ isOpen, setIsOpen }) {
  const [gender, setGender] = useState(true);
  const [findMate, setFindMate] = useState(false);
  const [openToAdopt, setOpenToAdopt] = useState(false);
  const [petData, setPetData] = useState({
    name: "",
    animalType: "",
    detail: "",
    age: "",
    breed: "",
    isOpenToAdopt: openToAdopt,
    isOpenToMate: findMate,
    isMale: gender,
  });

  const reduxState = useSelector((globalState) => globalState.auth.user);

  const handleChange = (e) =>
    setPetData((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  function closeModal() {
    setIsOpen(false);
  }

  const submit = () => {
    axios({
      method: "POST",
      url: "http://localhost:8080/pet/add",
      data: {
        petDetails: { ...petData, owner: reduxState?._id },
        user: reduxState?._id,
      },
    });

    window.location.reload();

    setPetData({
      name: "",
      animalType: "",
      detail: "",
      age: "",
      breed: "",
      isMale: "",
    });

    closeModal();
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-50"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className="mt-2 flex flex-col gap-3 w-full">
                  <form className="flex flex-col gap-5">
                    <div className="w-full flex flex-col gap-2">
                      <label htmlFor="name">Name:</label>
                      <input
                        required
                        type="text"
                        id="name"
                        value={petData.name}
                        onChange={handleChange}
                        placeholder="Sparky"
                        className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <label htmlFor="animalType">Animal Type: </label>
                      <input
                        required
                        type="text"
                        id="animalType"
                        value={petData.animalType}
                        onChange={handleChange}
                        placeholder="dog,cats,rabbit,etc"
                        className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <label htmlFor="breed">Breed: </label>
                      <input
                        required
                        type="text"
                        id="breed"
                        value={petData.breed}
                        onChange={handleChange}
                        placeholder="Labrodor"
                        className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <label htmlFor="age">Age: </label>
                      <input
                        required
                        type="text"
                        id="age"
                        value={petData.age}
                        onChange={handleChange}
                        placeholder="3 years 4 months"
                        className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <label htmlFor="detail">Details: </label>
                      <textarea
                        id="detail"
                        value={petData.detail}
                        onChange={handleChange}
                        placeholder="this is a xyz, it is a playful and healthy..."
                        className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:border-amber-400"
                      ></textarea>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <label htmlFor="gender">Gender: </label>
                      <div className="flex items-center gap-5">
                        Male
                        <Switch
                          checked={gender}
                          onChange={setGender}
                          className={`${
                            gender ? "bg-pink-600" : "bg-sky-600"
                          } relative inline-flex h-[30px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                          {/* <span className="sr-only">Use setting</span> */}
                          <span
                            aria-hidden="true"
                            className={`${
                              gender ? "translate-x-6" : "translate-x-0"
                            } pointer-events-none inline-block h-[25px] w-[25px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                          />
                        </Switch>
                        Female
                      </div>
                    </div>
                    <div className="w-full flex gap-5">
                      <label htmlFor="companion">Find Companion: </label>
                      <Switch
                        checked={findMate}
                        onChange={setFindMate}
                        className={`${
                          findMate ? "bg-amber-600" : "bg-gray-400"
                        } relative inline-flex h-[30px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                      >
                        {/* <span className="sr-only">Use setting</span> */}
                        <span
                          aria-hidden="true"
                          className={`${
                            findMate ? "translate-x-6" : "translate-x-0"
                          } pointer-events-none inline-block h-[25px] w-[25px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                        />
                      </Switch>
                    </div>
                    <div className="w-full flex gap-5">
                      <label htmlFor="gender">Make open for adoption: </label>
                      <Switch
                        checked={openToAdopt}
                        onChange={setOpenToAdopt}
                        className={`${
                          openToAdopt ? "bg-amber-600" : "bg-gray-400"
                        } relative inline-flex h-[30px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                      >
                        {/* <span className="sr-only">Use setting</span> */}
                        <span
                          aria-hidden="true"
                          className={`${
                            openToAdopt ? "translate-x-6" : "translate-x-0"
                          } pointer-events-none inline-block h-[25px] w-[25px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                        />
                      </Switch>
                    </div>
                    <div>
                      <input
                        value="Add Pet"
                        type="submit"
                        onClick={submit}
                        className="w-full text-center bg-amber-400 text-white py-2 rounded-lg"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
