import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { fetchRequests, selectAllRequests } from "./requestsSlice";

import "../../scss/components/comment-list.scss";

const RequestsList = () => {
  const dispatch = useDispatch();
  const requests = useSelector(selectAllRequests);
  const requestsStatus = useSelector((state) => state.requests.status);

  const [commentsToShow, setCommentsToShow] = useState([]);
  const [selectedComment, setSelectedComment] = useState(null);
  const [isOpenCommentModal, setIsOpenCommentModal] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("ALL");

  const toggleCommentModal = (comment) => {
    setIsOpenCommentModal(!isOpenCommentModal);
    comment && setSelectedComment(comment);
  };

  useEffect(() => {
    if (requestsStatus === "idle") {
      dispatch(fetchRequests());
    }
  }, [requestsStatus, dispatch]);

  useEffect(() => {
    const data = !["PENDIENTE", "RECIBIDO", "BLOQUEADO"].includes(
      selectedFilter
    )
      ? requests
      : requests.filter(({ status }) => status === selectedFilter);

    setCommentsToShow(data);
  }, [selectedFilter, requests]);

  if (!commentsToShow) return <div>No hay comentarios</div>;

  return (
    <div className="container px-3 py-4">
      <div className="row">
        <div className="col-lg-12 mt-4">
          <div className="card border-0 mt-2 rounded-10">
            <div className="card-body d-flex p-4 pb-0">
              <h4 className="font-xss text-grey-800 mt-3 fw-700">
                Contrataciones
              </h4>
              <select
                className="form-select ml-auto float-right border-0 font-xssss fw-600 text-grey-700 bg-transparent"
                onChange={(e) => setSelectedFilter(e.target.value)}
              >
                <option>Filtrar por</option>
                <option value="PENDIENTE">Pendientes</option>
                <option value="RECIBIDO">Aceptados</option>
                <option value="BLOQUEADO">Rechazados</option>
                <option value="">Ver todos</option>
              </select>
            </div>
            <div className="card-body p-4">
              {!requests.length && (
                <div>No hay contrataciones para mostar </div>
              )}
              {!!requests.length && (
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
                        <th className="border-0" scope="col">
                          Estado
                        </th>

                        <th scope="col" className="text-end border-0">
                          Acción
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {commentsToShow.map((value) => (
                        <tr key={value.id}>
                          <td>
                            <b>{value.course.title}</b>
                          </td>
                          <td>{value.user.name}</td>
                          <td>{value.user.email}</td>
                          <td>
                            <span
                              className={`badge rounded-pill font-xsssss fw-700 pl-3 pr-3 lh-24 text-uppercase rounded-3 ls-2 bg-${value.status.toLowerCase()}`}
                            >
                              {value.status}
                            </span>
                          </td>
                          <td className="product-remove text-end comments-actions">
                            <Button
                              className="bg-transparent border-0 pr-0 course-action"
                              onClick={() => toggleCommentModal(value)}
                            >
                              <i className="ti-comment mr-1 font-xs text-grey-500"></i>
                              <span className="button-legend review-comment">
                                Revisar comentario
                              </span>
                            </Button>
                            <Button className="bg-transparent border-0 course-action">
                              <i className="ti-trash  font-xs text-danger"></i>
                              <span className="button-legend">Eliminar</span>
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {isOpenCommentModal && (
                    <div className="course-data-overlay">
                      <div className="course-data-modal p-4 rounded-lg col-lg-8">
                        <div className="close-btn" onClick={toggleCommentModal}>
                          <i className="text-white font-lg text-grey-400 feather-x"></i>
                        </div>
                        <div className="course-title pt-3">
                          <h1 className="text-grey-900 fw-700 mb-3 lh-3 text-center">
                            {selectedComment.course.title}
                          </h1>
                        </div>
                        <div className="course-modal-body">
                          <div>
                            <span>Usuario: </span>
                            <span>
                              <b>{selectedComment.user.name} </b>
                            </span>
                          </div>
                          <div>
                            <span>Email: </span>
                            <span>
                              <b>{selectedComment.user.email} </b>
                            </span>
                          </div>
                          <div>
                            <span>Comentario: </span>
                            <span>
                              <b>{selectedComment.content} </b>
                            </span>
                          </div>
                          <div>
                            <span>Estado del comentario: </span>
                            <span>
                              <b>{selectedComment.status} </b>
                            </span>
                          </div>

                          {selectedComment.status === "PENDIENTE" && (
                            <div className="mt-4 actions-container">
                              <Button className="col-12 bg-current border-0 action-btn filled-btn">
                                <span>Aceptar</span>
                              </Button>
                              <Button className="col-12 action-btn outline-btn">
                                <span>Rechazar</span>
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestsList;
