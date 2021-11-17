import React from "react";
import "./header.css";
import logo from "../images/logo.png";
const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" />
      </div>
      <input type="checkbox" id="openSidebarMenu" />
      <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
        <div className="spinner top" />
        <div className="spinner middle" />
        <div className="spinner bottom" />
      </label>
      <div id="sidebarMenu">
        <ul className="menu">
          <li className="Dashboard_link">
            <span>Dashboard</span>
          </li>
          <li className="Dashboard_link">
            <span>Master</span>
          </li>
          <li className="Dashboard_link">
            <span>Donors</span>
          </li>
          <li className="Dashboard_link">
            <span>NGO</span>
          </li>
          <li className="Dashboard_link">
            <span>Accounts</span>
          </li>
          <li className="Dashboard_link">
            <span>Setting</span>
          </li>
          <li className="Dashboard_link">
            <span>Donar Email</span>
          </li>
          <li className="Dashboard_link">
            <span>Donar Email</span>
          </li>
          <li className="Dashboard_link">
            <span>Log out</span>
          </li>
        </ul>
      </div>
      <div className="main">
        <h1>Pure CSS Sidebar Toggle Menu</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
          repellat, eos, blanditiis, unde, accusamus voluptatibus numquam
          inventore quas voluptate consequatur consequuntur. Incidunt fugit
          dolor dolorem praesentium quidem debitis sint quaerat perspiciatis
          architecto quibusdam et, officia facilis impedit porro expedita
          molestias nesciunt iste ex eveniet adipisci id non nisi aspernatur
          inventore! Ipsa voluptates omnis modi veniam neque illo. Nihil facilis
          eius pariatur aperiam ut porro, provident voluptas at libero sit
          similique molestias reiciendis nobis veniam inventore modi quasi,
          aspernatur labore quaerat incidunt in laborum? Expedita, fuga,
          voluptas. Suscipit sunt praesentium dolore perspiciatis, ea
          consectetur ipsum. Nostrum dolor itaque vitae quis fugit, deserunt
          assumenda culpa in numquam impedit sunt fuga voluptates dolores
          praesentium enim dolorem beatae, illum molestiae, atque. Eveniet
          dolores animi mollitia quibusdam similique ab ut. Maxime obcaecati
          dignissimos cum tenetur, quaerat molestiae laboriosam itaque,
          explicabo nisi fugiat maiores repellendus. Molestias sed rerum, atque
          ipsa nam excepturi eos, eveniet ex dignissimos quam inventore,
          architecto fugit maiores veniam illo. Repellat mollitia cumque quia
          eos iure rem quo quisquam quos maiores sint! Beatae blanditiis,
          dolore. Quae tempora, maxime, nulla perspiciatis officia harum nisi
          quos officiis sed reprehenderit beatae aperiam provident eum dolor
          dignissimos a sunt sequi laudantium error, pariatur sapiente excepturi
          quis distinctio nam! Incidunt voluptatem velit et odio laudantium,
          eveniet, nesciunt, deserunt aut ea suscipit praesentium asperiores
          tenetur omnis, quam deleniti officiis eius rerum temporibus. Neque
          quis eius culpa quisquam enim nam sapiente perferendis quas,
          laboriosam atque! Unde ipsam repellendus laudantium, eveniet excepturi
          aliquid dolore voluptates odio! Ipsa unde suscipit, maiores quisquam
          ducimus in pariatur esse dolore error laborum similique veniam quae
          sint atque aspernatur possimus magnam. Dolore, voluptate, quos iusto
          harum magni aliquam quaerat atque eos nesciunt sunt, ad dolor
          repellendus, unde quas culpa? Fuga corporis reprehenderit ex
          repudiandae assumenda cumque quas! Molestias modi unde vero non
          pariatur at ipsa laborum.
        </p>
      </div>
    </>
  );
};

export default Header;
