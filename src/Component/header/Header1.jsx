import { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const options = ["AR", "EN"];

export default function Header1() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
      }}
    >
      <Stack direction={"row"} alignItems={"center"}>
        <Typography
          sx={{
            mr: 2,
            p: "3px 10px",
            bgcolor: "#D23F57",
            borderRadius: "12px",
            fontSize: "10px",
            fontWeight: "bold",
            color: "#fff",
          }}
          variant="body2"
        >
          HOT
        </Typography>

        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 300,
            color: "#fff",
          }}
          variant="body2"
        >
          Free Express Shippong
        </Typography>
        <Box flexGrow={1} />

       

        {/* icon */}
        <div>
          {theme.palette.mode === "light" ? (
            <IconButton sx={{color:"#fff"}} // color white
              onClick={() => {
                localStorage.setItem(
                  "mode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                colorMode.toggleColorMode();
              }}
              color={theme.palette.mode === "dark" ? "light" : "dark"}
            >
              <LightModeOutlined fontSize="small" />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "mode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                colorMode.toggleColorMode();
              }}
              color={theme.palette.mode === "dark" ? "light" : "dark"}
            >
              <DarkModeOutlined fontSize="small" />
            </IconButton>
          )}
        </div>
        {/* // icon */}






        <List 
          component="nav"
          aria-label="Device settings"
          sx={{  }}
        >
          <ListItem 
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClickListItem}
          >
            <ListItemText
            sx={{ ".MuiTypography-root" : {fontSize:"10px" , color:"#FFF"}}} // color white
              secondary={options[selectedIndex]}
            />
          </ListItem>
        </List>




        
        <Menu 
          id="lock-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "lock-button",
            role: "listbox",
          }}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              disabled={index === 0}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>







        <FacebookIcon
          sx={{
            fontSize: "16px",
            mx: 1,
            color: "#fff",
          }}
        />
        <TwitterIcon
          sx={{
            fontSize: "16px",
            mx: 1,
            color: "#fff",
          }}
        />
        <InstagramIcon
          sx={{
            fontSize: "16px",
            mx: 1,
            color: "#fff",
          }}
        />
      </Stack>
    </Box>
  );
}
