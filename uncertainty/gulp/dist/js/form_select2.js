//import { get } from './dashboard.js';
window.timeframe = 0;


var Select2Selects = function() {
    var _componentSelect2 = function() {
        if (!$().select2) {
            console.warn('Warning - select2.min.js is not loaded.');
            return;
        }

        $('.timeframe').select2({
            minimumResultsForSearch: Infinity,
            width: 80
        });
        $('.timeframe').on('select2:select', function(e) {
            if (typeof window.timeframe === 'function')
                window.timeframe.set(this.value)
            else
                window.timeframe = this.value
        });

        $('.exchange').select2({
            minimumResultsForSearch: Infinity,
            width: 150
        });
        $('.exchange').on('select2:select', function(e) {
            if (typeof window.exchange === 'function')
                window.exchange.set(this.value)
            else
                window.exchange = this.value
        });

        function iconFormat(icon) {
            var originalOption = icon.element;
            if (!icon.id) { return icon.text; }
            var $icon = '<img  src="img/coins_logos/' + $(icon.element).data('icon') + '" class="img_icon">' + icon.text;

            return $icon;
        }

        $('.baseBinance').select2({
            templateResult: iconFormat,
            minimumResultsForSearch: Infinity,
            templateSelection: iconFormat,
            escapeMarkup: function(m) { return m; },
            width: 150
        });
        $('.baseBinance').on('select2:select', function(e) {
            if (typeof window.Binance === 'function')
                window.Binance.set(this.value)
            else
                window.Binance = this.value
        });

        $('.baseBinance_istands').on('select2:select', function(e) {
            if (this.value == 0) {
                try { tableSet(pua); } catch (e) {}
                try { $('.btc').css('display', 'flex');$('.usdt').hide(); } catch (e) {}
            } else {
                try { tableSet(pua2); } catch (e) {}
                try { $('.btc').hide();$('.usdt').css('display', 'flex'); } catch (e) {}
            }
        });

        $('.baseBittrex').select2({
            templateResult: iconFormat,
            minimumResultsForSearch: Infinity,
            templateSelection: iconFormat,
            escapeMarkup: function(m) { return m; },
            width: 150
        });
        $('.baseBittrex').on('select2:select', function(e) {
            if (typeof window.Bittrex === 'function')
                window.Bittrex.set(this.value)
            else
                window.Bittrex = this.value
        });

        $('.baseOkex').select2({
            templateResult: iconFormat,
            minimumResultsForSearch: Infinity,
            templateSelection: iconFormat,
            escapeMarkup: function(m) { return m; },
            width: 150
        });
        $('.baseOkex').on('select2:select', function(e) {
            if (typeof window.Okex === 'function')
                window.Okex.set(this.value)
            else
                window.Okex = this.value
        });
        // Clear selection
        $('.select-access-multiple-clear').select2({
            minimumResultsForSearch: Infinity
        });
        $('.access-multiple-clear').on('click', function() { $('.select-access-multiple-clear').val(null).trigger('change'); });

    };



    return {
        init: function() {
            _componentSelect2();
        }
    };
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    Select2Selects.init();
    var ExcelToJSON = function() {

        this.parseExcel = function(file) {
            var reader = new FileReader();

            reader.onload = function(e) {
                var data = e.target.result;
                var workbook = XLSX.read(data, {
                    type: 'binary'
                });
                workbook.SheetNames.forEach(function(sheetName) {
                    console.log(sheetName)
                    // Here is your object
                    var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                    var json_object = JSON.stringify(XL_row_object);
                    console.log(JSON.parse(json_object));
                    if (sheetName == 'Лист1') window.l1 = JSON.parse(json_object)
                    if (sheetName == 'Лист2') window.l2 = JSON.parse(json_object)
                    if (sheetName == 'Лист3') window.l3 = JSON.parse(json_object)
                    if (sheetName == 'Лист4') window.l4 = JSON.parse(json_object)
                    if (sheetName == 'Лист5') window.l5 = JSON.parse(json_object)
                    if (sheetName == 'Лист6') window.l6 = JSON.parse(json_object)
                    if (sheetName == 'Лист7') window.l7 = JSON.parse(json_object)
                    if (sheetName == 'Лист8') window.l8 = JSON.parse(json_object)
                    if (sheetName == 'Лист9') window.l9 = JSON.parse(json_object)
                    if (sheetName == 'Лист10') window.l10 = JSON.parse(json_object)
                    if (sheetName == 'Лист11') window.l11 = JSON.parse(json_object)
                    if (sheetName == 'Лист12') window.l12 = JSON.parse(json_object)
                    jQuery('#xlx_json').val(json_object);
                })
            };

            reader.onerror = function(ex) {
                console.log(ex);
            };

            reader.readAsBinaryString(file);
        };
    };

    function handleFileSelect(evt) {

        var files = evt.target.files; // FileList object
        var xl2json = new ExcelToJSON();
        xl2json.parseExcel(files[0]);
    }
    document.getElementById('upload').addEventListener('change', handleFileSelect, false);

});