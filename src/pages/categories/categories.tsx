import React from "react";

//components
import Header from "./../../layouts/header/header";
import CategoriesContainer from "./../../layouts/categoriesContainer/categoriesContainer";

const Categories = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="container">
                            <CategoriesContainer />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Categories;
