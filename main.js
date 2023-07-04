define([
    'base/js/namespace',
    'jquery'
], function(Jupyter, $) {
    function load_ipython_extension() {
        // 環境変数の値を取得する関数
        function getEnvironmentVariableValue(variableName) {
            var value = '';
            // 環境変数の値を取得する方法に応じて、適切なコードを追加してください
            // 例えば、以下のようにprocess.envを使用して環境変数の値を取得できます
            value = process.env[variableName];
            return value;
        }

        // ヘッダーに環境変数の値を表示する関数
        function displayEnvironmentVariable() {
            console.info('displayEnvironmentVariable()')
            var variableName = 'RESEARCH_NAME';  // 表示したい環境変数の名前に置き換えてください
            var variableValue = getEnvironmentVariableValue(variableName);

            if (variableValue !== undefined) {
                // ヘッダーに環境変数の値を表示するための要素を作成
                var headerElement = $('<div>')
                    .attr('id', 'environment-variable-header')
                    .text('Environment Variable: ' + variableValue);

                // ヘッダーの先頭に要素を追加
                $('#header-container').prepend(headerElement);
            }
        }

        // Jupyter Notebookが読み込まれた後に実行される処理
        if (Jupyter.notebook._fully_loaded) {
            console.info('if (Jupyter.notebook._fully_loaded) {')
            displayEnvironmentVariable();
        } else {
            events.on('notebook_loaded.Notebook', displayEnvironmentVariable);
        }
    }

    return {
        load_ipython_extension: load_ipython_extension
    };
});