import React from "react";
import { makeStyles } from "@material-ui/styles";
import CustomButton from "../shared/CustomButton";
import StoreBadge from "../shared/StoreBadge";
import Header from './components/header';
import BlogPost from "./components/BlogPost";
import Footer from "./components/Footer";
import '../../index.css';

// import AnimalList from "./components/AnimalLIst";
import MenuLink from  "./components/MenuLink";

const useStyles = makeStyles(theme => ({

}));
const Home = props => {
  const classes = useStyles();
  return (
    <div>
     <Header/>
      <BlogPost/>
      {/* <MenuLink/> */}
      <Footer/>
    </div>
  );
};

export default Home;




      {/* <CustomButton
        width="60%"
        backgroundColor="black"
        color="white"
        title="make a social media post"
      ></CustomButton> */}
      {/* <StoreBadge type={"apple"}></StoreBadge>
      <StoreBadge type={"google"}></StoreBadge> */}
    