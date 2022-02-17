import React from "react";

//components
import TasksContainer from "../../layouts/tasksContainer/tasksContainer";
import Header from "./../../layouts/header/header";
import SideNav from "./../../layouts/sideNav/sideNav";

const Tasks = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <SideNav />
                    </div>
                    <div className="col-9">
                        <TasksContainer />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tasks;
