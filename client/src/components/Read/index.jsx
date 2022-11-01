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

  const staticReads = [
    {
      headline: "Lorem ipsum",
      coverPicture:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro laudantium officiis, provident accusantium, velit praesentium quam sequi illum laboriosam impedit id eveniet est, maiores rerum illo animi ut doloribus labore?",
    },
    {
      headline: "Lorem ipsum",
      coverPicture:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro laudantium officiis, provident accusantium, velit praesentium quam sequi illum laboriosam impedit id eveniet est, maiores rerum illo animi ut doloribus labore?",
    },
    {
      headline: "Lorem ipsum",
      coverPicture:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro laudantium officiis, provident accusantium, velit praesentium quam sequi illum laboriosam impedit id eveniet est, maiores rerum illo animi ut doloribus labore?",
    },
    {
      headline: "Lorem ipsum",
      coverPicture:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro laudantium officiis, provident accusantium, velit praesentium quam sequi illum laboriosam impedit id eveniet est, maiores rerum illo animi ut doloribus labore?",
    },
  ];

  return (
    <>
      <div className="flex flex-col md:w-3/4 gap-5 p-6">
        {staticReads?.map((read, index) => (
          <div
            key={index}
            className="w-full hover:scale-105 lg:hover:scale-110 hover:shadow-md lg:hover:shadow-xl transition duration-500 hover:shadow-slate-400 rounded-xl hover:border"
          >
            <Read data={read} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Reads;
