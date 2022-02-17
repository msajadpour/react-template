import React from "react";

//components
import Header from "../../layouts/header/header";
import SideNav from "../../layouts/sideNav/sideNav";
import TodoyTasks from "../../layouts/todoyTasks/todoysTasks";

const Dashbord = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <SideNav />
                    </div>
                    <div className="col-9">
                        <TodoyTasks />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashbord;
