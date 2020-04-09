const { Navbar , NavbarBrand , Nav } = Reactstrap ;
class TopNavbar extends React . Component {
 render () {
 return (
 < Navbar color = "dark" fixed = "top" >
 < NavbarBrand href = "/" className = "text-light" > Portfolio Name </ NavbarBrand >
 < Nav >
 < NavOption href = '#home' text = 'Home' />
 < NavOption href = '#about' text = 'About' />
 < NavOption href = '#projects' text = 'Projects' />
 < NavOption href = '#blog' text = 'Blog' />
 < NavOption href = '#contact' text = 'Contact' />
 </ Nav >
 </ Navbar >
 );
 }
} 

const { NavItem , NavLink } = Reactstrap ;
class NavOption extends React . Component {
 render (){
 return (
 < NavItem >
 < NavLink href ={this. props . href } className = "text-light" >
 {this. props . text }
 </ NavLink >
 </ NavItem >
 );
 }
} 
