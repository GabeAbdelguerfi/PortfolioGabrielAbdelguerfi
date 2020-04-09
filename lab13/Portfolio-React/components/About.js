const { Container } = Reactstrap ;
class About extends React . Component {
 render () {
 return (
 < Container id = "about" className = "bg-primary" >
 <h1> About </h1>
 <hr/>
 < Profile />
 < SkillTable />
 </ Container >
 );
 }
} 

const { Row , Col } = Reactstrap ;
class Profile extends React . Component {
 render (){
 return (
 < Row >
 < Col >
 <img src = "images/profile.png" className = "img-fluid p-1" />
 </ Col >
 < Col >
 <h4> First Last </h4>
 <p> This is info about me. </p>
 </ Col >
 </ Row >
 );
 }
}

const { Table } = Reactstrap ;
class SkillTable extends React . Component {
 render () {
 return (
 < Table >
 <thead>
 <tr>
 <th colSpan = '2' className = 'text-center' > Technical Skills </th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <th scope = "row" > Backend tools </th>
 <td> JavaScript, Node, NPM, Express, Passport </td>
 </tr>
 <tr>
 <th scope = "row" > Frontend tools </th>
 <td> JavaScript, HTML, CSS, React, Bootstrap, Reactstrap </td>
 </tr>
 <tr>
 <th scope = "row" > Database tools </th>
 <td> JavaScript, MongoDB, Mongoose </td>
 </tr>
 </tbody>
 </ Table >
 );
 }
} 
