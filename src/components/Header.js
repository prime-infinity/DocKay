import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


const Header = () => {
    return (
        <div>

            <Navbar  bg="white" className="">

                
                <Navbar.Brand >DocKay</Navbar.Brand>
                <img
                    alt=""
                    src="icons/Vector.png"
                    className="d-inline-block"
                />{' '}

                <Nav fill className="mx-auto">

                    <Nav.Item className="pr-5">
                        Consult Now
                    </Nav.Item>
                    <Nav.Item className="pl-3 pr-5">
                        Book Appointment
                    </Nav.Item>
                    <Nav.Item className="pl-3 pr-5">
                        Lab Tests
                    </Nav.Item>
                    <Nav.Item className="pl-3 pr-5">
                        Pharmacy
                    </Nav.Item>

                    <Nav.Item className="pl-4">
                        Log In
                    </Nav.Item>
                    <Nav.Item className="pl-3">
                        Sign Up
                    </Nav.Item>
                    <Nav.Item className="pl-3">
                        Need Help?
                    </Nav.Item>
                
                </Nav>

             
            </Navbar>
            
        </div>
    )
}

export default Header