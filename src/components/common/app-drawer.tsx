import { Fragment, memo, PropsWithChildren, useState, useEffect } from 'react';
import { useNavigate, useMatch } from 'react-router-dom'
import styled from '@mui/system/styled';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CssBaseline from '@mui/material/CssBaseline';

import AppBar from './drawer-bar'
import DrawerHeader from './drawer-header';
import DrawerList from './drawer-list';
import { DASHBOARD } from '../../utils/routes';
import { entering, leaving, openedMixin, closedMixin } from '../../theme/transitions'
import { DRAWER_WIDTH } from '../../utils/constants'
import { Theme } from "@mui/material/styles";

export type DrawerStyledProps = {
  theme?: Theme;
  open?: boolean;
}

const LINKS = [
  { url: DASHBOARD, text: "Dashboard", icon: <DashboardIcon /> },
  // { url: "", text: "Users", icon: <UsersIcon /> },
  // { url: "", text: "Cards", icon: <CardsIcon /> },
  // {
  //   url: "",
  //   text: "Withdrawals",
  //   icon: <PaidIcon />,
  // },
  // {
  //   url: "",
  //   text: "Deposits",
  //   icon: <AddCardIcon />,
  // },
  // {
  //   url: "",
  //   text: "Transactions",
  //   icon: <ReceiptIcon />,
  // },
];

const AppDrawer = (props: PropsWithChildren) => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const match = useMatch("/")

  const handleNavigate = (url: string) => {
    navigate(url)
  }

  useEffect(() => {
    if (match) navigate("/home")
  }, [navigate, match])

  const toggleDrawer = () => {
    setOpen(prev => !prev)
  };

  return (
    <Fragment>
      <CssBaseline />
      <DrawerWrapper>
        <AppBar open={open} />
        <Drawer variant="permanent" open={open}>
          <DrawerHeader toggle={toggleDrawer} open={open} />
          <DrawerList open={open} links={LINKS} navigate={handleNavigate} />
        </Drawer>
        <DrawerContent component="main" open={open}>
          {props.children}
        </DrawerContent>
      </DrawerWrapper>
    </Fragment>
  );
}

const DrawerWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.body,
  width: '100vw',
  height: '100vh',
  overflowX: 'hidden'
}))

const Drawer = styled(MuiDrawer, 
  { shouldForwardProp: (prop: string) => prop !== 'open' })
  (({ theme, open }: DrawerStyledProps) => ({
    width: DRAWER_WIDTH,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    '& .MuiPaper-root': {
      backgroundColor: "#000",

    },
    ...(open && theme && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && theme && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const DrawerContent = styled(Box, { shouldForwardProp: (prop: string) => prop !== 'open' })(
  ({ theme, open }: DrawerStyledProps) => ({
    marginTop: theme?.spacing(10),
    overflowX: 'hidden',
    backgroundColor: '#FFF',
    paddingRight: 62,
    ...(open && theme && {
      ...entering(theme, ['width', 'margin']),
      marginLeft: `calc(${DRAWER_WIDTH}px + ${theme?.spacing(4)})`,
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
    }),
    ...(!open && theme && {
      ...leaving(theme, ['width', 'margin']),
      marginLeft: theme?.spacing(10),
      width: `calc(100% - ${theme?.spacing(11)}) !important`,
    }),
}))

export default memo(AppDrawer)
