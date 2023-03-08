import MenuEl from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

interface MenuData {
    label: string;
    action: (e: any, id: unknown) => void
}

interface MenuProps {
    anchorEl: null | HTMLElement;
    open: boolean;
    handleClose: (event?: any) => void;
    data: MenuData[]
    id: unknown;
}

const Menu = ({ anchorEl, open, handleClose, data, id }: MenuProps) => {
  return (
    <MenuEl
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
      {data && data.map((item) =>
        <MenuItem key={item.label} onClick={(e: any) => item.action(e, id)}>{item.label}</MenuItem>)
      }
    </MenuEl>
  )
}

export default Menu