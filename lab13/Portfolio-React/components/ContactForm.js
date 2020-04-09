const { Container , Form } = Reactstrap ;
class ContactForm extends React . Component {
 render () {
 return (
 < Container id = "contact" className = "bg-secondary" >
 <h1> Contact </h1>
 <hr/>
 < Form >
 < FormInput type = 'text' placeholder = 'name' />
 < FormInput type = 'email' placeholder = 'email' />
 < FormInput type = 'textarea' placeholder = 'message' />
 <button className = "btn btn-lg btn-primary" > Submit </button>
 </ Form >
 </ Container >
 );
 }
} 

const { FormGroup , Input } = Reactstrap ;
class FormInput extends React . Component {
 render (){
 return (
 < FormGroup >
 < Input type ={this. props . type } placeholder ={this. props . placeholder } ></ Input >
 </ FormGroup >
 );
 }
} 
