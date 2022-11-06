import { React, useEffect, useState } from "react";
import axios from "axios";
import Read from "./Read";

function Reads() {
  const [reads, setReads] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:8080/read",
    }).then((res) => setReads(res.data.reads));
  }, []);

  return (
    <>
      <div className="flex flex-col md:w-3/4 gap-5 p-6">
        {reads?.map((read, index) => (
          <div
            key={index}
            className="w-full hover:scale-105 hover:shadow-md lg:hover:shadow-xl transition duration-500 hover:shadow-slate-400 rounded-xl hover:border"
          >
            <Read data={read} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Reads;
