import React from "react";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../features/postSlice";
function PostDetail() {
  let params = useParams();
  const getPost = useSelector((state) => state.post.entities);
  const dispatch = useDispatch();
  const showData = () => {
    dispatch(fetchData());
  };
  let data =
    getPost.data &&
    getPost.data.find((element) => element.id === Number(params?.id));
    console.log ("axs", data)

  return (
    <>
      <div className=" block h-auto w-full  bg-github-darker-blue flex space-x-20 ">
        <div className="h-96 mb-96 mt-60 w-0"></div>
        <div className="text-white ml-4 mt-8">
          <button onClick={showData} className="text-white">
            Show Detail
          </button>
          <tr>
            <div className=" px-1 py-3 text-white">
              {" "}
              Title : {data && data.title}
              
            </div>

            <div className=" px-1 py-3"> Desc : {data && data.body}</div>
          </tr>
        </div>
      </div>
    </>
  );
}

export default PostDetail;
