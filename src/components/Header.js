import React, { useState, useEffect, useMemo } from 'react';

function Header(props) {

    const { setCurrentStep } = props;

    const navItems = useMemo(() => [
        "models",
        "colors",
        "accessories",
        "summary"
    ], []);
      
    const [selectedNavItem, setSelectedNavItem] = useState(navItems[0]);

    const handleNavItemClick = (navItem) => {
        setSelectedNavItem(navItem);
    };

    useEffect(() => {
        const currentStep = navItems.indexOf(selectedNavItem) + 1;
        setCurrentStep(currentStep);
    }, [navItems, selectedNavItem, setCurrentStep]);
      
    return (
        <header>
            <h1>Product Builder</h1>
            <nav>
                <ul>
                    <li className={selectedNavItem === navItems[0] ? "active" : ""} onClick={() => handleNavItemClick(navItems[0])}>
                        <a href={`#${navItems[0]}`}>{navItems[0]}</a>
                    </li>
                    <li className={selectedNavItem === navItems[1] ? "active" : ""} onClick={() => handleNavItemClick(navItems[1])}>
                        <a href={`#${navItems[1]}`}>{navItems[1]}</a>
                    </li>
                    <li className={selectedNavItem === navItems[2] ? "active" : ""} onClick={() => handleNavItemClick(navItems[2])}>
                        <a href={`#${navItems[2]}`}>{navItems[2]}</a>
                    </li>
                    <li className={selectedNavItem === navItems[3] ? "active" : ""} onClick={() => handleNavItemClick(navItems[3])}>
                        <a href={`#${navItems[3]}`}>{navItems[3]}</a>
                    </li>
                </ul>
            </nav>
        </header>  
    );
}

export default Header;