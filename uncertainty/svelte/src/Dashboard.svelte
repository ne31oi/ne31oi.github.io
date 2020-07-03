<script>
	import {timeframe,
		exchange,
		Binance,
		Bittrex,
		Okex} from '../src/store.js'	

	let type = 0;
	function handleClick(ev,i) {
		type = i;
	}
	let dataMap = {dataGDP : {
	                2014:[16251.93,11307.28,24515.76,11237.55,14359.88,22226.7,10568.83,12582,19195.69,49110.27],
	                2013:[14113.58,9224.46,20394.26,9200.86,11672,18457.27,8667.58,10368.6,17165.98,41425.48],
	                2012:[12153.03,7521.85,17235.48,7358.31,9740.25,15212.49,7278.75,8587,15046.45,34457.3],
	                2011:[11115,6719.01,16011.97,7315.4,8496.2,13668.58,6426.1,8314.37,14069.87,30981.98],
	                2010:[9846.81,5252.76,13607.32,6024.45,6423.18,11164.3,5284.69,7104,12494.01,26018.48]
	            },dataEstate:{
	                2014:[1074.93,411.46,918.02,224.91,384.76,876.12,238.61,492.1,1019.68,2747.89],
	                2013:[1006.52,377.59,697.79,192,309.25,733.37,212.32,391.89,1002.5,2600.95],
	                2012:[1062.47,308.73,612.4,173.31,286.65,605.27,200.14,301.18,1237.56,2025.39],
	                2011:[844.59,227.88,513.81,166.04,273.3,500.81,182.7,244.47,939.34,1626.13],
	                2010:[821.5,183.44,467.97,134.12,191.01,410.43,153.03,225.81,958.06,1365.71]
	            },
	            dataFinancial:{
	                2014:[2215.41,756.5,746.01,519.32,447.46,755.57,207.65,370.78,2277.4,2600.11],
	                2013:[1863.61,572.99,615.42,448.3,346.44,639.27,190.12,304.59,1950.96,2105.92],
	                2012:[1603.63,461.2,525.67,361.64,291.1,560.2,180.83,227.54,1804.28,1596.98],
	                2011:[1519.19,368.1,420.74,290.91,219.09,455.07,147.24,177.43,1414.21,1298.48],
	                2010:[1302.77,288.17,347.65,218.73,148.3,386.34,126.03,155.48,1209.08,1054.25]
	            }};
	let options = {
	                // Setup timeline
	                timeline: {
	                    axisType: 'category',
	                    data: ['2010-01-01', '2011-01-01', '2012-01-01', '2013-01-01', '2014-01-01'],
	                    left: 0,
	                    right: 0,
	                    bottom: 0,
	                    label: {
	                        normal: {
	                            fontFamily: 'Roboto, Arial, Verdana, sans-serif',
	                            fontSize: 11
	                        }
	                    },
	                    autoPlay: true,
	                    playInterval: 3000
	                },

	                // Config
	                options: [
	                    {

	                        // Global text styles
	                        textStyle: {
	                            fontFamily: 'Roboto, Arial, Verdana, sans-serif',
	                            fontSize: 13
	                        },

	                        // Chart animation duration
	                        animationDuration: 750,

	                        // Setup grid
	                        grid: {
	                            left: 10,
	                            right: 10,
	                            top: 35,
	                            bottom: 60,
	                            containLabel: true
	                        },

	                        // Add legend
	                        legend: {
	                            data: ['BTC','Financial','Real Estate'],
	                            itemHeight: 8,
	                            itemGap: 20
	                        },

	                        // Tooltip
	                        tooltip: {
	                            trigger: 'axis',
	                            backgroundColor: 'rgba(0,0,0,0.75)',
	                            padding: [10, 15],
	                            textStyle: {
	                                fontSize: 13,
	                                fontFamily: 'Roboto, sans-serif'
	                            },
	                            axisPointer: {
	                                type: 'shadow',
	                                shadowStyle: {
	                                    color: 'rgba(0,0,0,0.025)'
	                                }
	                            }
	                        },

	                        // Horizontal axis
	                        xAxis: [{
	                            type: 'category',
	                            data: ['Paris','Budapest','Prague','Madrid','Amsterdam','Berlin','Bratislava','Munich','Hague','Rome'],
	                            axisLabel: {
	                                color: '#333'
	                            },
	                            axisLine: {
	                                lineStyle: {
	                                    color: '#999'
	                                }
	                            },
	                            splitLine: {
	                                show: true,
	                                lineStyle: {
	                                    color: '#eee',
	                                    type: 'dashed'
	                                }
	                            },
	                            splitArea: {
	                                show: true,
	                                areaStyle: {
	                                    color: ['rgba(250,250,250,0.1)', 'rgba(0,0,0,0.015)']
	                                }
	                            }
	                        }],

	                        // Vertical axis
	                        yAxis: [
	                            {
	                                type: 'value',
	                                name: '',
	                                max: 53500,
	                                axisLabel: {
	                                    color: '#333'
	                                },
	                                axisLine: {
	                                    lineStyle: {
	                                        color: '#999'
	                                    }
	                                },
	                                splitLine: {
	                                    show: true,
	                                    lineStyle: {
	                                        color: '#eee'
	                                    }
	                                }
	                            },
	                            {
	                                type: 'value',
	                                name: 'BTC',
	                                axisLabel: {
	                                    color: '#333'
	                                },
	                                axisLine: {
	                                    lineStyle: {
	                                        color: '#999'
	                                    }
	                                },
	                                splitLine: {
	                                    show: true,
	                                    lineStyle: {
	                                        color: '#f5f5f5'
	                                    }
	                                }
	                            }
	                        ],

	                        // Add series
	                        series: [
	                            {
	                                name: 'BTC',
	                                type: 'bar',
	                                markLine: {
	                                    symbol: ['arrow','none'],
	                                    symbolSize: [4, 2],
	                                    itemStyle: {
	                                        normal: {
	                                            lineStyle: {color: 'orange'},
	                                            barBorderColor: 'orange',
	                                            label: {
	                                                position: 'left',
	                                                formatter: function(params) {
	                                                    return Math.round(params.value);
	                                                },
	                                                textStyle: {color: 'orange'}
	                                            }
	                                        }
	                                    },
	                                    data: [{type: 'average', name: 'Average'}]
	                                },
	                                data: dataMap.dataGDP['2010']
	                            },
	                            {
	                                name: 'Financial',
	                                yAxisIndex: 1,
	                                type: 'bar',
	                                data: dataMap.dataFinancial['2010']
	                            },
	                            {
	                                name: 'Real Estate',
	                                yAxisIndex: 1,
	                                type: 'bar',
	                                data: dataMap.dataEstate['2010']
	                            }
	                        ]
	                    },

	                    // 2011 data
	                    {
	                        series: [
	                            {data: dataMap.dataGDP['2011']},
	                            {data: dataMap.dataFinancial['2011']},
	                            {data: dataMap.dataEstate['2011']}
	                        ]
	                    },

	                    // 2012 data
	                    {
	                        series: [
	                            {data: dataMap.dataGDP['2012']},
	                            {data: dataMap.dataFinancial['2012']},
	                            {data: dataMap.dataEstate['2012']}
	                        ]
	                    },

	                    // 2013 data
	                    {
	                        series: [
	                            {data: dataMap.dataGDP['2013']},
	                            {data: dataMap.dataFinancial['2013']},
	                            {data: dataMap.dataEstate['2013']}
	                        ]
	                    },

	                    // 2014 data
	                    {
	                        series: [
	                            {data: dataMap.dataGDP['2014']},
	                            {data: dataMap.dataFinancial['2014']},
	                            {data: dataMap.dataEstate['2014']}
	                        ]
	                    }
	                ]
	}
	let columns_timeline_element = document.getElementById('columns_timeline'),
	columns_timeline;
	window.EchartsColumnsWaterfalls = function() {
	    var _columnsWaterfallsExamples = function() {
	        if (typeof echarts == 'undefined') {
	            console.warn('Warning - echarts.min.js is not loaded.');
	            return;
	        }
	        columns_timeline_element = document.getElementById('columns_timeline');
	        if (columns_timeline_element) {
	            columns_timeline = echarts.init(columns_timeline_element);
	            columns_timeline.setOption(options);
	        }
	        var triggerChartResize = function() {            
	            columns_timeline_element && columns_timeline.resize();
	        };
	        var resizeCharts;
	        window.onresize = function () {
	            clearTimeout(resizeCharts);
	            resizeCharts = setTimeout(function () {
	                triggerChartResize();
	            }, 200);
	        };
	    };
	    return {
	        init: function() {
	            _columnsWaterfallsExamples();
	        }
	    }
	}();
	document.addEventListener('DOMContentLoaded', function() {	
	    EchartsColumnsWaterfalls.init();
	    
	});

	let tf=0;
	let unsubscribe = timeframe.subscribe(value => {
		tf = value;
	});
	tf = (typeof tf == 'object'?0:tf)

	let exch=0;
	unsubscribe = exchange.subscribe(value => {
		exch = value;
	});
	exch = (typeof exch == 'object'?0:exch)

	let bittrex=0;
	unsubscribe = Bittrex.subscribe(value => {
		bittrex = value;
		options.options[0].yAxis[1].name = bittrex
		console.log(bittrex)
		
		EchartsColumnsWaterfalls.init();
	});
	bittrex = (typeof bittrex == 'object'?0:bittrex)

	let binance=0;
	unsubscribe = Binance.subscribe(value => {
		binance = value;
	});
	binance = (typeof binance == 'object'?0:binance)

	let okex=0;
	unsubscribe = Okex.subscribe(value => {
		okex = value;
	});
	okex = (typeof okex == 'object'?0:okex)

