import React from "react";

const Page = (props) => {
  const { movies, total, limit, setPage } = props;

  const totalPages = Math.ceil(total / limit);

  const onClick = (newPage) => {
    setPage(newPage + 1);
  };

  return (
    <>
      <div className="container border text-center border-success py-4">
        <div className="py-3">
          <div className="row bg-light text-center py-2 shadow">
            <div className="col-md-6">
              <h5>
                <i>
                  <u>Title</u>
                </i>
              </h5>
            </div>
            <div className="col-md-3">
              <h5>
                <i>
                  <u>Genre</u>
                </i>
              </h5>
            </div>
            <div className="col-md-3">
              <h5>
                <i>
                  <u>Rating</u>
                </i>
              </h5>
            </div>
          </div>
          {movies.map((movie) => (
            <div className="form-check bg-light shadow my-3" key={movie._id}>
              <div className="row">
                <div className="col-md-2">
                  <img src={movie.image} className="img-fluid p-2" alt="..." />
                </div>
                <div className="col-md-4 d-flex align-items-center">
                  {movie.name}, {movie.year}
                </div>
                <div className="col-md-3 d-flex align-items-center">
                  {movie.genre.map((genre, index) => (
                    <p key={genre}>
                      {genre}
                      {index !== movie.genre.length - 1 && "/"}
                    </p>
                  ))}
                </div>
                <div className="col-md-3 d-flex align-items-center">
                  <i
                    className="fa fa-star-o mr-2 fa-2x text-warning"
                    aria-hidden="true"
                  ></i>
                  {movie.rating}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className="border-top border-success">
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center mb-1 mt-4">
              <li className="page-item">
                <a className="page-link" href="/" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              {totalPages > 0 &&
                [...Array(totalPages)].map((val, index) => (
                  <li className="page-item">
                    <a
                      className="page-link"
                      key={index}
                      onClick={() => onClick(index)}
                      href="/"
                    >
                      {index + 1}
                    </a>
                  </li>
                ))}
              <li className="page-item">
                <a className="page-link" href="/" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Page;
