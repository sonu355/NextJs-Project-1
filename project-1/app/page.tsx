"use client"
import  { useEffect, useState, FormEvent} from "react"
import { supabase } from "@/lib/supabase"
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css"

interface Student{
  id?:string,
  name:string,
  email:string,
  phone_number:string,
  gender:string
}

export default function Home() {

  const [students, setStudents] = useState<Student[]>([])
  const [form, setForm] = useState<Student>({
    name: "",
    email: "",
    phone_number: "",
    gender: "Male"
  })
  const [editId, setEditId] = useState<string | null>(null)

  useEffect(() => {
    fetchStudents()
  }, [])

  //form submission
  async function handleFormSubmit(event: FormEvent<HTMLFormElement>){
    event.preventDefault()

    console.log(form)

    const {error} = await supabase.from<Student>("students").insert( [form] )

    if (error) {
      toast.error(`failed to create ${error.message}`)
    } else {
      toast.success("students added successfully")
    }
    setForm({
      name: "",
      email: "",
      phone_number: "",
      gender: "Male"
    })
  }

  async function fetchStudents(){
    const { data, error } = await supabase.from("students").select("*")
    if (error) {
      toast.error(`Failed to read data ${error.message}`)
    } else {
      console.log(data)
      setStudents( data || [])
    }
  }
 
  return (
    <>
      <div className="container my-5">
        <Toaster />
        <h3 className="mb-4">Student Management</h3>
        <div className="row">
            {/** Left Side form*/}
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-body">
                  <form onSubmit={ handleFormSubmit }>
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input type="text" value={ form.name } className="form-control" onChange={ (e) => setForm ({ 
                        ...form,
                        name: e.target.value
                      })}/>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input type="email" value={ form.email } className="form-control" onChange={
                        (e) => setForm({
                          ...form,
                          email: e.target.value
                        }) 
                      }/>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Phone Number</label>
                      <input type="text" value={ form.phone_number} className="form-control" onChange={
                        (e) => setForm({
                          ...form,
                          phone_number: e.target.value
                        })
                      }/>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Gender</label>
                      <select className="form-select" value={ form.gender } onChange={
                        (e) => setForm({
                          ...form,
                          gender: e.target.value
                        })
                      }>
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
                      <td>male</td>
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
