import React, { useState } from "react";
import {CirclePicker} from 'react-color'
import { Container, Paper, Box, Typography,Button } from "@mui/material";
import { borderRadius, fontSize, padding } from "@mui/system";

const SingleProduct = ({name,imageURL,price,colors}) => {
  const [readMore, setReadMore] = useState(false);
  const [hex,setHex]=useState( colors[0])
  const pricecrossed=0.15*price
  const description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi mollitia, earum ipsa quia sint distinctio similique quae sunt dolor quaerat. Molestias omnis dignissimos, laboriosam commodi architecto officiis quaerat iure itaque?"
  return (
    <>
      {/* <Container width={200} sx={{ justifyContent: "center" }} padding={20}> */}
        <Box width={200} >
          <Paper
            sx={{
              height:340,
              width:260,
              borderRadius: 5,
              padding: 0.9,

     
            }}
          >
            <img
              src={imageURL}
              alt={name}
              srcset=""
              height={180}
              width={255}
              style={{
                margin: 2,
                borderRadius: 10,
              }}
            />
            <Typography paddingLeft={1} sx={{fontWeight:"bold"}}>{name}</Typography>
            <Box display={"flex"}>

            <Typography paddingLeft={1} color="red" >
              ${price} 
            </Typography>
            <Typography paddingLeft={1} marginLeft={1} color="gray" sx={{textDecorationLine: "line-through"}} >
              ${pricecrossed} 
            </Typography>
            </Box>
            <Box display={"flex"} margin={1}>

            <Button variant="outlined" size="small"  sx={{
                height:15,
                width:10,
                borderRadius:20,
                backgroundColor:"#C7D7FF",
                fontSize:11
            }}>Colors</Button>
            {/* <button
            
            style={{
                height:1,
                width:1,
                backgroundColor:"#ff0000",
                borderColor:"#ff0000",
                marginLeft:140,
                marginRight:10,
                marginTop:5.5,
                boxShadow:"none",
                borderRadius:100
            }}
            ></button>
            <button
            style={{
                height:1,
                width:1,
                marginTop:5.5,
                backgroundColor:"#00ff00",
                borderColor:"#00ff00",
                marginRight:10,
                boxShadow:"none",
                
                borderRadius:100
            }}
            ></button>
            <button
            style={{
                height:1,
                width:1,
                marginTop:5.5,
                backgroundColor:"#0000ff",
                borderColor:"#0000ff",
                boxShadow:"none",
                borderRadius:100
            }}
            ></button> */}
            <Box marginLeft={15}>

            <CirclePicker
      colors={colors}
      circleSize={12}
      color={hex}
      onChange={(color) => {
          setHex(color.hex);
        }}
        />
        </Box>
            </Box>
            <p
              style={{
                fontSize: 10,
                margin: 10,
                color: "gray",
              }}
            >
              {readMore ? description : `${description.substring(0, 100)}...`}
              <button
                onClick={() => setReadMore(!readMore)}
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "blue",
                  margin:0,
                  fontSize: 12,
                }}
              >
                {readMore ? "show less" : "  read more"}
              </button>
            </p>
          </Paper>
        </Box>
      {/* </Container> */}
    </>
  );
};

export default SingleProduct;
