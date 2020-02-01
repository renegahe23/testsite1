import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
// sections for this page
import SectionText from "./Sections/SectionText.jsx";
import SectionBlogInfo from "./Sections/SectionBlogInfo.jsx";
import SectionComments from "./Sections/SectionComments.jsx";
import SectionSimilarStories from "./Sections/SectionSimilarStories.jsx";

import blogPostPageStyle from "assets/jss/material-kit-pro-react/pages/blogPostPageStyle.jsx";

class BlogPostPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header
          brand="Material Kit PRO React"
          links={<HeaderLinks dropdownHoverColor="primary" />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 50,
            color: "primary"
          }}
        />
        <Parallax image={require("assets/img/vector/hongkong.jpg")} filter="dark">
          <div className={classes.container}>
            <GridContainer justify="left">
              <GridItem md={6} lg={6} sm={12} xs={12}>
              <h3 className={classes.subtitle}>
                 Pulso Técnico
                </h3>
                
                <h1 className={classes.title}>
                Balances negativos en Asia/Pacífico
                </h1>
               
                <br />
                <Button color="danger" size="lg" round>
                  <FormatAlignLeft /> Invertir ahora
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classes.main}>
          <div className={classes.container}>

          <SectionBlogInfo />
            <SectionText />
            
            {/* <SectionComments /> */}
          </div>
        </div>
        <SectionSimilarStories />
        <Footer
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/"
                      className={classes.block}
                    >
                      E-VECTOR
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/presentation"
                      className={classes.block}
                    >
                      ACERCA DE NOSOTROS
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="//blog.creative-tim.com/"
                      className={classes.block}
                    >
                      BLOG
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/license"
                      className={classes.block}
                    >
                      EMISORAS
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()} , 
                VECTOR Casa de Bolsa Derechos Reservados
              </div>
            </div>
          }
        />
      </div>
    );
  }
}

export default withStyles(blogPostPageStyle)(BlogPostPage);
