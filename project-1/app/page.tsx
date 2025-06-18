

export default function Home() {
  return (
    <>
      <div className="container my-5">
        <h3 className="mb-4">Student Management</h3>
        <div className="row">
            {/** Left Side form*/}
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-body">
                  <form>
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input type="text" className="form-control"/>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input type="email" className="form-control"/>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Phone Number</label>
                      <input type="text" className="form-control"/>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Gender</label>
                      <select className="form-select">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <button className="btn btn-primary w-100">Add</button>
                  </form>
                </div>
              </div>
            </div>
            {/** Right Side form*/}
            <div className="col-md-8">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead className="table-light">
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Gender</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>harshal</td>
                      <td>xys@gmail.com</td>
                      <td>9881944751</td>
                      <td>gay</td>
                      <td>
                        <button className="btn btn-warning btn-sm me-2">Edit</button>
                        <button className="btn btn-danger btn-sm me-2">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}
