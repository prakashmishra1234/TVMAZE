import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import Container from "@mui/material/Container";
import "../App.css";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../store/Store";
import instance from "../api/Instance";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

const Header = () => {
  const [search, setSearch] = React.useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const context = React.useContext(AuthContext);

  const onClickSearch = () => {
    instance
      .get(`/search/shows?q=${search}`)
      .then((res) => {
        context.setSearchedResult(res);
        navigate("/searched-result");
      })
      .catch((err) => {
        context.setTvShow([]);
        console.log(err);
      });
  };

  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: { sm: "flex", xs: "flex" },
            flexDirection: { sm: "row", xs: "column" },
            justifyContent: "space-between",
            marginBottom: { xs: "1rem", sm: "0rem" },
          }}
        >
          <Box
            variant="h6"
            noWrap
            component="a"
            sx={{
              display: { sm: "flex", xs: "flex" },
              flexDirection: { sm: "column", xs: "row" },
              mr: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Typography
              sx={{
                display: { sm: "flex", xs: "flex" },
                alignItems: "center",
                justifyContent: "center",
                mr: 2,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              TV MAZE
            </Typography>
            {location.pathname !== "/" ? (
              <Button onClick={() => navigate("/")}>Home</Button>
            ) : null}
          </Box>

          <div className="searchbar">
            <span>
              <SearchIcon onClick={() => onClickSearch()} />
            </span>
            <input
              type="text"
              placeholder="search..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  onClickSearch();
                }
              }}
            />
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
