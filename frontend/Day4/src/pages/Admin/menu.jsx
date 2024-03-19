import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import '../../css/menu.css'
export default function Menu() {
    const [menus, setMenus] = useState([
      {
        mid: 1,
        hotelName: "Hotel ABC",
        foodName: "Paneer Tikka",
        foodImage: "https://images.pexels.com/photos/3928854/pexels-photo-3928854.png?auto=compress&cs=tinysrgb&w=600",
        rating: 4.5,
      },
      {
        mid: 2,
        hotelName: "Hotel XYZ",
        foodName: "Chicken Biryani",
        foodImage: "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        rating: 4.0,
      },
      {
        mid: 2,
        hotelName: "Hotel XYZ",
        foodName: "Chicken Pasta",
        foodImage: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600",
        rating: 4.3,
      },
      // Add more menu items as needed
    ]);
  
    return (
      <>
        <div className="landing-menu">
        <h1>Menu Management</h1>
          <div className="hotel-menu-card">
            {menus.map((menu) => (
              <div key={menu.mid} className="menu-card">
                  <div className="menu-items-card">
                    <div>
                      <img
                        src={menu.foodImage}
                        alt={menu.foodName}
                        className="foodImage-tag"
                        width="300px"
                        height="300px"
                      />
                    </div>
                    <div className="menu-card-items">
                      <div className="left">
                        <div className="hotel-name-card">
                          {/* <b>{menu.hotelName}</b> */}
                        </div>
                        <div className="food-item-card">
                          <b>{menu.foodName}</b>
                        </div>
                      </div>
                      <div className="right">
                        <div className="rating-hotel">
                          <FaStar style={{ width: "15px", height: "15px" }} />
                          {menu.rating}
                        </div>
                        {/* Add price if needed */}
                      </div>
                    </div>
                  </div>
                <br />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
  