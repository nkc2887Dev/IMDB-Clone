import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./Components/Navbar";
import Page from "./Components/Page";
import Filter from "./Components/Filter";

const App = () => {

  let base_url = "http://localhost:8080/api/movies";

  const [obj, setObj] = useState({});
  const [sort, setSort] = useState({ sort: "rating", order: "desc" });
  const [genre, setGenre] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getMovies = async () => {
      try {
        const url = `${base_url}?page=${page}&sort=${sort.sort},${
          sort.order
        }&genre=${genre.toString()}&search=${search}`;
        const { data } = await axios.get(url);
        setObj(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, [base_url, page, sort, genre, search]);
  // console.log(data.page)

  return (
    <>
      <Navbar />
      <div className="container py-5">
        <div className="row">
          <div className="col-md-8 col-12">
            <Page
              movies={obj.movies ? obj.movies : []}
              page={page}
              limit={obj.limit ? obj.limit : 0}
              total={obj.total ? obj.total : 0}
              setPage={(page) => setPage(page)}
            />
          </div>
          <div className="col-md-4 col-12">
            <Filter
              setSearch={(search) => setSearch(search)}
              sort={sort}
              setSort={(sort) => setSort(sort)}
              genre={genre}
              genres={obj.genres ? obj.genres : []}
              setGenre={(genre) => setGenre(genre)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
