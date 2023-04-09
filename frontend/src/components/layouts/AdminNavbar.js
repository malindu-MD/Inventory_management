import { Button } from "@chakra-ui/react";

function AdminNavbar(){

    const handleLogout=()=>{
        
    }

    return (
        <div className="admin-navbar">
          <h2>inventory dashboard</h2>
          <div className="admin-navbar-bittons">
            <Button colorScheme='red'  variant='outline' onClick={handleLogout}>Logout</Button>
          </div>
        </div>
    );
}

export default AdminNavbar;