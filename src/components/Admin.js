import AdminFooter from "./AdminFooter";
import AdminHome from "./AdminHome";
import AdminNav from "./AdminNav";
import AdminSidebar from "./AdminSidebar";

function Admin(){
    return(
        <>
            <AdminNav/>
            <AdminSidebar/>
            <AdminHome/>
            <AdminFooter/>
        </>
    )
}

export default Admin; 