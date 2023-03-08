import { useCallback, useMemo, useState } from 'react';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar, { ToolbarProps } from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styled from '@mui/system/styled'
import { DRAWER_WIDTH } from '../../utils/constants';
import { entering, leaving } from '../../theme/transitions'
import Stack from '@mui/material/Stack'
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Theme } from "@mui/material/styles";
import { DrawerStyledProps } from './app-drawer';

const pathArr = [
  { label: "Home", icon: ">" },
  { label: "OC", icon: ">"},
  { label: "Item search", icon: ""},
]


const Appbar = ({ open }: { open: boolean }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleLogout = async () => {
    setAnchorEl(null)
  }

  return (
    <AppBar position="fixed" open={open}>
      <Bar>
        <Stack direction="row" spacing={1} alignItems="center" width="100%" ml={open ? 0 : 7}>
            {pathArr?.map(row =>
              <Stack direction="row" alignItems="center" key={row.label} spacing={2}>
                <Typography>{row.label}</Typography>
                <Typography>{row.icon}</Typography>
              </Stack>
            )}
        </Stack>
      </Bar>
    </AppBar>
  )
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop: string) => prop !== 'open',
})(({ theme, open }: DrawerStyledProps) => ({
  zIndex: theme?.zIndex.drawer,
  backgroundColor: theme?.palette.primary.main,
  height: theme?.spacing(8),

  '& MuiToolbar-root': {
    backgroundColor: theme?.palette.primary.main,
  },
  ...(open && theme && {
    ...entering(theme, ['width', 'margin']),
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: DRAWER_WIDTH,
  }),
  ...(!open && theme && {
    ...leaving(theme, ['width', 'margin']),
  }),
}));

const Bar = styled(Toolbar)<ToolbarProps>
  (({ theme }) => `
  display: flex;
  flex-direction: row-reverse;
`)

export default Appbar