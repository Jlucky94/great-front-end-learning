import React from 'react';
import {ItemType} from "ReactTasks/Accordion/Accordion";

const AccordionItem = ({item}: { item: ItemType }) => {
    const [collapsed, setCollapsed] = React.useState(true)

    return (
        <>
            <div onClick={() => setCollapsed(prev => !prev)}>
                {item.title}
            </div>
            <div>
                {!collapsed && item.content}
            </div>
        </>
    )
}

export default AccordionItem;