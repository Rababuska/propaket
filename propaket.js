// ==========================================
// БАЗА ДАННЫХ И ТАРИФЫ PROPAKET
// ==========================================

const propaketCatalog = [
    {
        id: 'pvd_white',
        name: 'Пакеты ПВД (Белые)',
        keywords: 'пакет полиэтиленовый пвд белый шелкография',
        colorPriceStep: 45, maxColors: 3, defaultQty: 100, minQty: 100, allowBagsExtra: true,
        sizes: {
            "200x240 мм (вертикальный)": { w: 200, h: 240, d: 0, orient: "вертикальный", tiers: [{max: 199, p: 100}, {max: 499, p: 95}, {max: Infinity, p: 90}] },
            "250x350 мм (вертикальный)": { w: 250, h: 350, d: 0, orient: "вертикальный", tiers: [{max: 199, p: 120}, {max: 499, p: 110}, {max: Infinity, p: 100}] },
            "300x400 мм (вертикальный)": { w: 300, h: 400, d: 0, orient: "вертикальный", tiers: [{max: 199, p: 130}, {max: 499, p: 120}, {max: Infinity, p: 110}] },
            "380x530 (400x500) мм (вертикальный)": { w: 380, h: 530, d: 0, orient: "вертикальный", tiers: [{max: 199, p: 140}, {max: 499, p: 130}, {max: Infinity, p: 120}] },
            "500x600 мм (вертикальный)": { w: 500, h: 600, d: 0, orient: "вертикальный", tiers: [{max: 199, p: 180}, {max: 499, p: 170}, {max: Infinity, p: 160}] },
            "600x630 мм (вертикальный)": { w: 600, h: 630, d: 0, orient: "вертикальный", tiers: [{max: 199, p: 190}, {max: 499, p: 180}, {max: Infinity, p: 170}] }
        }
    },
    {
        id: 'pvd_color',
        name: 'Пакеты ПВД (Цветные / Черные)',
        keywords: 'пакет полиэтиленовый пвд цветной черный шелкография',
        colorPriceStep: 45, maxColors: 3, defaultQty: 100, minQty: 100, allowBagsExtra: true,
        sizes: {
            "200x240 мм (вертикальный)": { w: 200, h: 240, d: 0, orient: "вертикальный", tiers: [{max: 199, p: 110}, {max: 499, p: 105}, {max: 19999, p: 100}, {max: Infinity, p: 37}] },
            "250x350 мм (вертикальный)": { w: 250, h: 350, d: 0, orient: "вертикальный", tiers: [{max: 199, p: 130}, {max: 499, p: 120}, {max: 4999, p: 110}, {max: Infinity, p: 42}] },
            "300x400 мм (вертикальный)": { w: 300, h: 400, d: 0, orient: "вертикальный", tiers: [{max: 199, p: 140}, {max: 499, p: 130}, {max: 4999, p: 120}, {max: Infinity, p: 47}] },
            "380x530 (400x500) мм (вертикальный)": { w: 380, h: 530, d: 0, orient: "вертикальный", tiers: [{max: 199, p: 150}, {max: 499, p: 140}, {max: 4999, p: 130}, {max: Infinity, p: 61}] },
            "500x600 мм (вертикальный)": { w: 500, h: 600, d: 0, orient: "вертикальный", tiers: [{max: 199, p: 190}, {max: 499, p: 180}, {max: 4999, p: 170}, {max: Infinity, p: 85}] },
            "600x630 мм (вертикальный)": { w: 600, h: 630, d: 0, orient: "вертикальный", tiers: [{max: 199, p: 200}, {max: 499, p: 190}, {max: 4999, p: 180}, {max: Infinity, p: 87}] }
        }
    },
    {
        id: 'paper_white_black',
        name: 'Бумажные пакеты плотные 260 гр (Белые / Черные)',
        keywords: 'пакет бумажный плотный припресс 260 белый черный',
        colorPriceStep: 45, maxColors: 3, defaultQty: 24, minQty: 24, allowBagsExtra: true,
        sizes: {
            "120x```html
<!DOCTYPE html>
<html xmlns="[http://www.w3.org/1999/xhtml](http://www.w3.org/1999/xhtml)" lang="ru">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Сувенирный калькулятор</title>
    <script src="[https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js](https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js)"></script>
    
    <script src="vipline.js"></script>
    <script src="exclusive.js"></script>
    <script src="kvant.js"></script>
    <script src="kitchen.js"></script>

    <style type="text/css">
        input { text-align: right; margin-right: 6px; }
        td:nth-child(3) { width: 50px; }
        .gray { color: gray; height: 70px; }
        .gray td input, .gray td input:focus, .gray td input:active { color: gray; border-color: gray; cursor: default; border: none; outline: none !important; }
        .bottom-right { position: fixed; bottom: 10px; right: 10px; color: lightgray; font-size: 14px; }
        .small-input { width: 30px; }
        .supplier-panel { margin: 15px 0; padding: 12px 15px; background-color: #f0f8ff; border: 1px solid #cce5ff; border-radius: 5px; font-family: Arial, sans-serif; font-size: 14px; position: relative; }
        .mm-input { width: 45px; padding: 2px; text-align: center; }
        .delivery-checkbox { margin-top: 10px; font-size: 13px; color: #444; border-top: 1px dashed #ccc; padding-top: 8px; }
        .menu button { cursor: pointer; padding: 4px 12px; font-weight: normal; }
        .menu button.active { font-weight: bold; background-color: #d0e4ff; border-color: #0066cc; }
        
        /* Умный поиск */
        .search-box-wrap { display: inline-block; position: relative; width: 480px; }
        .search-input { width: 100%; padding: 5px 8px; text-align: left; font-size: 13px; box-sizing: border-box; }
        .search-results { 
            position:
