<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
	html, body, div, span, applet, object, iframe, h1, h2, h3,
	h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address,
	big, cite, code, del, dfn, em, font, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var, dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend, table, caption, tbody, tfoot,
	thead, tr, th, td {
	    margin: 0;
	    padding: 0;
	    border: 0;
	    outline: 0;
	    font-weight: inherit;
	    font-style: inherit;
	    font-family: inherit;
	    vertical-align: baseline;
	    color: inherit;
		box-sizing: border-box;
	}
	
	body, html {
	    font-size: inherit;
	    height: 100%;
	}
	
	:focus {
	    outline: 0;
	}
	
	table {
	    border-collapse: separate;
	    border-spacing: 0;
	}
	
	caption, th, td {
	    text-align: left;
	    font-weight: normal;
	}
	
	a img, iframe {
	    border: none;
	}
	
	ol, ul {
	    list-style: none;
	}
	
	input, textarea, select, button {
	    font-size: 100%;
	    font-family: inherit;
	}
	
	select {
	    margin: inherit;
	}
	
	img {
	    vertical-align: middle;
	}
	
	a, a:hover, a:focus {
	    text-decoration: none;
	}
	
	body {
	    background: #fff;
	    font-family: "微软雅黑";
	}
	
	/* Fixes incorrect placement of numbers in ol’s in IE6/7 */
	/* == clearfix == */
	.clearfix:after {
	    content: '';
	    display: block;
	    height: 0;
	    clear: both;
	    visibility: hidden;
	}
	
	.clearfix {
	    display: inline-block;
	}
	
	* html .clearfix {
	    height: 1%;
	}
	
	.clearfix {
	    display: block;
	}
	
	/* chrome浏览器 自动补全默认背景色覆盖 */
	input:-webkit-autofill {
	    box-shadow: 0 0 0 109px #fff inset;
	}
	
	input:focus:-webkit-autofill {
	    box-shadow: 0 0 0 109px #fff inset;
	}
	
	
	
</style>
