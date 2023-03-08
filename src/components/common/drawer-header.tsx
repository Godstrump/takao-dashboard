import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import styled from '@mui/system/styled';
import Stack from '@mui/material/Stack';
import Logo from '../../assets/img/logo.svg';
import Typography from '@mui/material/Typography';
import { Theme } from "@mui/material/styles";

type DrawerHeaderProps = {
  toggle: () => void,
  open: boolean
}

const DrawerHeader = ({ toggle, open }: DrawerHeaderProps) => {
  return (
    <DrawerHeaderEl>
      <Stack position='relative' left={-73} top={6} alignItems='flex-start'>
        <img
          src={Logo}
          alt="Logo"
          height={50}
          width={100}
          style={{ filter: "invert(100%) sepia(93%) saturate(0%) hue-rotate(96deg) brightness(104%) contrast(102%)" }} />
        <Typography fontSize={11} fontWeight={500} fontFamily="Poppins" position="relative" bottom={13} left={10}>ADMIN</Typography>
      </Stack>
      <IconButton onClick={toggle} color="inherit">
        {!open ? <ChevronRightIcon color="inherit" /> : <ChevronLeftIcon color="inherit" />}
      </IconButton>
    </DrawerHeaderEl>
  )
}

const DrawerHeaderEl = styled('div')(({ theme }: { theme?: Theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme?.spacing(0, 1),
  width: '100%',
  color: '#FFF',
  // necessary for content to be below app bar
  ...theme?.mixins.toolbar,
}));

export default DrawerHeader