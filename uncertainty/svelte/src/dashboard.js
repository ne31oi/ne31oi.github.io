import App from './Dashboard.svelte';
import {timeframe,
		exchange,
		Binance,
		Bittrex,
		Okex} from '../src/store.js';

Object.defineProperty(window,'timeframe',{    
    set: function(val){
        timeframe.set(val);
    },
});

Object.defineProperty(window,'exchange',{    
    set: function(val){
        exchange.set(val);
    },
});

Object.defineProperty(window,'Binance',{    
    set: function(val){
        Binance.set(val);
    },
});

Object.defineProperty(window,'Bittrex',{    
    set: function(val){
        Bittrex.set(val);
    },
});

Object.defineProperty(window,'Okex',{    
    set: function(val){
        Okex.set(val);
    },
});

const app = new App({
	target: document.querySelector('#dashboard'),
	props: {
		name: 'world'
	}
});

export default app;