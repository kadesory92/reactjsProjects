import React,{useState} from 'react';

const FormAddOperator = ({addOperator,isSubmited}) => {
    const [operator, setNewOpearator]=useState('');

    const handleAddOperator=(e)=>{
        e.preventDefault()
        addOperator(operator)
        setNewOpearator('')
    }


    return (
        <div>
            <form className="mt-3" onSubmit={handleAddOperator} >
                <div className="card card-body">
                    <div className="form-group">
                        <label htmlFor="txtAmount">New operator:</label>
                        <input type="text" value={operator} onChange={(e)=>setNewOpearator(e.target.value)} className="form-control" />
                        <button className="btn btn-primary mt-2">Add</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormAddOperator;