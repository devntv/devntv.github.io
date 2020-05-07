import React from 'react'
import {makeStyles, withStyles} from "@material-ui/core/styles"
import {TextField, Typography, Button, Grid, Box } from "@material-ui/core"
import SendIcon from "@material-ui/icons/Send"
import Navbar from "./Navbar"

const useStyles = makeStyles(theme=>({
    form:{
        top: "50%",
        left:"50%",
        transform:"translate(-50%, -50%)",
        position:"absolute",
    },
    button:{
        marginTop:"1rem",
        color:"tomato",
        borderColor:"tomato"
    }
}))

const InputField = withStyles({
    root:{
        "& label.Mui-focused":{
            color: "tomato",

        },
        "& label":{
            color:"#00e49a",
        },
        "& .MuiOutlinedInput-root":{
            "& fieldset":{
                borderColor:"#61dafb"
            },
            
       
        "&:hover fieldset":{
            borderColor:"tan"
        },
        "& .Mui-focused fieldset":{
            borderColor:"tan"
        }
    },

    },
})(TextField);

const Contact = () => {
    const classes = useStyles();
    return (
        <Box component="div" style={{background:"linear-gradient(0deg, rgba(22,24,28,1) 39%, rgba(43,99,115,1) 80%)",height:"100vh"}}>
            <Navbar />
            <Grid container justify="center">
                <Box component="form" className={classes.form}>
                    <Typography variant="h5" style={{color:"tomato",textAlign:"center"}}>
                            Contact me
                    </Typography>
                    <InputField
                        fullWidth={true} label= "name" inputProps={{style:{color:"white"}}} variant="outlined" margin="dense" size="medium"
                    />
                    <br/>

                     <InputField
                        fullWidth={true} label= "email" variant="outlined" inputProps={{style:{color:"white"}}} margin="dense" size="medium"
                    />
                    <br/>
                     <InputField
                        fullWidth={true} label= "phone" variant="outlined" inputProps={{style:{color:"white"}}} margin="dense" size="medium"
                    />
                    <Button className={classes.button} variant="outlined" fullWidth={true} endIcon={<SendIcon/>} onClick={() => {
                              alert("thank so much- but I never received it :((.");
                            }}>
                        contact me
                    </Button>
                </Box>
            </Grid>
        </Box>
    )
}

export default Contact
