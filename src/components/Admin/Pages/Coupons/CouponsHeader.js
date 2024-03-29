import React from 'react';
import { BiPlus } from "react-icons/bi";

const CouponsHeader = ({handleCouponDrawerOpen}) => {
    return (
        <div className="row header-content-row">
            <div className="header-title col-lg-2">Category</div>
            <div className="col-lg-10">
                <div className ="row">
                    <div className="form-group col-lg-3">
                        <select id="category" defaultValue="" className="form-control">
                            <option value="" disabled>Status</option>
                            <option value="active">Active</option>
                            <option value="revoked">Revoked</option>
                        </select>
                    </div>
                    <div className="form-group col-lg-6">
                        <input type="text" id="search" className="form-control" placeholder="Ex: Search By Name"/>
                    </div>
                    <div className="col-lg-3">
                        <div className="add-category-btn" onClick={()=>handleCouponDrawerOpen("add")}>
                            <BiPlus size={20}></BiPlus> Add Campaign
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CouponsHeader;