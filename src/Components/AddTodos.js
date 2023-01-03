import React, { useState } from 'react'

export default function AddTodos(props) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            document.getElementById("textwarn").classList.toggle("d-none");
            return null
        }
        props.addTodo(title, desc);
        setTitle("");
        setDesc("");
    }

    return (
        <div className='container my-3'>
            <h3 className="text-center my-3">{props.compntheading}</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">{props.input1}</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">{props.input2}</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" />
                </div>
                <div className="d-flex">
                    <button type="submit" className="btn btn-success btn-sm">{props.btn}</button>
                    <div id="textwarn" className="form-text d-none mx-2">The Title and Description cannot be blank</div>
                </div>
            </form></div>
    )
}