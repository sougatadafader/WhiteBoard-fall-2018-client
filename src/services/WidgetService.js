export default class WidgetService {
    static findAllWidgets = (tid) => {
        let WIDGET_API_URL = "https://guarded-depths-89666.herokuapp.com/api/topic/{tid}/widget";
        return fetch(WIDGET_API_URL)
            .then(response =>
                response.json())
    };

    static createWidget = (widget, topicId) => {

        let url = "https://guarded-depths-89666.herokuapp.com/api/topic/{topicId}/widget/heading";
        return fetch(url, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(widget),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
    }
    static loadWidget = (topicId) => {
        let url = "https://guarded-depths-89666.herokuapp.com/api/topic/{topicId}/widget/";
        return fetch(url, {
            credentials: 'include',
        }).then(response => console.log(response.json())
        )
    }

}