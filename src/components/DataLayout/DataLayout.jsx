import React from "react";
import { Outlet, NavLink } from "react-router";

export default function DataLayout() {
  return (
    <>
      <div>
        <h1>Header</h1>
        <div>
          <ul>
            <li>
              <NavLink to="/data/customer">Customer</NavLink>
            </li>
            <li>
              <NavLink to="/data/product">Product</NavLink>
            </li>
            <li>
              <NavLink to="/data/seller">Seller</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <p>Footer</p>
      </div>
    </>
  );
}