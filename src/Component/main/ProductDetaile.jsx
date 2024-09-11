import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

export default function ProductDetaile() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box display={"flex"}>
        <img
          width={300}
          height={300}
          src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          alt=""
        />
      </Box>

      <Box sx={{textAlign:{xs:"center" , sm:"left"}}} >
        <Typography variant="h5">WOMEN'S FASHION</Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
          $12.99
        </Typography>
        <Typography variant="body1">
          Lizards are Widespread group of squaments fdfsdf osdvpn adjo,ag
          Lizards are Widespread group of squaments
        </Typography>
        <Stack direction={"row"} gap={1} my={2} sx={{
            justifyContent:{xs:"center" , sm:"left"}
        }}>
          {["aaa", "bbb"].map((i) => {
            return (
              <img
                style={{ borderRadius: 3 }}
                height={100}
                width={90}
                key={i}
                src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                alt=""
              />
            );
          })}
        </Stack>
        <Button
          sx={{
            textTransform: "capitalize",
            mb:{xs: 1 , sm:"0"}
          }}
          variant="contained"
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy Now
        </Button>
      </Box>
    </Box>
  );
}
