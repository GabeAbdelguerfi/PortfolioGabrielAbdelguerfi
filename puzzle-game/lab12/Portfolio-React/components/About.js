class About extends React . Component {
 render () {
 return (
 <div id = "about" className = "container bg-primary" >
 <h1> About </h1>
 <hr/>
 < Profile />
 < SkillTable />
 </div>
 );
 }
} 

 class Profile extends React . Component {
 render (){
 return (
 <div className = "row" >
 <div className = "col" >
 <img src = "images/profile.png" className = "img-fluid p-1" />
 </div>
 <div className = "col" >
 <h4> First Last </h4>
 <p> This is info about me. </p>
 </div>
 </div>
 );
 }
}

class SkillTable extends React . Component {
 render () {
 return (
 <table className = "table" >
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
 </table>
 );
 }
} 