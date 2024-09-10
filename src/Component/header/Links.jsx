import { ExpandMore, KeyboardArrowRightOutlined } from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export const Links = ({ title }) => {
  return (
    <div>
      <Box
        // className="border"
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          ":hover .show-when-hover": { display: "block" },
          ":hover": { cursor: "pointer" },
        }}
      >
        <Typography variant="body1">{title}</Typography>
        <ExpandMore sx={{ fontSize: "16px", ml: 1 }} />

        <Box
          className="show-when-hover"
          sx={{
            position: "absolute",
            top: "100%",
            minWidth: "170px",
            left: "50%",
            transform: "translate(-50%)",
            display: "none",
            zIndex:2 
          }}
        >
          <Paper sx={{ mt: 2 ,}}>
            <nav aria-label="secondary mailbox folders">
              <List>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      display: "flex",
                      p: "0",
                      px: 1.5,
                    }}
                  >
                    <ListItemText
                      sx={{
                        ".MuiTypography-root": {
                          fontSize: "15px",
                          fontWeight: 300,
                        },
                      }}
                      primary="Dashboard"
                    />
                    <Box flexGrow={1} />
                  </ListItemButton>
                </ListItem>

                <ListItem
                  disablePadding
                  sx={{
                    position: "relative",
                    "&:hover .sub-link": {
                      display: "block",
                    },
                  }}
                >
                  <ListItemButton
                    sx={{
                      display: "flex",
                      p: "0",
                      px: 1.5,
                    }}
                  >
                    <ListItemText
                      sx={{
                        ".MuiTypography-root": {
                          fontSize: "15px",
                          fontWeight: 300,
                        },
                      }}
                      primary="Products"
                    />
                    <Box flexGrow={1} />
                    <KeyboardArrowRightOutlined fontSize="small" />
                  </ListItemButton>

                  <Box
                    className=" sub-link"
                    sx={{
                      display: "none",
                      position: "absolute",
                      top: "0",
                      left: "100%",
                    }}
                  >
                    <Paper sx={{ ml: 1, minWidth: 150 }}>
                      <nav aria-label="secondary mailbox folders">
                        <List>
                          <ListItem disablePadding>
                            <ListItemButton
                              sx={{
                                display: "flex",
                                p: "0",
                                px: 1.5,
                              }}
                            >
                              <ListItemText
                                sx={{
                                  "& .MuiTypography-root": {
                                    fontSize: "15px",
                                    fontWeight: 300,
                                  },
                                }}
                                primary="Add Product"
                              />
                              <Box flexGrow={1} />
                            </ListItemButton>
                          </ListItem>

                          <ListItem disablePadding>
                            <ListItemButton
                              sx={{
                                display: "flex",
                                p: "0",
                                px: 1.5,
                              }}
                            >
                              <ListItemText
                                sx={{
                                  "& .MuiTypography-root": {
                                    fontSize: "15px",
                                    fontWeight: 300,
                                  },
                                }}
                                primary="Edit Product"
                              />
                              <Box flexGrow={1} />
                            </ListItemButton>
                          </ListItem>
                        </List>
                      </nav>
                    </Paper>
                  </Box>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      display: "flex",
                      p: "0",
                      px: 1.5,
                    }}
                  >
                    <ListItemText
                      sx={{
                        ".MuiTypography-root": {
                          fontSize: "15px",
                          fontWeight: 300,
                        },
                      }}
                      primary="Orders"
                    />
                    <Box flexGrow={1} />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      display: "flex",
                      p: "0",
                      px: 1.5,
                    }}
                  >
                    <ListItemText
                      sx={{
                        ".MuiTypography-root": {
                          fontSize: "15px",
                          fontWeight: 300,
                        },
                      }}
                      primary="Profile"
                    />
                    <Box flexGrow={1} />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Paper>
        </Box>
      </Box>
    </div>
  );
};
