function toggle() {
    var div = document.getElementById("slider");
    if(this.checked)
        div.style.display = 'none';
    else
        div.style.display = 'block'
}
document.getElementById("slider__checker").onchange = toggle;

function graph() {
    var div = document.getElementById("graph__content-main");
    var revenue = document.getElementById("graph-revenue_checker");
    var order = document.getElementById("graph-order_checker");
    var tax = document.getElementById("graph-tax_checker");
    var shipment = document.getElementById("graph-shipment_checker");

    if(revenue.checked) {
        div.style.background = "url('images/graph-revenue.png') no-repeat";
        div.style.backgroundSize = "100% 100%";
        order.checked = false;
        tax.checked = false;
        shipment.checked = false;
    }
    else if(order.checked) {
        div.style.background = "url('images/graph-order.png') no-repeat";
        div.style.backgroundSize = "100% 100%";
        revenue.checked = false;
        tax.checked = false;
        shipment.checked = false;
    }
    else if(tax.checked) {
        div.style.background = "url('images/graph-tax.png') no-repeat";
        div.style.backgroundSize = "100% 100%";
        order.checked = false;
        revenue.checked = false;
        shipment.checked = false;
    }
    else if(shipment.checked) {
        div.style.background = "url('images/graph-shipment.png') no-repeat";
        div.style.backgroundSize = "100% 100%";
        order.checked = false;
        tax.checked = false;
        revenue.checked = false;
    }
    else {
        div.style.background = "url('images/graph-revenue.png') no-repeat, " +
            "url('images/graph-shipment.png') no-repeat, " +
            "url('images/graph-order.png') no-repeat, " +
            "url('images/graph-tax.png') no-repeat" ;
        div.style.backgroundSize = "100% 100%";
    }
}
document.getElementById("graph-revenue_checker").onchange = graph;
document.getElementById("graph-order_checker").onchange = graph;
document.getElementById("graph-tax_checker").onchange = graph;
document.getElementById("graph-shipment_checker").onchange = graph;


function graphClose() {
    var div = document.getElementById("main-content__graph");
    if(this.checked)
        div.style.display = 'none';
    else
        div.style.display = 'flex'
}
document.getElementById("graph-close__checker").onchange = graphClose;

function graphVis() {
    var div = document.getElementById("item__graph-content");
    if(this.checked) {
        div.style.display = 'none';
    }
    else
        div.style.display = 'flex'
}
document.getElementById("graph-vis__checker").onchange = graphVis;

function mapClose() {
    var div = document.getElementById("main-content__map");
    if(this.checked)
        div.style.display = 'none';
    else
        div.style.display = 'block'
}
document.getElementById("map-close__checker").onchange = mapClose;

function mapVis() {
    var div = document.getElementById("item__map-content");
    if(this.checked) {
        div.style.display = 'none';
    }
    else
        div.style.display = 'block'
}
document.getElementById("map-vis__checker").onchange = mapVis;

function trafficClose() {
    var div = document.getElementById("main-content__traffic");
    if(this.checked)
        div.style.display = 'none';
    else
        div.style.display = 'block'
}
document.getElementById("traffic-close__checker").onchange = trafficClose;

function trafficVis() {
    var div = document.getElementById("item__traffic-content");
    if(this.checked) {
        div.style.display = 'none';
    }
    else
        div.style.display = 'block'
}
document.getElementById("traffic-vis__checker").onchange = trafficVis;

function orderClose() {
    var div = document.getElementById("main-content__order");
    if(this.checked)
        div.style.display = 'none';
    else
        div.style.display = 'block'
}
document.getElementById("order-close__checker").onchange = orderClose;

function orderVis() {
    var div = document.getElementById("item__order-content");
    if(this.checked) {
        div.style.display = 'none';
    }
    else
        div.style.display = 'block'
}
document.getElementById("order-vis__checker").onchange = orderVis;

function visitsClose() {
    var div = document.getElementById("main-content__visits");
    if(this.checked)
        div.style.display = 'none';
    else
        div.style.display = 'block'
}
document.getElementById("visits-close__checker").onchange = visitsClose;

function visitsVis() {
    var div = document.getElementById("item__visits-content");
    if(this.checked) {
        div.style.display = 'none';
    }
    else
        div.style.display = 'block'
}
document.getElementById("visits-vis__checker").onchange = visitsVis;

function marketingClose() {
    var div = document.getElementById("main-content__marketing");
    if(this.checked)
        div.style.display = 'none';
    else
        div.style.display = 'block'
}
document.getElementById("marketing-close__checker").onchange = marketingClose;

function marketingVis() {
    var div = document.getElementById("item__marketing-content");
    if(this.checked) {
        div.style.display = 'none';
    }
    else
        div.style.display = 'block'
}
document.getElementById("marketing-vis__checker").onchange = marketingVis;

(function height() {
    var slider = document.getElementById("grid__slider");
    var content = document.getElementById("grid__main-content");
    slider.style.height = content.style.height;
}());
document.getElementById("marketing-vis__checker").onchange = height;