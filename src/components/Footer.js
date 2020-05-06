import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {BottomNavigation,BottomNavigationAction} from "@material-ui/core";
import {Facebook, Instagram} from "@material-ui/icons";
import YouTubeIcon from '@material-ui/icons/YouTube';
const useStyles = makeStyles({
    root:{
        "& .MuiBottomNavigation-root":{
            minWidth: 0,
            maxWidth: 250
        },

        "& .MuiSvgIcon-root":{
            fill:"#00e59b",

            "&:hover":{
                fill:"#61dafb",
                fontSize:"1.8rem"
            }
            
        },
        
    },
})

const Footer = () => {
    const classes = useStyles();
    return (
        <BottomNavigation width ="auto" style={{background:"#222"}}>
            <BottomNavigationAction href="https://www.facebook.com/Dinh.nt1097" target="_blank" className={classes.root}  style={{padding:"0"}} icon={<Facebook/>}/>
            <BottomNavigationAction href="https://www.instagram.com/glory.nt97" target="_blank" className={classes.root}  style={{padding:"0"}} icon={<Instagram/>}/>
            <BottomNavigationAction href="https://www.youtube.com/channel/UCPclfdLb-sAi-kIrO1-0EFA" target="_blank" className={classes.root}  style={{padding:"0"}} icon={<YouTubeIcon/>}/>
        </BottomNavigation>
    )
}

export default Footer
