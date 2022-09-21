import React from "react";
import { useState, useEffect } from "react";
import { List } from "./List";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addBooks,
  deleteBooks,
  updateBooks,
} from "../features/booksCRUD";

const getData = () => {
  const data = localStorage.getItem("booklist");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

//save id when page refreshed
const idIncreament = () => {
  const data2 = localStorage.getItem("id");
  if (data2) {
    return JSON.parse(data2);
  } else {
    return [];
  }
};

function Form() {
  const dispatch = useDispatch();
  const listBooks = useSelector((state) => state.books.books);
  const count = useSelector((state) => state.counter.value);
  const [books, setBooks] = useState(getData());

  //default id just a random number to tell the data type, what ever the default is the id will still start from 0 because useeffect from saveid
  const [id, setID] = useState(0);
  console.log("sss", id);

  const [saveid, setSaveid] = useState(idIncreament());
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [edited, setEdited] = useState(null);

  const handleAddBookSubmit = (e) => {
    e.preventDefault();

    let book = {
      id,
      title,
      author,
    };

    if (!title && !author) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Judul Buku dan Nama Penulis Harus di Isi",
      });
    } else if (!title && author) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Judul Buku Harus di Isi",
      });
    } else if (title && !author) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Nama Penulis Harus di Isi",
      });
    } else {
      if (!edited) {
        // setBooks([...books,book])

        //increament for id so data never has same id and id start consecutive from 0 (not random)
        setID(id + 1);
        dispatch(addBooks(book));

        setTitle("");
        setAuthor("");
        window.location.reload();
      } else {
        console.log("ini", id);

        editBook(edited.id);
        window.location.reload();
      }
    }
  };

  const deleteBook = (id) => {
    dispatch(deleteBooks({ id: id }));
    window.location.reload();
  };

  const getBook = (id) => {
    setID((prevValue) => prevValue);
    const editBooks = listBooks.find((element, index) => {
      return element.id === id;
    });

    setEdited(editBooks);
  };

  const editBook = (id) => {
    const judul = title;
    const penulis = author;

    let newData = {
      title: judul,
      author: penulis,
      id: edited.id,
    };
  

    dispatch(updateBooks(newData));

    window.location.reload();
  };

  useEffect(() => {
    if (edited) {
      console.log("ac", edited);
      setTitle(edited.title);
      setAuthor(edited.author);
    } else {
    }

    localStorage.setItem("booklist", JSON.stringify(books));
  }, [books, edited]);

  //restore id from last saved id once after page refreshed
  useEffect(() => {
    setID(Number(saveid));
  }, []);

  //save last id every time id change
  useEffect(() => {
    console.log("ya", id);
    localStorage.setItem("id", JSON.stringify(id));
  }, [id]);

  return (
    <>
      <div className="block h-auto  bg-github-darker-blue flex space-x-20">
        <div className="h-96 mb-96 mt-60 w-0"></div>
        <div className="mt-12 box-border border-github-border h-64 w-64 p-4 border-2 ...">
          <div className="flex">
            <form
              className="text-white space-y-8 w-40 ml-4"
              onSubmit={handleAddBookSubmit}
            >
              <div className="text-white">
                <label> Judul </label>
                <input
                  className="text-black p-1"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="text-white ">
                <label> Penulis </label>
                <input
                  className="text-black p-1"
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>

              <button
                value={id}
                onClick={(e) => setID.Number(e.target.value)}
                type="submit"
                className="ml-8 bg-github-darker-grey hover:bg-github-border  text-github-another-grey font-bold  px-8 w-mid2 h-8 mb-20  rounded-lg"
              >
                Tambah
              </button>
            </form>

            <div className=" w-80 space-x-4 text-white ml-40">
              {Number(count) > 0 && (
                <>
                  <div className="flex space-x-32">
                    <div className="w-20 ml-3">Judul Buku</div>

                    <div className="">Penulis</div>
                  </div>

                  <div className="mt-4">
                    <List deleteBook={deleteBook} editBook={getBook}></List>
                  </div>
                </>
              )}
            </div>

            <div className=" flex text-white ml-40">
              {Number(count) < 1 && <div className="w-40">Belum ada buku</div>}
              {/* <p className="taskName">
                                    <span className="textBold">Judul :</span>
                                </p>
                                <p className="taskDate"><span className="textBold">Penulis : </span> </p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
