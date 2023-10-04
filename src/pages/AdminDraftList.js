import React, { Fragment } from "react";

import Adminsidebar from "../components/Adminsidebar";
import AdminTopnav from "../components/AdminTopnav";
import Adminfooter from "../components/Adminfooter";
import Pagination from "../components/Pagination";
import "../scss/pages/admin-product-list.scss";
import DraftCoursesList from "../features/courses/DraftCoursesList";

const AdminDraftList = () => {
  return (
    <Fragment>
      <div id="wrapper">
        <Adminsidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <AdminTopnav />

            <div className="container px-3 py-4">
              <div className="row">
                <div className="col-lg-12 mt-4">
                  <div className="card border-0 mt-2 rounded-10">
                    <div className="card-body d-flex px-4 pb-0 pt-4">
                      <h4 className="font-xss text-grey-800 mt-3 fw-700">
                        Lista de cursos sin publicar
                      </h4>
                    </div>
                    <div className="card-body p-4">
                      <div className="table-responsive">
                        <table className="table table-admin mb-0">
                          <thead className="bg-greylight rounded-10 ovh">
                            <tr>
                              <th className="border-0"></th>
                              <th className="border-0" scope="col">
                                Name
                              </th>
                              <th className="border-0" scope="col">
                                Price
                              </th>
                              <th className="border-0" scope="col">
                                Category
                              </th>
                              <th scope="col" className="text-right border-0">
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <DraftCoursesList />
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <Pagination divClass="pagination justify-content-center mt-5" />
                </div>
              </div>
            </div>

            <Adminfooter />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AdminDraftList;
