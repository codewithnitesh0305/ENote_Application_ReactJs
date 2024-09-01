import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { DeleteNotes, GetAllNotes } from "../Services/ApiCall";

function AllNotes() {
    const [notes, setAllNotes] = useState([]);
    useEffect(()=>{
        GetAllNotes().then(response => {
            setAllNotes(response.data);
        }).catch(error => {
            console.log(error);
        })
    },[])
   
    const navigate = useNavigate();
    function updateNotes(id){
        navigate(`/updateNotes/${id}`)
    }
    function deleteNotes(id){
        console.log("Id: ",id);
        DeleteNotes(id).then(response =>{
            GetAllNotes();
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }
    return (
        <div className="container-fluid p-2">
            <h2 className="text-center">All Notes</h2>
            <div className="row">
                <div className="col-md-10 offset-md-1 mt-2">
                    {
                        notes.map(note =>
                            <div className="card shadow p-3 mb-5 bg-body rounded">
                                <div className="card-body">
                                    <p><b>Tile: {note.title}</b></p>
                                    <p>Content: {note.description}</p>
                                    <p>Date: {note.date}</p>
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-primary" style={{ marginRight: "5px" }} onClick={() => updateNotes(note.id)}>Update</button>
                                    <button className="btn btn-danger" onClick={() => deleteNotes(note.id)}>Delete</button>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    )
}
export default AllNotes;