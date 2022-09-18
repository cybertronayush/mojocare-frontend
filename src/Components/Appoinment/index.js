import React, { useEffect, useState } from "react";
import { api } from "../../api";
import { useParams } from "react-router-dom";

function Appoinment({ props }) {
  const { id } = useParams();
  const [form, setForm] = useState({});

  var todayDate = new Date().toISOString().slice(0, 10);
  const onSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    api.getAppoinmentById(id).then((res) => {
      setForm(res);
    });
  }, [id]);
 
  console.log(id);

  return (
    <>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1 flex flex justify-center items-center">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Appoinment Details
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Please Fill the All the Appoinment details and check Slots of
              Doctor.
            </p>
          </div>
        </div>
        {id == undefined ? (
          <div className="mt-100 md:col-span-2 md:mt-0 ">
            <form onSubmit={onSubmit}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        defaultValue={form.name}
                        name="name"
                        id="first-name"
                        autoComplete="given-name"
                        required="true"
                        onChange={(e) => {
                          setForm({ ...form, name: e.target.value });
                        }}
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Number
                      </label>
                      <input
                        type="tel"
                        name="number"
                        defaultValue={form.number}
                        id="number"
                        onChange={(e) => {
                          setForm({ ...form, number: e.target.value });
                        }}
                        autoComplete="number"
                        required="true"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email"
                        defaultValue={form.email}
                        id="email-address"
                        autoComplete="email"
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        required="true"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Doctors
                      </label>
                      <select
                        id="doctor"
                        name="doctor"
                        defaultValue={form.doctor}
                        onChange={(e) =>
                          setForm({ ...form, doctor: e.target.value })
                        }
                        required="true"
                        autoComplete="doctor-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-6 lg:col-span-6">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Health Issue
                      </label>
                      <textarea
                        type="text"
                        name="issue"
                        defaultValue={form.issue}
                        onChange={(e) =>
                          setForm({ ...form, issue: e.target.value })
                        }
                        id="issue"
                        required="true"
                        autoComplete="issue"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Time-Schedule
                      </label>
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        id="region"
                        defaultValue={form.date}
                        min={todayDate}
                        required="true"
                        max="2022-09-22"
                        onChange={(e) =>
                          setForm({ ...form, date: e.target.value })
                        }
                        autoComplete="address-level1"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Time
                      </label>
                      <input
                        type={"time"}
                        name="time"
                        id="time"
                        min="09:00"
                        max="17:00"
                        defaultValue={form.time}
                        onChange={(e) =>
                          setForm({ ...form, time: e.target.value })
                        }
                        autoComplete="address-level1"
                        required="true"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        required="true"
                        defaultValue={form.address}
                        onChange={(e) =>
                          setForm({ ...form, address: e.target.value })
                        }
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        ) : (
          <div className="mt-100 md:col-span-2 md:mt-0 ">
            <form onSubmit={onSubmit}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        defaultValue={form.name}
                        name="name"
                        id="first-name"
                        autoComplete="given-name"
                      
                        onChange={(e) => {
                          setForm({ ...form, name: e.target.value });
                        }}
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Number
                      </label>
                      <input
                        type="tel"
                        name="number"
                        defaultValue={form.number}
                        id="number"
                        onChange={(e) => {
                          setForm({ ...form, number: e.target.value });
                        }}
                        autoComplete="number"
                        
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email"
                        defaultValue={form.email}
                        id="email-address"
                        autoComplete="email"
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                 
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Doctors
                      </label>
                      <select
                        id="doctor"
                        name="doctor"
                        defaultValue={form.doctor}
                        onChange={(e) =>
                          setForm({ ...form, doctor: e.target.value })
                        }
                     
                        autoComplete="doctor-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-6 lg:col-span-6">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Health Issue
                      </label>
                      <textarea
                        type="text"
                        name="issue"
                        defaultValue={form.issue}
                        onChange={(e) =>
                          setForm({ ...form, issue: e.target.value })
                        }
                        id="issue"
                        autoComplete="issue"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Time-Schedule
                      </label>
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        id="region"
                        defaultValue={form.date}
                        min={todayDate}
                       
                        max="2022-09-22"
                        onChange={(e) =>
                          setForm({ ...form, date: e.target.value })
                        }
                        autoComplete="address-level1"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Time
                      </label>
                      <input
                        type={"time"}
                        name="time"
                        id="time"
                        min="09:00"
                        max="17:00"
                        defaultValue={form.time}
                        onChange={(e) =>
                          setForm({ ...form, time: e.target.value })
                        }
                        autoComplete="address-level1"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium text-gray-700"
                      >
                      Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        defaultValue={form.address}
                        onChange={(e) =>
                          setForm({ ...form, address: e.target.value })
                        }
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
      {/* </div> */}

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="mt-5 md:col-span-2 md:mt-0">
          </div>
        </div>
      </div>
    </>
  );
}

export default Appoinment;
