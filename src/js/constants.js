const DEFAULT_VALUES = {
    DEFAULT_SECOND_NUMBER: null,
    DEFAULT_FIRST_NUMBER: null,
    DEFAULT_OPERATION: null,
    DEFAULT_RESULT: null,
    MAX_LINE_LENGTH: 16,
    LENGTH_FOR_SWITCH_FONT_SIZE_MEDIUM: 10,
    FONT_SIZE_MEDIUM: "26px",
    FONT_SIZE_LARGE: "42px",
    HISTORY_SCROLL_LENGTH: 35,
}
const ELEMENTS_PROPERTY = {
    TAG_NAME_FOR_BUTTONS: "button",
    TAG_NAME_FOR_DISPLAY: "div",
    ROOT_FOR_BUTTONS: ".button",
    ROOT_FOR_MAIN: ".calculator",
    ROOT_FOR_DISPlAY: ".display",
    ROOT_FOR_HISTORY_ELEMENTS: ".display__history",
    DISPLAY_CLASS: "display",
    DISPLAY_TYPE: "displayElement",
    DISPLAY_CLASS1: "button",
    DISPLAY_CLASS2: "display__history",
    DISPLAY_CLASS3: "display__result",
    DISPLAY_CLASS_HISTORY_RESULT: "display__history_history-result",
    DISPLAY_TYPE_HISTORY_RESULT: "displayHistoryResult",
    DISPLAY_CLASS_MOVE_BUTTON: "display__history_move-button",
    DISPLAY_TYPE_MOVE_BUTTON: "displayMoveButton",
    BUTTON_CLASS_GENERAL: "button__element",
    BUTTON_CLASS_OPERATION:"button__element_operation",
    BUTTON_CLASS_NUMBER: "button__element_number",
    BUTTON_CLASS_EQUAL: "button__element_equal",
    OPERATION_TYPE_COMPLEX_OPERATION: "complexOperation",
    OPERATION_TYPE_CLEANUP_OPERATION: "cleanupOperation",
    OPERATION_TYPE_BASIC_OPERATION: "basicOperation",
    OPERATION_TYPE_POINT: "pointOperation",
    OPERATION_TYPE_NUMBER: "number",
    OPERATION_TYPE_EQUAL: "equal",
    OPERATION_TYPE_OTHER: "other"
}
const BUTTONS_CONTENT = {
    PERCENT: "%",
    CLEAN_LINE: "CE",
    CLEAN_ALL: "C",
    CLEAN_SYMBOL: "<",
    REVERSE: "1/x",
    SQUARE: "x²",
    SQUARE_ROOT: "\u221Ax",
    DIVISION: "\xF7",
    SEVEN: "7",
    EIGHT: "8",
    NINE: "9",
    MULTIPLICATION: "\xD7",
    FOUR: "4",
    FIVE: "5",
    SIX: "6",
    SUBTRACTION: "-",
    ONE: "1",
    TWO: "2",
    THREE: "3",
    ADDITION: "+",
    NEGATE: "±",
    ZERO: "0",
    POINT: ".",
    EQUAL: "=",
    MOVE_LEFT: "<",
    MOVE_RIGHT: ">",
}
const ELEMENTS = [
    {
        BUTTON_CLASS: ELEMENTS_PROPERTY.DISPLAY_CLASS2,
        OPERATION_TYPE: ELEMENTS_PROPERTY.DISPLAY_TYPE,
    },
    {
        BUTTON_CLASS: ELEMENTS_PROPERTY.DISPLAY_CLASS3,
        OPERATION_TYPE: ELEMENTS_PROPERTY.DISPLAY_TYPE,
    },
    {
        CONTENT: BUTTONS_CONTENT.PERCENT,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_COMPLEX_OPERATION,
    },
    {
        CONTENT: BUTTONS_CONTENT.CLEAN_LINE,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_CLEANUP_OPERATION,
    },
    {
        CONTENT: BUTTONS_CONTENT.CLEAN_ALL,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_CLEANUP_OPERATION,
    },
    {
        CONTENT: BUTTONS_CONTENT.CLEAN_SYMBOL,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_CLEANUP_OPERATION,
    },
    {
        CONTENT: BUTTONS_CONTENT.REVERSE,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_COMPLEX_OPERATION,
    },
    {
        CONTENT: BUTTONS_CONTENT.SQUARE,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_COMPLEX_OPERATION,
    },
    {
        CONTENT: BUTTONS_CONTENT.SQUARE_ROOT,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_COMPLEX_OPERATION,
    },
    {
        CONTENT: BUTTONS_CONTENT.DIVISION,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_BASIC_OPERATION,
    },
    {
        CONTENT: BUTTONS_CONTENT.SEVEN,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER,
    },
    {
        CONTENT: BUTTONS_CONTENT.EIGHT,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER,
    },
    {
        CONTENT: BUTTONS_CONTENT.NINE,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER,
    },
    {
        CONTENT: BUTTONS_CONTENT.MULTIPLICATION,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_BASIC_OPERATION,
    },
    {
        CONTENT: BUTTONS_CONTENT.FOUR,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER,
    },
    {
        CONTENT: BUTTONS_CONTENT.FIVE,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER,
    },
    {
        CONTENT: BUTTONS_CONTENT.SIX,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER,
    },
    {
        CONTENT: BUTTONS_CONTENT.SUBTRACTION,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_BASIC_OPERATION,
    },
    {
        CONTENT: BUTTONS_CONTENT.ONE,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER,
        ROOT_ELEMENT: ELEMENTS_PROPERTY.ROOT_FOR_BUTTONS
    },
    {
        CONTENT: BUTTONS_CONTENT.TWO,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER,
    },
    {
        CONTENT: BUTTONS_CONTENT.THREE,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER,
    },
    {
        CONTENT: BUTTONS_CONTENT.ADDITION,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_BASIC_OPERATION,
    },
    {
        CONTENT: BUTTONS_CONTENT.NEGATE,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_COMPLEX_OPERATION,
    },
    {
        CONTENT: BUTTONS_CONTENT.ZERO,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER,
    },
    {
        CONTENT: BUTTONS_CONTENT.POINT,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_POINT,
    },
    {
        CONTENT: BUTTONS_CONTENT.EQUAL,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_EQUAL,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_EQUAL,
    },
]
const HISTORY_ELEMENTS = [
    {
        CONTENT: BUTTONS_CONTENT.MOVE_LEFT,
        BUTTON_CLASS: ELEMENTS_PROPERTY.DISPLAY_CLASS_MOVE_BUTTON,
        OPERATION_TYPE: ELEMENTS_PROPERTY.DISPLAY_TYPE_MOVE_BUTTON,
    },
    {
        BUTTON_CLASS: ELEMENTS_PROPERTY.DISPLAY_CLASS_HISTORY_RESULT,
        OPERATION_TYPE: ELEMENTS_PROPERTY.DISPLAY_TYPE_HISTORY_RESULT,
    },
    {
        CONTENT: BUTTONS_CONTENT.MOVE_RIGHT,
        BUTTON_CLASS: ELEMENTS_PROPERTY.DISPLAY_CLASS_MOVE_BUTTON,
        OPERATION_TYPE: ELEMENTS_PROPERTY.DISPLAY_TYPE_MOVE_BUTTON,
    },
]

export {DEFAULT_VALUES, ELEMENTS_PROPERTY, BUTTONS_CONTENT, ELEMENTS, HISTORY_ELEMENTS}