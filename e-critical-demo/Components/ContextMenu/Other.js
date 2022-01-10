
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import classes from './ContextMenu.module.css';
const menu = [
      {
            className: "fas fa-pen opacity-75",
            displayName: "Edit",
            action: "edit"
      },
      {
            className: "fas fa-user-minus opacity-75",
            displayName: "Discharge",
            action: "discharge",
      },
      {
            className: "fas fa-tasks opacity-75",
            displayName: "Report Status",
            action: "status",
      },
      {
            className: "fas fa-exchange-alt opacity-75",
            displayName: "Ward Transfer",
            action: "transfer",
      },
      {
            className: "fas fa-user opacity-75",
            displayName: "Patient Condition",
            action: "Condition",
      },
      {
            className: "fas fa-tasks opacity-75",
            displayName: "Report Status",
            action: "dfgdg",
      },
      {
            className: "fas fa-exchange-alt opacity-75",
            displayName: "Ward Transfer",
            action: "dfdg",
      },
      {
            className: "fas fa-user opacity-75",
            displayName: "Patient Condition",
            action: "dfdf",
      },
];

const LongMenu = (props) => {


      return (
            <Menu
                  id="long-menu"
                  MenuListProps={{
                        'aria-labelledby': 'long-button',
                  }}
                  anchorEl={props.anchorEl}
                  open={props.open}
                  onClose={props.handleClose}
            >
                  {menu.map((item) => (
                        <MenuItem className={`${classes["contetMenu-item"]}`} key={item.action} onClick={props.handleClose} > <span className={`me-2 py-2 ${item.className}`}></span>
                              {item.displayName}</MenuItem>
                  ))}
            </Menu>

      );
}
export default LongMenu;