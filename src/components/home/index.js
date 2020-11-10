import React from "react";
import { makeStyles } from "@material-ui/styles";
import CustomButton from "../shared/CustomButton";
import StoreBadge from "../shared/StoreBadge";
import Header from './components/header';
import BlogPost from "./components/BlogPost";

const useStyles = makeStyles(theme => ({
  
}));
const Home = props => {
  const classes = useStyles();
  return (
    <div>
     <Header></Header>
      <h2>Campaigns</h2>
      <BlogPost>
      </BlogPost>
      <CustomButton
        width="60%"
        backgroundColor="black"
        color="white"
        title="make a social media post"
      ></CustomButton>
      {/* <StoreBadge type={"apple"}></StoreBadge>
      <StoreBadge type={"google"}></StoreBadge> */}
    
    </div>
  );
};

export default Home;
