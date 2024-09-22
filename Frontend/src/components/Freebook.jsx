import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards';
import axios from "axios"

function Freebook() {

  const [book,setBook]=React.useState([])

  React.useEffect(()=>{
    const getbook = async()=>{
      try{
        const res=await axios.get("http://localhost:4001/book")
        console.log(res.data.filter(data=>data.price==0))
        setBook(res.data)
      }
      catch(error){
        console.log(error)
      }
    }
    getbook();
  },[])

    var settings = {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 0,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, commodi. Quasi minus nulla asperiores incidunt iste mollitia adipisci, rerum sequi assumenda consequuntur vero. Ad harum tenetur, qui cumque voluptatum labore.</p>
      <div className="slider-container">
     <Slider {...settings}>
       {book.map((item)=>(
        <Cards item={item} key={item.id}/>
       ))}
     </Slider>
   </div>
    </div>
    </>
    
  )
}

export default Freebook
