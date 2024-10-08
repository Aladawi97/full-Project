import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import React from "react";
import "./style.css";
import { useTheme } from "@emotion/react";
import IconSection from "./IconSection";

const mySlider = [
  {
    text: "MEN",
    img: "src/images/banner-15.jpg",
  },
  {
    text: "WOMEN",
    img: "src/images/banner-25.jpg",
  },
];

export const Hero = () => {
  const theme = useTheme();
  return (
    <Container>
      <Box sx={{pt:2 , mt: 2.5, display: "flex", alignItems: "center", gap: 2 }}>
        <Swiper
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {mySlider.map((item) => {
            return (
              <SwiperSlide key={item.text} className="parent-slider">
                <img src={item.img} alt="" />
                <Box
                  sx={{
                    [theme.breakpoints.up("sm")]: {
                      textAlign: "left",
                      position: "absolute",
                      top: "20px",
                      left: "10%",
                    },
                    [theme.breakpoints.down("sm")]: {
                      pt: 4,
                      pb: 6,
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#222",
                    }}
                  >
                    LIFESTYLE COLLECTION
                  </Typography>

                  <Typography
                    variant="h4"
                    sx={{
                      color: "#222",
                      fontWeight: 400,
                      my: 1,
                    }}
                  >
                    {item.text}
                  </Typography>
                  <Stack
                    sx={{
                      justifyContent: { xs: "center", sm: "left" },
                    }}
                    direction={"row"}
                    alignItems={"center"}
                  >
                    <Typography variant="h5" color="#333" mr={1}>
                      SALE UP TO
                    </Typography>
                    <Typography variant="h5" color="#D23F57">
                      30% OFF
                    </Typography>
                  </Stack>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#000",
                      fontWeight: 300,
                      my: 1,
                    }}
                  >
                    Get Free Shipping on order over $99.00
                  </Typography>

                  <Button
                    variant="contained"
                    sx={{
                      px: 5,
                      py: 1,
                      mt: 2,
                      backgroundColor: "#222",
                      boxShadow: "0px 4px 16px rgba(43 , 52 , 69 , 0.1)",
                      color: "#fff",
                      borderRadius: "1px",
                      "&:hover": {
                        bgcolor: "#151515",
                        boxShadow: "0px 4px 16px rgba(43 , 52 , 69 , 0.1)",
                      },
                    }}
                  >
                    Shop Now
                  </Button>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Box sx={{ display: { xs: "none", md: "block", minWidth: "26.4%" } }}>
          <Box sx={{ position: "relative" }}>
            <img width="100%" src="src\images\banner-17.jpg" alt="" />
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: 31,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#283445",
                  fontSize: "18px",
                }}
              >
                NEW ARRIVALS
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "#283445",
                  fontSize: "16px",
                  mt: 1,
                }}
              >
                SUMER
              </Typography>

              <Typography variant="h6" sx={{ color: "#283445" }}>
                SALE 20% OFF
              </Typography>

              <Link
                sx={{
                  color: "#283445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",
                  "&:hover": { color: "#D23F57" },
                }}
                href="#"
                underline="none"
              >
                shop now
                <ArrowForward sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>

          <Box sx={{ position: "relative" }}>
            <img width="100%" src="src\images\banner-16.jpg" alt="" />
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: 31,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#283445",
                  fontSize: "18px",
                }}
              >
                GAMING 4K
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "#283445",
                  lineHeight: "16px",
                  mt: 1,
                }}
              >
                DESKTOPS &
              </Typography>

              <Typography variant="h6" sx={{ color: "#283445" }}>
                LAPTOPS
              </Typography>

              <Link
                sx={{
                  color: "#283445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",
                  "&:hover": { color: "#D23F57" },
                }}
                href="#"
                underline="none"
              >
                shop now
                <ArrowForward sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>
        </Box>
      </Box>

      <IconSection />
     
    </Container>
  );
};
