import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AddNotes, NotesById, UpdateNotes } from "../Services/ApiCall";

function SaveOrUpdate(){
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');

    const {id} = useParams();
    function pageTitle(){
        if(id){
            return <h3 className="text-center">Update Notes</h3>
        }else{
            return <h3 className="text-center">Save Notes</h3>
        }
    }

    function handleTitle(e){
        setTitle(e.target.value);
    }
    function handleDescription(e){
        setDescription(e.target.value);
    }
    useEffect(()=>{
        if(id){
            console.log(id)
            NotesById(id).then((response) => {
            setTitle(response.data.title);
            setDescription(response.data.description);
            }).catch(error => {
                console.log(error)
            })
        }
    },[id])
    function saveNotes(e){
        e.preventDefault();
        const data = {title,description};
        if(id){
            UpdateNotes(id,data).then((response =>{
                console.log(response.data);
            })).catch(error =>{
                console.log(error);
            })
        }else{
            AddNotes(data).then(response =>{
                console.log(response.data);
            }).catch(error =>{
                console.log(error);
            })
            console.log(data)
        }
    }
    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-10 offset-md-1">
                    {pageTitle()}
                    <div className="card">
                        <div className="card-body">
                        <form action="saveNotes" method="post">
								<div class="md-3">
									<label>Title</label>
									<input type="text"
                                     name="title"
                                     class="form-control"
                                     value={title}
                                     onChange={handleTitle}/>
								</div>
								<div className="md-3">
									<label>Description</label>
									<textarea rows="6"
                                     cols="1"
                                     name="description"
                                     class="form-control"
                                     maxlength="500"
                                     value={description}
                                     onChange={handleDescription}></textarea>
								</div>
								<button className="btn btn-primary mt-4" onClick={saveNotes}>Save</button>
							</form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SaveOrUpdate;