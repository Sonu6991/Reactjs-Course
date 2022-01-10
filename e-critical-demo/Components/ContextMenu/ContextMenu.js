import { Card, MenuItem } from "@mui/material";


const menu = [
    { className: "fas fa-pen opacity-75", displayName: "Edit", action: "edit" },
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

const ContextMenu = ({ mousePosition }) => {
    console.log("mousePosition", mousePosition);
    const style = { position: "fixed", left: `${mousePosition.x}px`, top: ` ${mousePosition.y}px` }

    return (
        <Card style={style} id="context-menu">
            {menu.map(item => {
                return <MenuItem key={item.action} onClick={close}>{item.displayName}</MenuItem>
            })}
        </Card>
    )
}
export default ContextMenu;