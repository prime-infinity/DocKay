import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

//import { Swiper } from 'swiper/react/swiper';
/*import { SwiperSlide } from 'swiper/react/swiper-slide';
import { Pagination} from 'swiper';
import { EffectCards } from 'swiper';

import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/effect-cards/effect-cards.min.css';*/

const MainWrapper = () => {
    return(
        <Container className="pt-5">
            <Row>
                <Col xs={{ order: 'last' }} md={{span: 7,order: 'first'}} className="text-center text-md-left">

                    <span className="display-3 d-none d-md-block">
                        Quality Health Care
                        Now Delivered
                    </span> <br />
                    <span className="h2 d-block d-md-none">
                        Quality Health Care
                        Now Delivered
                    </span> <br />

                    <span className='lead'>
                    MyDoctor connects you with the best doctors in your City over Chat, Video & Voice calls. Skip the hassle of hospital visits and consult a doctor at your ease.
                    </span> <br /><br /><br />

                    <button className="btn btn-native font-weight-bold">
                        Get Started
                    </button>

                </Col>

                <Col xs={{ order: 'first' }}  md={{span: 5,order: 'last'}}>


                    {{/*<Swiper
                    modules={[Pagination,EffectCards]}
                    spaceBetween={1}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    effect="cards"
                    grabCursor={true}
                    >
                    {[1, 2, 3, 4].map((i, el) => {
                        return (
                            <SwiperSlide key={el}>
                                
                                <div>
                                    <img src="images/unsplash_pTrhfmj2jDA" alt="" />
                                </div>

                            </SwiperSlide>
                        )
                        
                    })}
                    
                </Swiper>*/}}


                </Col>

            </Row>
        </Container>
    )   
}
export default MainWrapper