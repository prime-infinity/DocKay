import Header from "../components/Header"
import  { Breakpoint } from 'react-socks';

const Index = () => {
    return(
        <div>

            <Breakpoint medium up>
                <Header />
            </Breakpoint>
             
        </div>
    )
}
export default Index