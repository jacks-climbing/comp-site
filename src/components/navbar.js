import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faCampground, faClipboard, faListUl, faSmile, faDirections, faQuestionCircle, faHome } from '@fortawesome/free-solid-svg-icons'
import { HashLink as Link } from 'react-router-hash-link';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

 

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Home', 'About', 'Sign Up', 'Comp Rules', 'Route List', 'Directions', 'Camping Info', 'Sponsors'].map((text, index) => (
            <Link smooth to={"/#" + text.toLowerCase().replace(/\s/g, "_")}
                    style={{
                      textDecoration:"none",
                      color: 'black' }} 
                    >
            <ListItem button key={text} id={index}>  
            <ListItemIcon>{ index === 0 ? <FontAwesomeIcon icon={faHome}                      size="2x" aria-labelledby={"#" + index} /> :
                            index === 1 ? <FontAwesomeIcon icon={faQuestionCircle}      size="2x" aria-labelledby={"#" + index} /> :
                            index === 2 ? <FontAwesomeIcon icon={faSignInAlt} size="2x" aria-labelledby={"#" + index} /> : 
                             index === 3 ? <FontAwesomeIcon icon={faClipboard} size="2x" aria-labelledby={"#" + index}/> : 
                             index === 4 ? <FontAwesomeIcon icon={faListUl} size="2x" aria-labelledby={"#" + index}/> :
                             index === 5 ? <FontAwesomeIcon icon={faDirections} size="2x" aria-labelledby={"#" + index}/> :
                             index === 6 ? <FontAwesomeIcon icon={faCampground} size="2x" aria-labelledby={"#" + index}/> :
                             index === 7 ? <FontAwesomeIcon icon={faSmile} size="2x" aria-labelledby={"#" + index}/> :
                             null}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        
        
      </main>
    </div>
  );
}

export default Navbar;
