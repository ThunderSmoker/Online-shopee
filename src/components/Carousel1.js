import { Carousel } from 'react-responsive-carousel';
import React from 'react'
import { Grid,Box } from '@mui/material';
import { Container } from '@mui/system';

const Carousel1 = () => {
  const data = [
    {
      image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/shoes-craze-sale-facebook-ad-design-template-b1d1738fd5e9e0f6e3152ec502a1c2e1_screen.jpg?ts=1567579016",
      caption: ""
    },
    {
      image: "https://cdna.artstation.com/p/assets/images/images/036/002/188/large/m-n-vinit-img-20210322-204116-186.jpg?1616482578",
      caption: ""
    },
    {
      image: "https://img.freepik.com/free-vector/running-sport-shoes-illustration_1284-17528.jpg?w=2000",
      caption: ""
    },
    {
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/f0a14417430469.562b9e470f11e.jpg",
      caption: ""
    },
    {
      image: "https://img.freepik.com/free-vector/colorful-fashion-banner-template-memphis-style_1361-1301.jpg?w=2000",
      caption: ""
    },
    {
      image: "https://images.squarespace-cdn.com/content/v1/57dc2957579fb3ea46719c48/1586884983380-OC4ZA42UIU0QUZOQA0GY/EVORIDE-Template-Landscape-1920x108010.jpg?format=1500w",
      caption: ""
    },
    {
      image: "https://i.pinimg.com/originals/71/ac/d5/71acd5a4f0354ac2fcfbf02668af7471.jpg",
      caption: ""
    },
    {
      image: "https://img.freepik.com/free-vector/fashion-store-banner-template_1361-1248.jpg?w=2000",
      caption: ""
    }
    
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  const hight="500"
  return (
    <>
     <Container>

    <Box marginLeft={0}>

    <Container maxWidth>
      
        <Carousel infiniteLoop autoPlay interval={4000} useKeyboardArrows transitionTime={2} dynamicHeight width={1200}>
          <div style={{height:{hight}}} >
            <img src={data[0].image}alt="" srcset="" style={{borderRadius:40}}/>
          </div>
          <div style={{height:{hight}}}>
            <img src={data[1].image}alt="" srcset=""  style={{borderRadius:40}}/>
          </div>
          <div style={{height:{hight}}}>
            <img src={data[5].image}alt="" srcset="" style={{borderRadius:40}}/>
          </div>
        </Carousel>
          {/* <Carousel
            
            data={data}
            time={3500}
            width="1200px"
            height="600px"
            captionStyle={captionStyle}
            radius="10px"
            // slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "900px",
              maxHeight: "800px",
              marginLeft: "180",
              padding:"20"
            }}
          /> */}
         

            
   
            </Container>
          </Box>
          </Container>
    </>

  );
}

export default Carousel1
