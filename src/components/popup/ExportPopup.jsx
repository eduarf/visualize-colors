import styled from "styled-components";
import { offExport } from "../../features/ThemeSlice";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";


const StyledExportCard = styled.div`
  height: 450px;
  width: 900px;
  background-color: #fff;
  border-radius: 1rem;
`;


export default function ExportPopup() {

    const ref = useRef(null);
    const dispatch = useDispatch();
    const [activeMenu, setActiveMenu] = useState(null);

    const handleMenuClick = (id) => {
      setActiveMenu(activeMenu === id ? null : id);
    };

    const menuItems = [
        { id: 1, label: 'Menu 1', submenu: ['Submenu 1.1', 'Submenu 1.2', 'Submenu 1.3'] },
        { id: 2, label: 'Menu 2', submenu: ['Submenu 2.1', 'Submenu 2.2'] },
        { id: 3, label: 'Menu 3', submenu: ['Submenu 3.1', 'Submenu 3.2', 'Submenu 3.3'] },
        { id: 4, label: 'Menu 4', submenu: ['Submenu 4.1', 'Submenu 4.2', 'Submenu 4.3'] },
        { id: 5, label: 'Menu 5', submenu: ['Submenu 5.1', 'Submenu 5.2', 'Submenu 5.3'] },
      ];
  
    useEffect(() => {
      document.addEventListener('click', handleClickOutside, true);
  
      return () => {
        document.removeEventListener('click', handleClickOutside, true);
      };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        dispatch(offExport());
      }
    };
  return (
    <StyledExportCard ref={ref}>
        {menuItems.map((item) => (
        <div key={item.id} className="menu-item">
          <div onClick={() => handleMenuClick(item.id)}>{item.label}</div>
          {activeMenu === item.id && (
            <div className="submenu">
              {item.submenu.map((subitem, index) => (
                <div key={index} className="submenu-item">
                  {subitem}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      </StyledExportCard>
  )
}
