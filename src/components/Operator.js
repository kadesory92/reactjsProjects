import { Component } from "react";
import FormAddOperator from "./FormAddOperator";
import FormPayment from "./FormPayment"


class Operator extends Component{
    constructor(props) {
        super(props);

    this.state={
        selectedOperator: null,
        listOperator: ["", "Beeline","MTS","Tele2","Megaphone"]
    }
}
    handleOperator=(e)=>{
        this.setState({
            selectedOperator:e.target.value
        })
    }
        isSelectedOperator=()=>{
            return this.state.selectedOperator;
        }

       addNewOperator=(newOpperator)=>{
           if(newOpperator===''){
               alert('Veuillez saisir le nom de l\'opeérateur')
           }else{
            const listOperator=[...this.state.listOperator];
            listOperator.push(newOpperator)
            this.setState({ 
                listOperator
            });
           }
        // newOpperator !== '' && listOperator.push(newOpperator);
    }
    
    updateSelectedOperator=() =>{
        this.setState({selectedOperator: null});
        alert('Données tansmises avec succès!')
    }

    render(){
        return(<div>
                    <h3 className="card card-header text-center card-titl mb-5">Web terminal Operator !</h3>
                    {!this.state.selectedOperator && 
                    <div>
                    <label>Operators list :</label>
                        <select value={!this.state.selectedOperator? '  ':this.state.selectedOperator} onChange={this.handleOperator} >
                            {
                                this.state.listOperator.map((operator, index)=>{
                                    return  < option key={index} value={operator} >{operator}</option>
                                })
                            }
                        </select>
                        </div>
                }
                        
                        {!this.state.selectedOperator && <FormAddOperator  addOperator={this.addNewOperator} isSubmited={this.isSubmited}/> }    
                        {this.state.selectedOperator && 
                        <FormPayment 
                            updateSelectedOperator={this.updateSelectedOperator}
                            selectedOperator = {this.state.selectedOperator} 
                        /> 
                        }
               </div>)
    }
}

export default Operator;