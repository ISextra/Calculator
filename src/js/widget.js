import DomRendererElement from "./domRenderElement.js";
import Button from "./button.js";
import {BUTTONS_CONTENT, DEFAULT_VALUES, ELEMENTS_PROPERTY, WIDGET_ELEMENTS} from "./constants.js";

export default class Widget extends DomRendererElement{
    constructor(rootForMain) {
        super(rootForMain);
        this.documentHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
        this.documentWidth = Math.max(
            document.body.scrollWidth, document.documentElement.scrollWidth,
            document.body.offsetWidth, document.documentElement.offsetWidth,
            document.body.clientWidth, document.documentElement.clientWidth
        );

        this.rootForMain = rootForMain;
        this.rootForDocument = document.querySelector(ELEMENTS_PROPERTY.ROOT_FOR_DOCUMENT);
        this.widget = null;

        this.bindFunctions();
        this.render();
        this.setWidgetLogic();
    }

    bindFunctions() {
        this.onClickHide = this.onClickHide.bind(this);
    }

    render() {
        //виджет (правая часть экрана)
        const params = {
            tagName: ELEMENTS_PROPERTY.TAG_NAME_FOR_DISPLAY,
            classNames: [ELEMENTS_PROPERTY.DISPLAY_CLASS_WIDGET],
            datasetType: ELEMENTS_PROPERTY.DISPLAY_TYPE_WIDGET,
        }

        this.widget = super.render(params);
        this.rootForDocument.append(this.widget);
        this.setWidgetStyle();

        //элементы виджета
        this.widgetElements = WIDGET_ELEMENTS.map(item => {
            switch (item.OPERATION_TYPE) {
                case ELEMENTS_PROPERTY.WIDGET_TYPE_BUTTONS: {
                    const button = new Button();
                    const params = {
                        tagName: ELEMENTS_PROPERTY.TAG_NAME_FOR_BUTTONS,
                        classNames: [item.BUTTON_CLASS],
                        textContent: item.CONTENT,
                        datasetText: item.CONTENT,
                        datasetType: item.OPERATION_TYPE,
                        onClick: this.setWidgetButtonsLogic(item.OPERATION_TYPE, item.CONTENT),
                        switchOfButtonsClickAbility: this.switchOfButtonsClickAbility
                    }

                    button.updateState(params);
                    const renderedElement = button.render(button.getState());

                    return renderedElement;
                }
            }
        });

        this.widget.append(...this.widgetElements);
    }

    setWidgetStyle() {
        this.widget.style.width = this.documentWidth / 4 + 'px';
        this.widget.style.height = this.documentHeight + 'px';
        this.widget.style.left = this.documentWidth - this.widget.getBoundingClientRect().width + "px";
    }

    setWidgetLogic() {
        let widgetElements = this.widgetElements;

        this.widget.addEventListener("mouseover",function () {
            widgetElements.forEach(item => {
                item.style.visibility = DEFAULT_VALUES.STYLE_VISIBLE;
                item.style.opacity = DEFAULT_VALUES.STYLE_OPACITY_VISIBLE;
                item.style.left = DEFAULT_VALUES.ZERO;
                item.style.transform  = `rotate(${DEFAULT_VALUES.ZERO}deg)`;
            })
        })
        this.widget.addEventListener("mouseout",function () {
            widgetElements.forEach(item => {
                item.style.visibility = DEFAULT_VALUES.STYLE_HIDDEN;
                item.style.opacity = DEFAULT_VALUES.STYLE_OPACITY_HIDDEN;
                item.style.left = DEFAULT_VALUES.WIDGET_BUTTON_ANIMATION_LEFT + "px";
                item.style.transform  = `rotate(${DEFAULT_VALUES.WIDGET_BUTTON_ANIMATION_TRANSFORM}deg)`;
            })
        })
    }

    onClickHide(event) {
        const target = event.target;

        if (target.textContent === BUTTONS_CONTENT.HIDE) {
            target.textContent = BUTTONS_CONTENT.SHOW;
            this.rootForMain.style.visibility = DEFAULT_VALUES.STYLE_HIDDEN;

            return
        }

        target.textContent = BUTTONS_CONTENT.HIDE;
        this.rootForMain.style.visibility = DEFAULT_VALUES.STYLE_VISIBLE;
    }

    widgetOperations(text) {
        switch (text) {
            case BUTTONS_CONTENT.HIDE: {
                return this.onClickHide;
            }
        }
    }

    setWidgetButtonsLogic(type, text) {
        switch (type) {
            case ELEMENTS_PROPERTY.WIDGET_TYPE_BUTTONS: {
                return this.widgetOperations(text);
            }
            default: {
                console.warn(`Element ${type} has no initialized logic \n\tat setButtonsLogic() \n\tat widget.js`);
            }
        }
    }


}