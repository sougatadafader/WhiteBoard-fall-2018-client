export default class WidgetService {
    static findAllWidgets = (tid) => {
        let WIDGET_API_URL = "http://localhost:9090/api/topic/{tid}/widget";
        return fetch(WIDGET_API_URL)
            .then(response =>
                response.json())
    };

    static createWidget = (widget, topicId) => {

        let url = "http://localhost:9090/api/topic/{topicId}/widget/heading";
        return fetch(url, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(widget),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
    }
}