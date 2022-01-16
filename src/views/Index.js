import Header from "../components/Header"
import MainWrapper from "../components/MainWrapper"
import  { Breakpoint } from 'react-socks';

const Index = () => {
    return(
        <div>

            <Breakpoint medium up>
                <Header />
            </Breakpoint>

            <MainWrapper />
             
        </div>
    )
}
export default Index