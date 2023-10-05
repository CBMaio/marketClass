import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { formatDistanceToNow, parseISO } from "date-fns";
import Pagination from "../../components/Pagination";
import { Modal, Button } from "react-bootstrap";

import { selectAllAuthors } from "../authors/authorsSlice";
import { fetchComments, selectAllComments } from "./commentsSlice";

import "../../scss/components/comment-list.scss";

const CommentList = () => {
  const dispatch = useDispatch();

  const comments = useSelector(selectAllComments);
  const authors = useSelector(selectAllAuthors);
  const commentsStatus = useSelector((state) => state.comments.status);

  useEffect(() => {
    if (commentsStatus === "idle") {
      dispatch(fetchComments());
    }
  }, [commentsStatus, dispatch]);

  if (!comments) return <div>No hay comentarios</div>;

  return (
    <div className="container px-3 py-4">
      <div className="row">
        <div className="col-lg-12 mt-4">
          <div className="card border-0 mt-2 rounded-10">
            <div className="card-body d-flex p-4 pb-0">
              <h4 className="font-xss text-grey-800 mt-3 fw-700">Review</h4>
              <select
                className="form-select ml-auto float-right border-0 font-xssss fw-600 text-grey-700 bg-transparent"
                aria-label="Default select example"
              >
                <option>Filtrar por</option>
                <option defaultValue="1">Pendientes</option>
                <option defaultValue="2">Aceptador</option>
                <option defaultValue="3">Rechazados</option>
                <option defaultValue="4">Ver todos</option>
              </select>
            </div>
            <div className="card-body p-4">
              <div className="table-responsive">
                <table className="table table-admin mb-0">
                  <thead className="bg-greylight rounded-10 ovh">
                    <tr>
                      <th className="border-0">Curso</th>
                      <th className="border-0" scope="col">
                        Nombre
                      </th>
                      <th className="border-0" scope="col">
                        Email
                      </th>
                      {/* <th className="border-0" scope="col">
                        Review
                      </th> */}
                      <th className="border-0" scope="col">
                        Estado
                      </th>

                      <th scope="col" className="text-end border-0">
                        Acción
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comments.map((value) => (
                      <tr key={value.id}>
                        <td>
                          <b>{value.course.title}</b>
                        </td>

                        <td>{value.user.name}</td>
                        <td>{value.user.email}</td>
                        {/* <td>
                            {value.star1 ? (
                              <img
                                src={`assets/images/${value.star1}`}
                                alt="icon"
                                className="float-start mr-1 w15"
                              />
                            ) : (
                              ""
                            )}
                            {value.star2 ? (
                              <img
                                src={`assets/images/${value.star2}`}
                                alt="icon"
                                className="float-start mr-1 w15"
                              />
                            ) : (
                              ""
                            )}
                            {value.star3 ? (
                              <img
                                src={`assets/images/${value.star3}`}
                                alt="icon"
                                className="float-start mr-1 w15"
                              />
                            ) : (
                              ""
                            )}
                            {value.star4 ? (
                              <img
                                src={`assets/images/${value.star4}`}
                                alt="icon"
                                className="float-start mr-1 w15"
                              />
                            ) : (
                              ""
                            )}
                            {value.star4 ? (
                              <img
                                src={`assets/images/${value.star4}`}
                                alt="icon"
                                className="float-start mr-1 w15"
                              />
                            ) : (
                              ""
                            )}
                          </td> */}
                        <td>
                          <span
                            className={`badge rounded-pill font-xsssss fw-700 pl-3 pr-3 lh-24 text-uppercase rounded-3 ls-2 bg-${value.status.toLowerCase()}`}
                          >
                            {value.status}
                          </span>
                        </td>
                        <td className="product-remove text-end">
                          <a href="/admin-review">
                            <i className="feather-edit me-1 font-xs text-grey-500"></i>
                          </a>
                          <Button className="bg-transparent border-0">
                            <i className="ti-trash font-xs text-danger"></i>
                          </Button>
                          {/* <Modal
                            {...this.props}
                            size="sm"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            show={this.state.location}
                          >
                            <Button
                              onClick={() => {
                                this.handleModel();
                              }}
                              className="btn-close z-index-5 posa right-0 top-0 mt-3 me-3 font-xss"
                            ></Button>
                            <Modal.Body className="text-center p-4">
                              <i className="ti-info-alt text-warning display4-size"></i>
                              <p className="text-grey-500 font-xsss mt-3 mb-4">
                                Are you sure you want to delete product?
                              </p>

                              <Button
                                onClick={() => {
                                  this.handleModel();
                                }}
                                className="border-0 btn rounded-6 lh-2 p-3 mt-0 mb-2 text-white bg-danger font-xssss text-uppercase fw-600 ls-3"
                              >
                                Yes, delete!
                              </Button>
                              <Button
                                onClick={() => {
                                  this.handleModel();
                                }}
                                className="border-0 btn rounded-6 lh-2 p-3 mt-0 mb-2 text-grey-600 bg-greylight font-xssss text-uppercase fw-600 ls-3 ms-1"
                              >
                                No, cancle!
                              </Button>
                            </Modal.Body>
                          </Modal> */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <Pagination divClass="pagination justify-content-center mt-5" />
        </div>
      </div>
    </div>
  );
};

export default CommentList;
