var tests = [];
for (var file in window.__karma__.files) {
    if (/-test\.js$/.test(file)) {
        tests.push(file);
    }
}

require.config({
	baseUrl: '/base/src/main/webapp/js',
	paths: {
        vue: [
            'lib/vue.min'
        ],
        axios: [
            'lib/axios.min'
        ],
        'bootstrap-native': [
            'lib/bootstrap-native-v4'
        ],
        'axios-mock-adapter': [
            'lib/axios-mock-adapter.min'
        ]
    },
	deps: tests,
    callback: window.__karma__.start
});