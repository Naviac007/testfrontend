import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from "../../assets/images/logo.png";
import SearchIcon from '@mui/icons-material/Search';
import Login from '@mui/icons-material/Login';
import Assignment from '@mui/icons-material/Assignment';
import InputBase from '@mui/material/InputBase';
import { Link } from "react-router-dom";
import { styled, alpha } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import { purple } from '@mui/material/colors';
import { ReactSession } from 'react-client-session';
import history from '../History/History'
import "./header.css";


const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];



const ResponsiveAppBar = (props) => {
    ReactSession.setStoreType("localStorage");

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: '40%',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '90',
            '&:focus': {
              width: '100',
            },
          },
        },
      }));
      
      
      
    
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [sign, setSign] = React.useState(false);
  const [login, setLogin] = React.useState(false);
  const [uname, seUname] =React.useState("invalid username");
  const [pass, setPass] =React.useState("invalid password");
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [errorMessages, setErrorMessages] = React.useState({});
  const [searchQuery, setSearchQuery] = React.useState("");
  const { disabled } = props;


// Generate JSX code for error message
const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div style={{color:"red"}} className="error">{errorMessages.message}</div>
  );


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const onOpenModal = () => {
		setSign(true);
	};

	const onOpenModalLogin = () => {
		setLogin(true);
	};

	const onCloseModal = () => {
		setSign(false);
	};

	const onCloseModalclose = () => {
		setLogin(false);
	};
const onSearchChange=(event)=>{
  setSearchQuery(event.target.value)
  console.log(searchQuery)
}
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };
const handleSearch = ()=>{
  var string = document.getElementById("search").value
  console.log(string)
  history.push('/Search/'+string);
  window.location.reload();
}
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();



    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
    
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        ReactSession.set("username", "Bob");
				ReactSession.set("isSubmitted", true);
				setLogin(false);
				window.location.reload();
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };



  const logOut = () => {
		setIsSubmitted( false)
		ReactSession.set("username", null);
		ReactSession.set("isSubmitted", false);
		window.location.reload();

	}

  let button;
  if (ReactSession.get("isSubmitted")) {
      button = <Button sx={{color: 'white', display: 'block' }} className=""  onClick={logOut}>
 
          Logout
      </Button>
  }


  else {
      button = <div style={{ display: "flex"}}><Button sx={{color: 'white', display: 'block' }} className="" id="signup" onClick={onOpenModal} startIcon={<Assignment />}>SignUp</Button>
          <Button sx={{color: 'white', display: 'block' }} className="" id="login" onClick={onOpenModalLogin} startIcon={<Login />}>Login</Button></div>
  }

  return (
    <>
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 0.1,mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <img src={logo} style={{maxHeight : "30px",maxWidth : "130px"}}/>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

           
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
               <Link to='/upload' className="new_video" style={{display:"block"}}>						
						Add Video
			</Link>
            </Menu>
          </Box>
          
          
        
          <Search sx={{display:"flex"}}>
           
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              sx={{width:"100%"}}
              disabled={disabled}
              id='search'
            />

<Button sx={{background:"white"}} onClick={handleSearch}> <SearchIcon /></Button>
  
          </Search>
         
          <Box sx={{ flexGrow: 0.8 }}>
              </Box>
            <Box sx={{ flexGrow: 0 }}>
            {button}

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <Modal open={sign} onClose={onCloseModal}>
    <div className="modal-body">
      <h2>SIGN UP</h2>
      <span className="subtitle">A warm welcome</span>
      <form className="contact-form form-validate3" novalidate="novalidate">
        <div className="form-group">
          <input className="form-control" type="text" name="name" id="name" placeholder="First Name" required="" autocomplete="off" aria-required="true" />

        </div>
        <div className="form-group">
          <input className="form-control" type="email" name="email" placeholder="E-mail" required="" autocomplete="off" aria-required="true" />
        </div>
        <div className="form-group">
          <input type="password" name="pass" className="form-control" placeholder="Password" required="" autocomplete="off" aria-required="true" />
        </div>
        <input className="btn-modal" id="sign_up" type="button" value="Sign Up" />
      </form>
    </div>
  </Modal>

  {// <!-- signUp End -->
    //<!-- login --> 
  }

  <Modal open={login} onClose={onCloseModalclose}>

    <div className="modal-body">
      <h2>Login</h2>
      <span className="subtitle">Just fill in the form below</span>
      <form className="contact-form form-validate4" novalidate="novalidate" onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="username"> Username</label>
          <input className="form-control" type="email" name="uname" placeholder="E-mail" required="" autocomplete="off" aria-required="true" />

        </div>
        {renderErrorMessage("uname")}
        <div className="form-group">
          <label for="username">Password</label>

          <input type="password" name="pass" className="form-control" placeholder="Password" required="" autocomplete="off" aria-required="true" />

        </div>
        {renderErrorMessage("pass")}
        <center><input className="btn-modal" id="login_btn" type="submit" value="Login" /></center>
      </form>
    </div>

  </Modal>

</>
  );
};
export default ResponsiveAppBar;
