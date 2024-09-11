import {
  Box,
  Button,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { Close } from "@mui/icons-material";
import ProductDetaile from "./ProductDetaile";
export default function Main() {
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const theme = useTheme();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Container sx={{ py: 9 }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        gap={3}
      >
        <Box>
          <Typography variant="h6">Selected Prpducts</Typography>
          <Typography variant="body1" fontWeight={300}>
            All Our Arrivals in a Exclusive Brand Selection
          </Typography>
        </Box>

        <ToggleButtonGroup
          color="error"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          sx={{
            ".Mui-selected": {
              border: "1px solid rgba(233,69,96,0.5) !important",
              color: "#e94560",
              backgroundColor: "initial",
            },
          }}
        >
          <ToggleButton
            sx={{ color: theme.palette.text.primary }}
            className="myButton"
            value="left"
            aria-label="left aligned"
          >
            All Products
          </ToggleButton>

          <ToggleButton
            sx={{ mx: "16px !important", color: theme.palette.text.primary }}
            className="myButton"
            value="center"
            aria-label="centered"
          >
            MEN Category
          </ToggleButton>

          <ToggleButton
            sx={{ color: theme.palette.text.primary }}
            className="myButton"
            value="right"
            aria-label="right aligned"
          >
            WOMEN Category
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>
        {["aaa", "bbb", "ccc" , "ddd" , "ada" , "glv" ].map((item) => {
          return (
            <Card key={item} 
            sx={{ 
              maxWidth: 333,
               mt: 6 ,
                ":hover .MuiCardMedia-root" :{
                  scale : "1.1",
                  transition:"0.35s",
                  rotate:"0.8deg"

            }}}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="275"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
              />
              <CardContent>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography variant="h6" component="div">
                    T-shirt
                  </Typography>

                  <Typography variant="subtitle1" component="p">
                    $21.99
                  </Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widvdvdvdvdvdvdvdvddddddddddddddddddd efefef
                  dvvvvvvvvvvvv dv dv dv dv d dvvvvvvvv dv dgfflklvd dgkmlv,ldmd
                  mdngkdmfdkn
                </Typography>
              </CardContent>

              <CardActions sx={{ justifyContent: "space-between" }}>
                <Button onClick={handleClickOpen} size="large" sx={{ textTransform: "capitalize" }}>
                  <AddShoppingCartOutlinedIcon
                    sx={{ mr: 1 }}
                    fontSize="small"
                    
                  />
                  Add To Cart
                </Button>

                <Rating
                  size="small"
                  name="read-only"
                  value={4.5}
                  precision={0.5}
                  readOnly
                />
              </CardActions>
            </Card>
          );
        })}
        {/* <Card sx={{ maxWidth: 333 , mt:6}}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="275"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          />
          <CardContent>
            <Stack 
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            >
                <Typography variant="h6" component="div">
                    T-shirt
                </Typography>

                <Typography variant="subtitle1" component="p">
                    $21.99
                </Typography>
            </Stack>
            <Typography variant="body2" color="text.secondary">
                Lizards are a widvdvdvdvdvdvdvdvddddddddddddddddddd efefef
                dvvvvvvvvvvvv dv dv dv dv d dvvvvvvvv dv dgfflklvd  dgkmlv,ldmd 
                mdngkdmfdkn
            </Typography>


          </CardContent>


          <CardActions sx={{justifyContent:"space-between"}}>
            <Button size="large" sx={{textTransform:"capitalize"}} >
                <AddShoppingCartOutlinedIcon sx={{mr:1}} fontSize="small" />
                Add To Cart
            </Button>


            <Rating size="small" name="read-only" value={4.5} precision={0.5} readOnly />

          </CardActions>
        </Card> */}
      </Stack>





      <Dialog 
      sx={{
        ".MuiPaper-root" : {minWidth:{xs :"100%" , md : 800}}
      }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
       <IconButton
            sx={{
              "&:hover": { rotate: "360deg", transition: "0.3s", color: "red" },
              position: "absolute",
              top: "0",
              right: 10,
            }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>
         <Stack >
          <ProductDetaile />
         </Stack>

      </Dialog>
    </Container>
  );
}
