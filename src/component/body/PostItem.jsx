import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../features/postSlice";
function PostItem() {
  const getPost = useSelector((state) => state.post.entities);
  const dispatch = useDispatch();
  const showData = () => {
    dispatch(fetchData());
  };

  const navigation = useNavigate();

  return (
    <>
      <div className="block h-auto  bg-github-darker-blue flex space-x-20">
        <div className="h-96 mb-96 mt-60 w-0"></div>
      
        <div className="text-white ml-4 mt-8">
        <button onClick={showData} className="text-white mb-10">Show Data</button>
          {getPost?.map((post) => (
            <tr className="bg-github-blue-b ">
              <td className=" px-1 py-3"> Title : {post.title} </td>

              <button
                onClick={() => navigation(`/${post.id}`)}
                className="mr-4  bg-github-darker-grey hover:bg-github-border  text-github-another-grey font-bold  w-20 h-6 rounded-lg"
              >
                Detail
              </button>
            </tr>
          ))}
        </div>
      </div>
    </>
  );
}

export default PostItem;