</script>
<div class="card">
	
		<div class="card-header header-elements-inline">
			<legend>
				<h5 class="card-title">
					<div class="form-group">
					  <label class="d-block font-weight-semibold">Trading volume in progress</label>
					  <div class="form-check form-check-inline form-check-right" on:click={() => handleClick(event, 0)}>
					    <label class="form-check-label">      Up to 10 pairs comparison
					      <div class="uniform-choice"><span class="{type==0 ? 'checked' : ''}"><input type="radio" class="form-check-input-styled" name="radio-inline-right"  data-fouc=""></span></div>
					    </label>
					  </div>
					  <div class="form-check form-check-inline form-check-right" on:click={() => handleClick(event, 1)}>
					    <label class="form-check-label">      Single pair in progress
					      <div class="uniform-choice"><span class="{type==1 ? 'checked' : ''}"><input type="radio" class="form-check-input-styled" name="radio-inline-right" data-fouc=""></span></div>
					    </label>
					  </div>
					</div>
				</h5>
				<div class="header-elements">
					<div class="list-icons">
		        		<a class="list-icons-item" data-action="collapse"></a>
		        		<a class="list-icons-item" data-action="reload"></a>
		        		<a class="list-icons-item" data-action="remove"></a>
		        	</div>
		    	</div>
	    	</legend>
		</div>
	

	<div class="card-body">
		<legend>
			<div class="row">
				<div class="col-md-2">
					<div class="form-group">
						<label class="d-block">Select timeframe</label>
						<select class="form-control timeframe"> 
							<option value="0">1m</option>
							<option value="1">5m</option>
							<option value="2">15m</option>
							<option value="3">30m</option>
							<option value="4">1h</option>
							<option value="5">2h</option>
							<option value="6">4h</option>
							<option value="7">6h</option>
							<option value="8">12h</option>
							<option value="9">1D</option>
							<option value="10">1W</option>
							<option value="11">1M</option>						
						</select>
					</div>
				</div>
				<div class="col-md-2">
					<div class="form-group">
						<label class="d-block">Select Exchange</label>
						<select class="form-control exchange"> 
							<option value="0">Binance</option>
							<option value="1">Bittrex</option>
							<option value="2">Okex</option>												
						</select>
					</div>
				</div>
				<div class="col-md-2">
					<div class="form-group">
						<label class="d-block">Select Base</label>
						<div class="{exch==0?'':'hide'}">
							<select class="form-control select-icons baseBinance "> 
								<option value="0"  data-icon="Bitcoin.svg.png">BTC</option>
								<option value="1"  data-icon="tether.svg">USD(s)&fiat </option>
								<option value="2"  data-icon="BNB.png">BNB</option>												
							</select>
						</div>
						<div class="{exch==1?'':'hide'}">
							<select class="form-control select-icons baseBittrex "> 
								<option value="0"  data-icon="Bitcoin.svg.png">BTC</option>
								<option value="1"  data-icon="tether.svg">USD(s)&fiat </option>
								<option value="2"  data-icon="eth.png">ETH</option>											
							</select>
						</div>
						<div class="{exch==2?'':'hide'}">
							<select class="form-control select-icons baseOkex"> 
								<option value="0"  data-icon="Bitcoin.svg.png">BTC</option>
								<option value="1"  data-icon="tether.svg">USD(s)&fiat </option>
								<option value="2"  data-icon="eth.png">ETH</option>
								<option value="3"  data-icon="okb.png">OKB</option>													
							</select>
						</div>
					</div>
				</div>
				<div class="col-md-6">
						<label class="d-block">Choose up to 10 trading pairs to compare their total, buy, sell trading volume in progress</label>
						<div class="b">
							<select data-placeholder="Select states" multiple="multiple" class="form-control select-access-multiple-clear" data-fouc>
								<option value="AK">REPBTC</option>
								<option value="CA">DLTBTC</option>
								<option value="AZ">XEMBTC</option>
								<option value="CO">XRPBTC</option>
								<option value="ID">MDTBTC</option>
								<option value="WY">GASBTC</option>
								<option value="WY">LSKBTC</option>
								<option value="WY">KNCBTC</option>
								<option value="WY">RENBTC</option>
								<option value="CT">XLMBTC</option>
							</select>
							<button type="button" class="btn bg-brown-400 access-multiple-clear">Clear selection</button>
						</div>						
				</div>
			</div>
		</legend>
		<div class="row">
			<div class="chart-container">
				
				<div class="chart has-fixed-height" id="columns_timeline"></div>
			</div>
		</div>
	</div>
</div>


<style>
	.card-header .form-group{
		display:flex;
		align-items: center;
		margin-bottom: 0;
	}
	label{
		margin-bottom: 0;
		margin-right: 10px;
	}
	.card-header legend{
		display: flex;
		justify-content: space-between;
	}
	
	.b{
		display: flex;		
	}
	.b .btn{
			flex-shrink: 0;
			margin-left: 10px;
			height: 36px;
	}
</style>