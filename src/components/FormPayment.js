import React,{useState} from 'react';

const FormPayment = ({selectedOperator,updateSelectedOperator}) => {

    const [txtOperator, setTxtOperator]=useState(selectedOperator)
    const [txtPhone, setTxtPhone]=useState('')
    const [txtAmount, setTxtAmount]=useState(0)
    const [txtPhoneErr,setTxtPhoneErr]=useState({})
    const [txtAmountErr,setTxtAmountErr]=useState({})
    

    const handleChangeOperator = (e)=>setTxtOperator(e.target.value)
    const handleChangePhone = (e)=>setTxtPhone(e.target.value)
    const handleChangeAmount = (e)=>setTxtAmount(e.target.value)

     const updateSelectedOpera = ()=>updateSelectedOperator();
    

    const formValidation=()=>{
        const txtPhoneErr={};
        const txtAmountErr={};
        let isValid=true;
        if(!txtPhone){
            txtPhoneErr.txtPhoneNot='Please enter your phone number!';
            isValid=false;
        }
        if (typeof txtPhone!== "undefined"){
            let pattern = new RegExp(/^[0-9\b]+$/);

            if (!pattern.test(txtPhone)) {
    
              isValid = false;
    
              txtPhoneErr.txtPhoneNot = "Please enter only number.";
    
            }else if(txtPhone.length !== 11){
    
              isValid = false;
    
              txtPhoneErr.txtPhoneNot = "Please enter valid phone number.";
             }
         }

        if(txtAmount===0){
            txtAmountErr.txtAmountNot='Please enter the amount!'
            isValid=false
        }

        if(isNaN(txtAmount)){
            txtAmountErr.txtAmountNot='The amount must be number type!'
            isValid=false
        }else if(txtAmount<1 || txtAmount>1000){
            txtAmountErr.txtAmountNot='Please the amount must be between 1 and 1000 ruble!'
            isValid=false
        }

        setTxtPhoneErr(txtPhoneErr);
        setTxtAmountErr(txtAmountErr);

        return isValid;
        
    }

     
    const onSubmit = (e) => {

        e.preventDefault()
        const isValided=formValidation();
        if(isValided){
            const data = {
                selectedOperator,
                txtPhone,
                txtAmount
            }
            console.log(data);
            setTxtPhone('')
            setTxtAmount(0)
             updateSelectedOpera();

        }

      }


    return (
        <div>
              <form className="mt-3" onSubmit={onSubmit}>
              <h3 className="text-center">Payment form</h3>
                <div className="card card-body">
                    <div className="form-group">
                        <label htmlFor="txtOperator">Operator:</label>
                        <input type="text" defaultValue={txtOperator} onChange={handleChangeOperator} className="form-control" />
                        <label  htmlFor="setTxtPhone">Phone:</label>
                        <input name="phone" type="text" value={txtPhone} onChange={handleChangePhone} className="form-control" />
                        {Object.keys(txtPhoneErr).map((ob,index)=>{
                            return <div style={{color:"red"}} key={index}>{txtPhoneErr[ob]}</div>
                        })}
                        <label htmlFor="txtAmount">Amount :</label>
                        <div className="input-group mb-2 mr-sm-2 form-inline">
                            <input name="amount" type="text" value={txtAmount} onChange={handleChangeAmount} className="form-control" />
                            <div className="input-group-prepend">
                                <div className="input-group-text">₽</div>
                            </div>
                        </div>
                        {Object.keys(txtAmountErr).map((ob,index)=>{
                            return <div style={{color:"red"}} key={index}>{txtAmountErr[ob]}</div>
                            })}
                        <button  className="btn btn-primary mt-2">Add</button>
                    </div>
                </div>
            </form>   
        </div>
    );
};

export default FormPayment;