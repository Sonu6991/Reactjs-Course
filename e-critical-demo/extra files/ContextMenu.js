import { Card, MenuItem } from "@mui/material";
import classes from './ContextMenu.module.css';



const ContextMenu = ({ mousePosition }) => {
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
    ];


    console.log("mousePosition", mousePosition);
    const style = { position: "fixed", left: `${mousePosition.x}px`, top: ` ${mousePosition.y}px`, zIndex: 3 }

    return (
        <Card style={style} id="context-menu" className={`${classes.contextMenu}`}>
            {menu.map(item => {
                return <MenuItem className={`${classes["contetMenu-item"]}`} key={item.action} onClick={close} > <span className={`me-2 py-2 ${item.className}`}></span>
                    {item.displayName}</MenuItem>
            })}
        </Card >
    )
}
export default ContextMenu;