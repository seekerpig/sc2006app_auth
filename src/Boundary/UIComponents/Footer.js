import React from "react";
import { Container, Grid, Typography, Link, Box } from "@mui/material";

const footers = [
  {
    title: "Games",
    description: [
      { title: "Home", link: "/" },
      { title: "Explore Sports", link: "/explore" },
      { title: "Create Game", link: "/creategame" },
    ],
  },
  {
    title: "Social",
    description: [
      { title: "Login", link: "/login" },
      { title: "Sign Up", link: "/signup" },
      { title: "My Profile", link: "/profile" },
    ],
  },
];

export default function Footer() {
  return (
    <Box
      id="footer"
      sx={{
        marginTop: "60px",
        width: "100%",
        bottom: 0,
        backgroundColor: "white",
        padding: "60px",
        minHeight: "350px",
        borderTop: "1px solid #dedede",
      }}

      // style={{
      //   backgroundColor: "white",
      //   marginTop: "60px",
      //   borderTop: "1px solid #dedede",
      //   padding: "60px",

      // }}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} sm={8}>
            <Box style={{ maxWidth: "20em" }}>
              <Typography variant="h4" gutterBottom color="primary">
                Technical Wizards
              </Typography>
              <Typography color="#575757">
                Our mission is to help connect sports players in Singapore to
                build a smarter and healthier nation.
              </Typography>
            </Box>
          </Grid>

          {footers.map((footer) => (
            <Grid
              item
              xs={6}
              sm={2}
              key={footer.title}
              style={{ paddingTop: "20px" }}
            >
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul
                style={{
                  margin: 0,
                  padding: 0,
                  listStyle: "none",
                }}
              >
                {footer.description.map((item) => (
                  <li
                    key={item}
                    style={{ padding: "0.3rem", paddingLeft: "0" }}
                  >
                    <Link
                      href={item.link}
                      variant="subtitle2"
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: "400",
                        textDecorationLine: "none",
                      }}
                      color="textSecondary"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
