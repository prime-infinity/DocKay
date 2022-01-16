import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


const Header = () => {
    return (
        <div>

            <Navbar  bg="white" className="">

                <Nav fill className="mx-auto">
                    <Nav.Item className="pr-5 font-weight-bold"> 
                        <span className="h3">MyDoctor</span> 
                        <img
                            alt=""
                            src="icons/Vector.png"
                            className="" style={{verticalAlign:"inherit"}}
                        />{' '}
                    </Nav.Item>

                    <Nav.Item className="pr-5 my-auto">
                        Consult Now
                    </Nav.Item>
                    <Nav.Item className="pl-3 pr-5 my-auto">
                        Book Appointment
                    </Nav.Item>
                    <Nav.Item className="pl-3 pr-5 my-auto">
                        Lab Tests
                    </Nav.Item>
                    <Nav.Item className="pl-3 pr-5 my-auto">
                        Pharmacy
                    </Nav.Item>

                    <Nav.Item className="pl-4 my-auto">
                        Log In
                    </Nav.Item>
                    <Nav.Item className="pl-3 my-auto">
                        Sign Up
                    </Nav.Item>
                    <Nav.Item className="pl-3 my-auto">
                        Need Help?
                    </Nav.Item>
                
                </Nav>

             
            </Navbar>
            
        </div>
    )
}

export default Header