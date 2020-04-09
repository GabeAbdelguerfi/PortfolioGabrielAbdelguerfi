const { Container } = Reactstrap ;
class Blog extends React . Component {
 render () {
 return (
 < Container id = "blog" className = "bg-warning" >
 <h1> Blog </h1>
 <hr/>
 < Container >
 < BlogPost title = 'Post #1' date = 'Date-01, YYYY' summary = "Summary of Post 1" />
 < BlogPost title = 'Post #2' date = 'Date-02, YYYY' summary = "Summary of Post 2" />
 < BlogPost title = 'Post #3' date = 'Date-03, YYYY' summary = "Summary of Post 3" />
 </ Container >
 </ Container >
 );
 }
} 

class BlogPost extends React . Component {
 render (){
 return (
 < Container >
 <h3> {this. props . title } </h3>
 <small> {this. props . date } </small>
 <p> {this. props . summary } </p>
 <a className = "btn btn-outline-dark" href = "#" > Read More </a>
 <hr />
 </ Container >
 );
 }
} 