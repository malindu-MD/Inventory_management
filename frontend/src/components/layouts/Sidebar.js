import { Link } from "react-router-dom";
import logo from './toolshubicon.png';

function Sidebar() {

    const items = [

        {
            id: 1,
            name: "DashBoard",
            path: "/"
        },
        {
            id: 2,
            name: "Category List",
            path: "/c_list"
        },
        {
            id: 1,
            name: "Product List",
            path: "/p_list"
        },
        {
            id: 1,
            name: "Stock Manager",
            path: "/s_manager"
        },
        {
            id: 1,
            name: "Reports",
            path: "/reports"
        },
        {
            id: 1,
            name: "Add Product",
            path: "/add_product"
        },
        {
            id: 7,
            name: "My Profile",
            path: "/my_profile"
        }
    ]

    return (

        <div className="sidebar">
            <div className="sidebar-icon">

                <img src={logo} />

            </div>

            <div className="sidebar1">



                {items.map((item) => (
                    <Link to={item.path} className="sidebar-item" key={item.id}>{item.name}</Link>
                ))}

            </div></div>

    );

}
export default Sidebar;