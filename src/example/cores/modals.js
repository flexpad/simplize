export let modals = {
    template: require('../../html/webviews/modals.html'),
    data: {
        components: [
            { text: 'Alert', url: '/modal/alert' },
            { text: 'Confirm', url: '/modal/confirm' },
            { text: 'Prompt', url: '/modal/prompt' },
            { text: 'ActionSheet', url: '/modal/actionsheet' },
            { text: 'Toast', url: '/modal/toast' },
            { text: 'Loading', url: '/modal/loading' },
            { text: 'Selector', url: '/modal/selector' },
            { text: 'Datetime', url: '/modal/datetime' },
            { text: 'Tip', url: '/modal/tip' },
            { text: 'Popup', url: '/modal/popup' },
            { text: 'Popover', url: '/modal/popover' }
            { text: 'iframe', url: '/modal/iframe' }
        ]
    },
    events: {
        "webview:preset": function (headbar, toolbar) {
            headbar.active();
            headbar.data.left.icon = '<i class="iconfont icon-back"></i>';
            headbar.data.left.text = 'Back';
            headbar.data.left.click = function () { history.back(); }
            headbar.data.center.text = 'Simplize Modals';
        }
    }
}
