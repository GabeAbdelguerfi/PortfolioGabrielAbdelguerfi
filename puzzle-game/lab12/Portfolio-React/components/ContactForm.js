class ContactForm extends React . Component {
 render () {
 return (
 <div className = "container bg-secondary" id = "contact" >
 <h1> Contact </h1>
 <hr/>
 <form>
 < FormInput type = 'text' placeholder = 'name' />
 < FormInput type = 'email' placeholder = 'email' />
 < FormInput type = 'textarea' placeholder = 'message' />
 <button className = "btn btn-lg btn-primary" > Submit </button>
 </form>
 </div>
 );
 }
} 

class FormInput extends React . Component {
 render (){
 const { type , placeholder } = this. props ;
 return (
 <div className = "form-group" >
 <input className = "form-control" type ={ type } placeholder ={ placeholder } ></input>
 </div>
 );
 }
} 
