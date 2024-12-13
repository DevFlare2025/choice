const SubMenu = ({ subMenus, isActive }) => {
    return (
        isActive && (
            <ul className="ml-4 space-y-2 bg-gray-700">
                {subMenus.map((subMenu) => (
                    <li key={subMenu} className="px-4 py-2 hover:bg-gray-600">
                        {subMenu}
                    </li>
                ))}
            </ul>
        )
    )
}

export default SubMenu
