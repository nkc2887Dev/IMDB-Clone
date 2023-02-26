import React from "react";

const Filter = (props) => {

  const { setSearch, sort, setSort, genres, genre, setGenre } = props;

  const onSelectChange = ({ currentTarget: input }) => {
    setSort({ sort: input.value, order: sort.order });
  };

  const onArrowChange = () => {
    if (sort.order === "asc") {
      setSort({ sort: sort.sort, order: "desc" });
    } else {
      setSort({ sort: sort.sort, order: "asc" });
    }
  };

  const onChangeFilter = ({ currentTarget: input }) => {
    if (input.checked) {
      const state = [...genre, input.value];
      setGenre(state);
    } else {
      const state = genre.filter((val) => val !== input.value);
      setGenre(state);
    }
  };
  return (
    <>
      <div className="container border border-success py-4">
        {/* Search */}
        <form className="form-inline my-4 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={({ currentTarget : input }) => setSearch(input.value)}
          />
        </form>

        {/* Sort By */}
        <div className="pt-4">
          <h5>
            <i>
              <u>Short By</u>
            </i>
          </h5>
          <select
            class="custom-select custom-select-sm w-50"
            dafaultValue={sort.sort}
            onChange={onSelectChange}
          >
            <option value="year">Year</option>
            <option value="rating">Rating</option>
          </select>
          <button className="btn btn-light btn-sm ml-2 border">
            <i
              class="fa fa-arrows-h"
              onClick={onArrowChange}
              aria-hidden="true"
            ></i>
          </button>
        </div>

        {/* Filter By Genre */}
        <div className="py-5">
          <div>
            <h5>
              <i>
                <u>Filter By Genre</u>
              </i>
            </h5>
          </div>
          <div className="form-check">
            {genres.map((genre) => (
              <div className="" key={genre}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={genre}
                  id="defaultCheck"
                  onChange={onChangeFilter}
                />
                <label className="form-check-label" htmlFor="defaultCheck">
                  {genre}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
