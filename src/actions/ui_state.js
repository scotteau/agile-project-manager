export const SHOW_PROJECT_CARD_POPUP = "SHOW_PROJECT_CARD_POPUP";
export const show_projectCard_popup = ({ anchor }) => {
    return {
        type: SHOW_PROJECT_CARD_POPUP,
        anchor,
    };
};

export const HIDE_PROJECT_CARD_POPUP = "HIDE_PROJECT_CARD_POPUP";
export const hide_projectCard_popup = () => {
    return {
        type: HIDE_PROJECT_CARD_POPUP,
    };
};
//=======
export const SHOW_ADD_MEMBER_POPUP = "SHOW_ADD_MEMBER_POPUP";
export const show_addmember_popup = () => {
    return {
        type: SHOW_ADD_MEMBER_POPUP,
    };
};
export const HIDE_ADD_MEMBER_POPUP = "HIDE_ADD_MEMBER_POPUP";
export const hide_addmember_popup = () => {
    return {
        type: HIDE_ADD_MEMBER_POPUP,
    };
};
//========
export const CLEAR_PROJECT_CARD_HOLD = "CLEAR_PROJECT_CARD_HOLD";

export const clear_projectCard_hold = () => {
    return {
        type: CLEAR_PROJECT_CARD_HOLD,
    };
};

export const DRAWER_OPENED = "DRAWER_OPENED";
export const DRAWER_CLOSED = "DRAWER_CLOSED";

export const open_app_drawer = () => {
    return {
        type: DRAWER_OPENED,
    };
};

export const close_app_drawer = () => {
    return {
        type: DRAWER_CLOSED,
    };
};

export const SHOW_HEADER_PROJECT_ICON_POPUP = "SHOW_HEADER_PROJECT_ICON_POPUP";

// - header - project - icon
export const show_header_projectIcon_popup = ({ anchor }) => {
    return {
        type: SHOW_HEADER_PROJECT_ICON_POPUP,
        anchor,
    };
};

export const HIDE_HEADER_PROJECT_ICON_POPUP = "HIDE_HEADER_PROJECT_ICON_POPUP";
export const hide_header_projectIcon_popup = () => {
    return {
        type: HIDE_HEADER_PROJECT_ICON_POPUP,
    };
};

//header - project - profile
export const SHOW_HEADER_PROFILE_POPUP = "SHOW_HEADER_PROFILE_POPUP";
export const show_header_profile_popup = ({ anchor }) => {
    return {
        type: SHOW_HEADER_PROFILE_POPUP,
        anchor,
    };
};
export const HIDE_HEADER_PROFILE_POPUP = "HIDE_HEADER_PROFILE_POPUP";
export const hide_header_profile_popup = () => {
    return {
        type: HIDE_HEADER_PROFILE_POPUP,
    };
};

//header - project - information
export const SHOW_HEADER_PROJECT_INFO_POPUP = "SHOW_HEADER_PROJECT_INFO_POPUP";
export const show_header_projectInfo_popup = ({ anchor }) => {
    return {
        type: SHOW_HEADER_PROJECT_INFO_POPUP,
        anchor,
    };
};
export const HIDE_HEADER_PROJECT_INFO_POPUP = "HIDE_HEADER_PROJECT_INFO_POPUP";
export const hide_header_projectInfo_popup = () => {
    return {
        type: HIDE_HEADER_PROJECT_INFO_POPUP,
    };
};

//header - addButton
export const SHOW_HEADER_ADD_BUTTON_POPUP = "SHOW_HEADER_ADD_BUTTON_POPUP";
export const show_header_addButton_popup = ({ anchor }) => {
    return {
        type: SHOW_HEADER_ADD_BUTTON_POPUP,
        anchor,
    };
};
export const HIDE_HEADER_ADD_BUTTON_POPUP = "HIDE_HEADER_ADD_BUTTON_POPUP";
export const hide_header_addButton_popup = () => {
    return {
        type: HIDE_HEADER_ADD_BUTTON_POPUP,
    };
};

// filterbar - popup
export const SHOW_HEADER_FILTER_POPUP = "SHOW_HEADER_FILTER_POPUP";
export const show_header_filter_popup = ({ anchor, content }) => {
    return {
        type: SHOW_HEADER_FILTER_POPUP,
        anchor,
        content,
    };
};

export const HIDE_HEADER_FILTER_POPUP = "HIDE_HEADER_FILTER_POPUP";
export const hide_header_filter_popup = () => {
    return {
        type: HIDE_HEADER_FILTER_POPUP,
    };
};

// taskcard - context popup
export const SHOW_TASKCARD_CONTEXT_MENU_POPUP =
    "SHOW_TASKCARD_CONTEXT_MENU_POPUP";
export const show_taskcard_context_menu = ({
    anchor,
    task,
    columnId,
    project,
}) => {
    return {
        type: SHOW_TASKCARD_CONTEXT_MENU_POPUP,
        anchor,
        task,
        project,
        columnId,
    };
};
export const HIDE_TASKCARD_CONTEXT_MENU_POPUP =
    "HIDE_TASKCARD_CONTEXT_MENU_POPUP";
export const hide_taskcard_context_menu = () => {
    return {
        type: HIDE_TASKCARD_CONTEXT_MENU_POPUP,
    };
};

export const SHOW_COLUMN_POPUP = "SHOW_COLUMN_POPUP";
export const show_column_popup = ({ anchor, column }) => {
    return {
        type: SHOW_COLUMN_POPUP,
        anchor,
        column,
    };
};

export const HIDE_COLUMN_POPUP = "HIDE_COLUMN_POPUP";
export const hide_column_popup = () => {
    return {
        type: HIDE_COLUMN_POPUP,
    };
};

//taskAssignee scrollable popup
export const SHOW_TASK_ASSIGNEE_SCROLLABLE_POPUP =
    "SHOW_TASK_ASSIGNEE_SCROLLABLE_POPUP";
export const show_task_assignee_scrollable_popup = ({
    anchor,
    assigneeId,
    project,
}) => {
    return {
        type: SHOW_TASK_ASSIGNEE_SCROLLABLE_POPUP,
        anchor,
        assigneeId,
        project,
    };
};
export const HIDE_TASK_ASSIGNEE_SCROLLABLE_POPUP =
    "HIDE_TASK_ASSIGNEE_SCROLLABLE_POPUP";
export const hide_task_assignee_scrollable_popup = () => {
    return {
        type: HIDE_TASK_ASSIGNEE_SCROLLABLE_POPUP,
    };
};

export const SET_TASK_ASSIGNEE = "SET_TASK_ASSIGNEE";
export const set_task_assignee = ({ user, assigneeId }) => {
    return {
        type: SET_TASK_ASSIGNEE,
        user,
        assigneeId,
    };
};
//endregion

// calendar popup
export const SHOW_CALENDAR_POPUP = "SHOW_CALENDAR_POPUP";
export const show_calendar_popup = ({ anchor, calendarId }) => {
    return {
        type: SHOW_CALENDAR_POPUP,
        payload: {
            anchor,
            calendarId,
        },
    };
};

export const HIDE_CALENDAR_POPUP = "HIDE_CALENDAR_POPUP";
export const hide_calendar_popup = () => {
    return {
        type: HIDE_CALENDAR_POPUP,
    };
};