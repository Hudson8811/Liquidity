marketsConfig.sortTabs = [
    'USD',
    'EUR',
    'USDⓈ',
    'GBP',
];  //задаем массив для сортировки

let marketModule = {

    data: [],
    $wrap: jQuery('.b2bx-markets'),
    conn: null,
    conversion: {},
    instruments: {},
    markets: [],
    market: marketsConfig.defaults.market,
    groups: {},
    last: {},
    table: {},
    instrument: {},
    tab: 0,

    connect: function (settings) {
        let _self = this;
        if (this.$wrap.length === 0) {
            return false;
        }
        this.conn = new signalR.HubConnectionBuilder()
            .withUrl(settings.stagingUrl + settings.infoUrl)
            .withAutomaticReconnect()
            .configureLogging(signalR.LogLevel.Information)
            .build();
        this.conn.start().then(function () {
            fetch(settings.stagingUrl + settings.frontOfficeUrl).then( //получение фронтофиса
                function (response) {
                    return response.json();
                }
            ).then(function (jsonData) {
                let pairs = jsonData.pairs;

                fetch(settings.stagingUrl + settings.frontOfficeAssetsUrl).then( //получение ассетов фронтофиса
                    function (response) {
                        return response.json();
                    }
                ).then(function (jsonDataAssets) {
                    let assets = jsonDataAssets.data;
                    jQuery('.b2bx-table-thead-loading').hide();
                    _self.addRows(pairs, assets);
                    _self.makeTabs(pairs);
                    _self.addTopWidgetRows();
                    _self.hideEmptyMarkets();
                });
                jQuery.each(pairs, function (k, v) {
                    _self.conn.stream('Book', k).subscribe({ //подписываемся на обновления API SignalR
                        next: function (itemBook) {
                            if (itemBook.asks[itemBook.asks.length - 1] && itemBook.bids[itemBook.bids.length - 1]) {
                                let $row = jQuery('[data-pair="' + itemBook.instrument + '"]').parents('tr');
                                let dataBids = [];
                                let dataAsks = [];

                                jQuery.each(itemBook.bids, function (k, v) {
                                    dataBids.push(v.price);
                                });
                                jQuery.each(itemBook.asks, function (k, v) {
                                    dataAsks.push(v.price);
                                });
                                if (!$row.data('bids') && !$row.data('asks')) {
                                    dataBids.sort();
                                    dataAsks.sort();
                                    $row.attr('data-bids', dataBids.join());
                                    $row.attr('data-asks', dataAsks.join());
                                } else {
                                    let oldBids = $row.data('bids').split(',');
                                    let oldAsks = $row.data('asks').split(',');
                                    oldBids.sort();
                                    oldAsks.sort();
                                    oldBids.splice(0, dataBids.length);
                                    oldAsks.splice(oldAsks.length - dataAsks.length - 1, dataAsks.length);
                                    dataBids = oldBids.concat(dataBids);
                                    dataAsks = oldAsks.concat(dataAsks);
                                    $row.attr('data-bids', dataBids.join());
                                    $row.attr('data-asks', dataAsks.join());
                                }

                                let bestBid = Math.max.apply(null, dataBids);
                                let bestAsk = Math.min.apply(null, dataAsks);
                                let spread = Math.abs(bestAsk - bestBid);

                                _self.liveRenewBookSpread(itemBook.instrument, spread);

                            }
                        },

                        complete: function () {
                            console.log('streaming complete');
                            _self.conn.stop();
                        },
                        error: function (err) {
                            console.log(err);
                        },
                    });
                    _self.conn.stream('Trades', k).subscribe({ //подписываемся на обновления API SignalR
                        next: function (itemTrade) {
                            let lastPrice;

                            if (itemTrade[itemTrade.length - 1]) {
                                lastPrice = itemTrade[itemTrade.length - 1].executionPrice;
                            }

                            if (itemTrade[itemTrade.length - 1]) {
                                _self.liveRenewBookPrice(itemTrade[itemTrade.length - 1].instrument, lastPrice);
                                _self.conn.stream('MiniTicker', '3').subscribe({ //подписываемся на обновления API SignalR
                                    next: function (item) {
                                        //sortTable(document.querySelector('[data-sorting="' + settings.defaults.sorting + '"]'), true);
                                        for (let i = 0; i < item.length; i++) {
                                            _self.liveRenewTicker(item[i]);
                                            // _self.liveRenewBookChange(item[i]);
                                        }
                                    },
                                    complete: function () {
                                        console.log('streaming complete');
                                        _self.connect(settings)
                                    },
                                    error: function (err) {
                                        console.log(err);
                                    },
                                });
                            }
                        },
                        complete: function () {
                            console.log('streaming complete');
                            _self.conn.stop();
                        },
                        error: function (err) {
                            console.log(err);
                        },
                    });
                });
            });
        });
    },

    makeTabs: function (pairs) {
        if (marketsConfig.defaults.mode === "widget") {
            this.$wrap.find(".b2bx-markets-col").append(
                jQuery("<ul/>", {
                    addClass: "nav nav-tabs b2bx-markets-tabs",
                })
            );
        } else {
            this.$wrap.find(".b2bx-markets-col").append(
                jQuery("<div/>", {
                    addClass: "b2bx-wrap-title",
                    text: marketsConfig.lang.all,
                })
            );
        }


        jQuery("<select/>", {
            addClass: "nav-select",
        }).appendTo(".b2bx-markets-col");

        let tabs = [];

        jQuery.each(pairs, function (k, v) {
            switch (v.quoteAsset) {
                case 'usdc':
                    tabs.push('USDⓈ');
                    break;

                case 'usdt':
                    tabs.push('USDⓈ');
                    break;

                case 'eth':
                    if (v.hidden !== 1) {
                        tabs.push('ALTS');
                    }
                    break;

                default:
                    tabs.push(v.quoteAsset.toUpperCase());
                    break;
            }
        });

        tabs = tabs.filter(function (x, i, a) {
            return a.indexOf(x) === i;  //удаляем дупликаты из массива
        });

        for (let j = 0; j < tabs.length; j++) {
            if (marketsConfig.sortTabs[j] !== tabs[j] && marketsConfig.sortTabs[j]) {
                tabs[j] = marketsConfig.sortTabs[j];
            }
        }

        jQuery("<option/>", {
            addClass: "nav-item",
        }).append(
            jQuery("<a/>", {
                addClass: ("nav-link b2bx-markets-tabs-nav-link" + ((this.market === 'FAV') ? " active" : "")),
                text: 'Favorites ',
            }).attr("data-market", 'FAV')
                .append(
                    jQuery("<span/>", {
                        text: marketsConfig.lang.markets,
                    })
                )
        )
            .attr("selected", this.market === 'FAV')
            .appendTo(".nav-select");
        let _that = this;

        jQuery.each(tabs, function (k, v) {
            jQuery("<option/>", {
                addClass: "nav-item",
            })
                .append(
                    jQuery("<a/>", {
                        addClass: ("nav-link b2bx-markets-tabs-nav-link" + ((_that.market === v) ? " active" : "")),
                        text: v,
                    }).attr("data-market", v)
                        .append(
                            jQuery("<span/>", {
                                text: marketsConfig.lang.markets,
                            })
                        )
                )
                .attr("selected", _that.market === v)
                .appendTo(".nav-select");
        });

        jQuery.each(tabs, function (k, v) {
            jQuery("<li/>", {
                addClass: "nav-item",
            })
                .append(
                    jQuery("<a/>", {
                        addClass: ("nav-link b2bx-markets-tabs-nav-link" + ((this.market === v) ? " active" : "")),
                        text: v,
                    }).attr("data-market", v)
                        .append(
                            jQuery("<span/>", {
                                text: marketsConfig.lang.markets,
                            })
                        )
                )
                .appendTo(".b2bx-markets-tabs");
        });

        // ТАБ с избранными парами
        // ЕСЛИ ВЫБРАНО В КОНФИГЕ ОТОБРАЖАТЬ ПО ДЕФОЛТУ ВКЛАДКУ (МАРКЕТ) FAVORITE ТО СТРОКИ НЕ ОТОБРАЖАЮТСЯ
        jQuery("<li/>", {
            addClass: "nav-item",
        })
            .append(
                jQuery("<a/>", {
                    addClass: ("nav-link b2bx-markets-tabs-nav-link b2bx-markets-tabs-nav-link-favorite" + ((this.market === "FAV") ? " active" : "")),
                }).attr("data-market", "FAV")
                    .append(
                        jQuery("<button/>", {
                            addClass: "b2bx-button-favorite",
                            // text: "",
                        })
                    )
                    .append(
                        jQuery("<span/>", {
                            text: marketsConfig.lang.favorites,
                        })
                    )
            )
            .prependTo(".b2bx-markets-tabs");

        // Скрытие уведомления о загрузке данных
        jQuery(".b2bx-table-thead-loading").hide();

        jQuery('.b2bx-markets-tabs-nav-link[data-market="' + this.market + '"]').addClass('active');
    },

    makeTable: function () {
        let $table = jQuery("<table/>", {
            id: "markets-table",
            addClass: "table table-hover table-sm b2bx-table b2bx-table-markets table-responsive-lg",
        }).append(
            jQuery("<thead/>").append(
                jQuery("<tr/>").append(
                    jQuery("<th/>", {
                        addClass: "fixed b2bx-table-markets-thead b2bx-table-markets-thead-pair b2bx-table-thead-favorites",
                        // Пустое значение для колонки ИЗБРАННОГО
                    })
                ).append(
                    jQuery("<th/>", {
                        addClass: "fixed-2 b2bx-table-markets-thead b2bx-table-markets-thead-pair b2bx-table-thead-sorting",
                        text: marketsConfig.lang.pair,
                    }).attr("data-sorting", "pair").attr("data-position", "1")
                ).append(
                    jQuery("<th/>", {
                        addClass: "b2bx-table-markets-thead b2bx-table-markets-thead-coin b2bx-table-thead-sorting",
                        text: marketsConfig.lang.coin,
                    }).attr("data-sorting", "coin").attr("data-position", "1")
                ).append(
                    jQuery("<th/>", {
                        addClass: "b2bx-table-markets-thead b2bx-table-markets-thead-price b2bx-table-thead-sorting",
                        text: marketsConfig.lang.price,
                    }).attr("data-sorting", "price").attr("data-position", "1")
                ).append(
                    jQuery("<th/>", {
                        addClass: "b2bx-table-markets-thead b2bx-table-markets-thead-spread b2bx-table-thead-sorting text-right",
                        text: marketsConfig.lang.spread,
                    }).attr("data-sorting", "spread").attr("data-position", "1")
                ).append(
                    jQuery("<th/>", {
                        addClass: "b2bx-table-markets-thead b2bx-table-markets-thead-change b2bx-table-thead-sorting text-right",
                        text: marketsConfig.lang.change,
                    }).attr("data-sorting", "change").attr("data-position", "1")
                ).append(
                    jQuery("<th/>", {
                        addClass: "b2bx-table-markets-thead b2bx-table-markets-thead-high b2bx-table-thead-sorting text-right",
                        text: marketsConfig.lang.high,
                    }).attr("data-sorting", "high").attr("data-position", "1")
                ).append(
                    jQuery("<th/>", {
                        addClass: "b2bx-table-markets-thead b2bx-table-markets-thead-low b2bx-table-thead-sorting text-right",
                        text: marketsConfig.lang.low,
                    }).attr("data-sorting", "low").attr("data-position", "1")
                ).append(
                    jQuery("<th/>", {
                        addClass: "b2bx-table-markets-thead b2bx-table-markets-thead-volume b2bx-table-thead-sorting text-right",
                        text: marketsConfig.lang.volume,
                    }).attr("data-sorting", "volume").attr("data-position", "1")
                )
            ).append(
                jQuery("<tr/>", {
                    addClass: "b2bx-table-thead-result bg-light",
                }).append(
                    jQuery("<td/>", {
                        text: marketsConfig.lang.result,
                    }).attr("colspan", "9")
                )
            ).append(
                jQuery("<tr/>", {
                    addClass: "b2bx-table-thead-loading bg-light",
                }).append(
                    jQuery("<td/>", {
                        addClass: "blink",
                        text: marketsConfig.lang.loading,
                    }).attr("colspan", "9")
                )
            )
        ).append(jQuery("<tbody/>"));

        let $widget = jQuery("<div/>", {
            addClass: "b2bx-wrap",
        }).append(
            jQuery("<div/>", {
                addClass: "content",
            }).append(
                jQuery("<div/>", {
                    addClass: "row",
                }).append(
                    jQuery("<div/>", {
                        addClass: "col-md-auto order-md-1",
                    }).append(
                        jQuery("<form/>", {
                            addClass: "form-inline b2bx-markets-form",
                        }).append(
                            jQuery("<div/>", {
                                addClass: "form-group ml-auto",
                            }).append(
                                jQuery("<label/>", {
                                    addClass: "b2bx-markets-counter text-muted my-1 mr-sm-2",
                                }).attr("for", "b2bx-table-markets-search")
                            ).append(
                                jQuery("<input/>", {
                                    id: "b2bx-table-markets-search",
                                    addClass: "b2bx-markets-search form-control",
                                }).attr("type", "text").attr("placeholder", marketsConfig.lang.search)
                            )
                        )
                    )
                ).append(
                    jQuery("<div/>", {
                        addClass: "col-md order-md-0 b2bx-markets-col",
                    })
                )
            ).append(
                jQuery("<div/>", {
                    addClass: "overflow-x",
                }).append(
                    $table
                )
            )
        );

        $widget.appendTo(this.$wrap);
        setTimeout(function tick() {
            //sort table when all info comes to widget
            sortTable(document.querySelector('[data-sorting="' + marketsConfig.defaults.sorting + '"]'), true);
        }, 3000);
    },

    liveRenewTicker: function (item) {
        //console.log(item);
        let change = (item.close / item.open - 1) * 100; //(close/open-1)*100
        let $row = jQuery('[data-pair="' + item.instrument + '"]').parents('tr');
        let $rowTop = jQuery('.b2bx-subhead-price-row-item[data-table="' + $row.data('table') + '"]');
        let volume;
        if ($row.data('market') === 'USDⓈ' && $row.find('[data-price]').attr('data-price') || $row.data('market') === 'USD' && $row.find('[data-price]').attr('data-price')) {
            volume = (item.volume * $row.find('[data-price]').attr('data-price')).toFixed(4);
            //console.log(item.instrument + ':' + volume);
        } else {
            if ($row.find('[data-price]').attr('data-price')) {
                let $rowUSDT = jQuery('[data-symbol="' + $row.attr('data-symbol') + '"]');
                volume = (item.volume * $rowUSDT.find('[data-price]').attr('data-price')).toFixed(4);
            }
        }

        volume ? $row.find('[data-volume]').html(volume) : $row.find('[data-volume]').html(item.volume * $row.find('[data-price]').attr('data-price'));
        //$row.find('[data-volume]').attr('data-volume', volume);
        $row.find('[data-volume]').attr('data-volume', volume);
        $row.find('[data-high]').html(item.high);
        $row.find('[data-high]').attr('data-high', item.high);
        $row.find('[data-low]').html(item.low);
        $row.find('[data-low]').attr('data-high', item.low);
        if (change !== 0 && !isNaN(change)) {
            $row.find('[data-change]').addClass(
                (Math.sign(change) === 1) ? 'text-success' : 'text-danger'
            );
            $rowTop.find('.b2bx-subhead-price-row-item-price').html(change.toFixed(2) + '%');
            $rowTop.find('.b2bx-subhead-price-row-item-price').addClass((Math.sign(change) === 1) ? 'text-success' : 'text-danger');
        }
        $row.find('[data-change]').html(Math.sign(change) === 1 ? '+ ' + change.toFixed(2) + '%' : change.toFixed(2) + '%');
        $row.find('[data-change]').attr('data-change', change);
    },

    liveRenewBookSpread: function (pair, spread) {
        let $row = jQuery('[data-pair="' + pair + '"]').parents('tr');
        $row.find('[data-spread]').html(spread.toFixed(7));
        $row.find('[data-spread]').attr('data-spread', spread);
    },


    liveRenewBookPrice: function (pair, lastPrice) {
        let $row = jQuery('[data-pair="' + pair + '"]').parents('tr');
        if (lastPrice) {
            $row.find('[data-price]').html(lastPrice.toFixed(6) + '<span>' + " / " + marketsConfig.lang.symbol + lastPrice.toFixed(3) + '</span>');
            let $rowTop = jQuery('.b2bx-subhead-price-row-item[data-table="' + $row.data('table') + '"]');
            if (lastPrice.toFixed(3)) {
                $rowTop.find('.b2bx-subhead-price-row-item-fiat').html(marketsConfig.lang.symbol + lastPrice.toFixed(3));
                //$rowTop.find('.b2bx-subhead-price-row-item-price').html($row.find('[data-change]').text());
                //$rowTop.find('.b2bx-subhead-price-row-item-price').addClass($row.find('[data-change]').attr('class'));
            }
        }
        $row.find('[data-price]').attr('data-price', lastPrice);
    },

    setData: function (data) {
        for (let i = 0; i < data.length; i++) {
            this.data.push(data[i]);
        }
    },

    hideEmptyMarkets: function () {
        let $table = jQuery('#markets-table');
        let $tabs = jQuery('.b2bx-markets-tabs .b2bx-markets-tabs-nav-link');
        $tabs.each(function (i, item) {
            let market = jQuery(item).data('market');
            if (market !== 'FAV') {
                let rowsCount = $table.find('[data-market=' + market + ']').length;
                if (rowsCount === 0) {
                    jQuery('.b2bx-markets-tabs [data-market=' + market + ']').hide();
                }
            }
        });
    },

    addTopWidgetRows: function () {
        jQuery.each(marketsConfig.price, function (k, v) {
            let $row = jQuery('[data-table="' + v.pair + '"]');
            let name = $row.find('[data-pair]').text();
            jQuery("<div/>", {
                addClass: "liquidity-widget__item col b2bx-subhead-price-row-item item",
            }).attr("data-table", v.pair)
                .append(
                    jQuery("<div/>", {
                        addClass: "liquidity-widget__currency b2bx-subhead-price-row-item-pair",
                        text: name,
                    })
                ).append(
                jQuery("<div/>", {
                    addClass: "liquidity-widget__price b2bx-subhead-price-row-item-fiat",
                    text: '',
                })
            ).append(
                jQuery("<div/>", {
                    addClass: "liquidity-widget__percents b2bx-subhead-price-row-item-price color-white",
                    text: '',
                })
            ).appendTo(".b2bx-subhead-price .b2bx-subhead-price-row-items");
        });
    },

    addRows: function (pairs, assets) {
        let assetName,
            marketName,
            _self = this;
        Object.keys(pairs).map(function (value, key) {
            if (pairs[value].hidden !== 1) {
                for (let i = 0; i < assets.length; i++) {
                    if (value.indexOf(assets[i].id) === 0) {
                        assetName = assets[i].asset_name;
                        switch (pairs[value].quoteAsset) {
                            case 'usdc':
                                marketName = 'USDⓈ';
                                break;

                            case 'usdt':
                                marketName = 'USDⓈ';
                                break;

                            case 'eth':
                                marketName = 'ALTS';
                                break;

                            default:
                                marketName = pairs[value].quoteAsset.toUpperCase();
                                break;
                        }
                    }
                }
                let favoriteClass = favorites.indexOf(parseInt(key, 10)) === -1 ? " " : " b2bx-table-tbody-row-favorite";
                let hideClass = marketsConfig.defaults.market === marketName || (marketsConfig.defaults.mode !== "widget") ? " " : " b2bx-table-tbody-row-hide";

                _self.$wrap.find('table').append(
                    jQuery("<tr/>", {
                        addClass: "b2bx-table-tbody-row" + favoriteClass + hideClass,
                    })
                        .attr("data-table", key)
                        .attr("data-market", marketName)
                        .attr("data-symbol", value.toUpperCase().split("_")[0])
                        .append(
                            jQuery("<td/>", {
                                addClass: "b2bx-table-tbody-col-favorite text-center fixed",
                            }).append(
                                jQuery("<button/>", {
                                    addClass: "b2bx-button-favorite",
                                    // text: "",
                                }).attr("data-instrument", key)
                            ),
                            jQuery("<td/>", {
                                addClass: "fixed-2",
                                text: value.toUpperCase().replace('_', '/'),
                            }).attr("data-pair", value),
                            jQuery("<td/>", {
                                text: assetName,
                            }).attr("data-coin", assetName),
                            jQuery("<td/>", {
                                text: ' ',
                            }).attr("data-price", '')
                                .append(
                                    jQuery("<span/>", {
                                        text: " / " + marketsConfig.lang.symbol + ' ',
                                    })
                                ),
                            jQuery("<td/>", {
                                addClass: "text-right",
                                text: ' ',
                            }).attr("data-spread", ' '),
                            jQuery("<td/>", {
                                addClass: "text-right", //+ ((v.change.toFixed(2) > 0 ) ? " text-success" : ((v.change.toFixed(2) < 0 ) ? " text-danger" : "")),
                                text: '',
                            }).attr("data-change", ''),
                            jQuery("<td/>", {
                                addClass: "text-right",
                                text: '',
                            }).attr("data-high", ''),
                            jQuery("<td/>", {
                                addClass: "text-right",
                                text: '',
                            }).attr("data-low", ''),
                            jQuery("<td/>", {
                                addClass: "text-right",
                                // Отображаем объем и помечаем символом * если объем расчитан через кросс-курс
                                text: '' //((conversion[instruments[k].symbol].convert.course == 0) ? "*" : "") + v.convert.volume.format(v.decimals.volume, 3, ",", "."),
                            }).attr("data-volume", '').attr("data-rolling", '')
                        )
                );
            }
        });
        if (this.market === "FAV") {
            let items = jQuery(".b2bx-table-markets tbody tr.b2bx-table-tbody-row-favorite").length;
            if (items === 0) {
                jQuery(".b2bx-table-thead-result").show();
            }
        }
    }
};

let webStorage = window.localStorage || {};

let favorites = webStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")) : [],
    market = webStorage.getItem("market") || marketModule.market;

Number.prototype.format = function (n, x, s, c) {
    let re = "\\d(?=(\\d{" + (x || 3) + "})+" + (n > 0 ? "\\D" : "$") + ")",
        num = this.toFixed(Math.max(0, ~~n));
    return (c ? num.replace(".", c) : num).replace(new RegExp(re, "g"), "$&" + (s || ","));
};


function sortTable(elem, isAsc = false) {
    if (!elem) return false;
    let table = jQuery(elem).parents('table').eq(0);
    let rows = table.find('tr:gt(0)').toArray().sort(comparer(jQuery(elem).index()));
    if (!isAsc) {
        elem.asc = !elem.asc;
    }
    if (!elem.asc) {
        rows = rows.reverse()
    }
    for (let i = 0; i < rows.length; i++) {
        table.append(rows[i])
    }
}

function comparer(index) {
    return function (a, b) {
        let valA = getCellValue(a, index), valB = getCellValue(b, index)
        return jQuery.isNumeric(valA) && jQuery.isNumeric(valB) ? valA - valB : valA.toString().localeCompare(valB)
    }
}

function getCellValue(row, index) {
    return jQuery(row).children('td').eq(index).text()
}

function removeItems(arr, item) {
    for (let i = 0; i < item; i++) {
        arr.pop();
    }
}

function mapOrder(array, order, key) {

    array.sort(function (a, b) {
        var A = a[key], B = b[key];

        if (order.indexOf(A) > order.indexOf(B)) {
            return 1;
        } else {
            return -1;
        }

    });

    return array;
}

jQuery(document).on("keyup", ".b2bx-markets-search", function () {
    let value = jQuery(this).val(),
        split = value.replace(/ /g, "'):containsi('");

    jQuery.extend(
        jQuery.expr[":"], {
            "containsi": function (elem, i, match, array) {
                return (elem.textContent || elem.innerText || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
            }
        });

    jQuery(".b2bx-table-markets tbody tr").not(":containsi('" + split + "')").each(function (e) {
        jQuery(this).attr("visible", "false");
    });

    jQuery(".b2bx-table-markets tbody tr:containsi('" + split + "')").each(function (e) {
        jQuery(this).attr("visible", "true");
    });

    let items = jQuery(".b2bx-table-markets tbody tr:not(.b2bx-table-tbody-row-hide)[visible='true']").length;
    jQuery(".b2bx-markets-counter").text(items + " " + marketsConfig.lang.item);
    if (items == "0") {
        jQuery(".b2bx-table-thead-result").show();
    } else {
        jQuery(".b2bx-table-thead-result").hide();
    }
});

jQuery(document).on("change", ".nav-select", function () {
    let optionSelected = jQuery("option:selected", this);
    let items;
    let check = jQuery(".b2bx-markets-search").val().length;

    jQuery(".b2bx-table-markets tbody tr").addClass("b2bx-table-tbody-row-hide");
    market = optionSelected.find('a').data("market");

    if (market === "FAV") {
        jQuery(".b2bx-table-markets tbody tr.b2bx-table-tbody-row-favorite").removeClass("b2bx-table-tbody-row-hide");
        items = jQuery(".b2bx-table-markets tbody tr.b2bx-table-tbody-row-favorite" + ((check > 0) ? "[visible='true']" : "")).length;
    } else {
        jQuery(".b2bx-table-markets tbody tr[data-market='" + market + "']").removeClass("b2bx-table-tbody-row-hide");
        items = jQuery(".b2bx-table-markets tbody tr[data-market='" + market + "']" + ((check > 0) ? "[visible='true']" : "")).length;
    }
    jQuery(".b2bx-markets-counter").text(items + " " + marketsConfig.lang.item);

    if (items === "0") {
        jQuery(".b2bx-table-thead-result").show();
    } else {
        jQuery(".b2bx-table-thead-result").hide();
    }

    try {
        webStorage.setItem("market", market);
    } catch (e) {
    }
});

jQuery(document).on("click", ".b2bx-markets-tabs-nav-link", function () {
    let check = jQuery(".b2bx-markets-search").val().length;
    let items;

    jQuery(".b2bx-markets-tabs li a.active").removeClass("active");
    jQuery(this).addClass("active");
    jQuery(".b2bx-table-markets tbody tr").addClass("b2bx-table-tbody-row-hide");
    market = jQuery(this).data("market");

    if (market === "FAV") {
        jQuery(".b2bx-table-markets tbody tr.b2bx-table-tbody-row-favorite").removeClass("b2bx-table-tbody-row-hide");
        items = jQuery(".b2bx-table-markets tbody tr.b2bx-table-tbody-row-favorite" + ((check > 0) ? "[visible='true']" : "")).length;
    } else {
        jQuery(".b2bx-table-markets tbody tr[data-market='" + market + "']").removeClass("b2bx-table-tbody-row-hide");
        items = jQuery(".b2bx-table-markets tbody tr[data-market='" + market + "']" + ((check > 0) ? "[visible='true']" : "")).length;
    }

    jQuery(".b2bx-markets-counter").text(items + " " + marketsConfig.lang.item);

    if (items === "0") {
        jQuery(".b2bx-table-thead-result").show();
    } else {
        jQuery(".b2bx-table-thead-result").hide();
    }

    try {
        webStorage.setItem("market", market);
    } catch (e) {
    }
});

jQuery(document).on("click", ".b2bx-table-markets tbody tr", function (e) {
    if (typeof marketsConfig.defaults.exchange !== "undefined") {
        try {
            webStorage.SessionInstrumentId = jQuery(this).data("table");
            webStorage.SessionPair = jQuery(this).find("td[data-pair]").data("pair");
        } catch (e) {
        }
        window.open(marketsConfig.defaults.exchange, "_blank");
    }
}).on("click", ".b2bx-button-favorite", function (e) {
    e.stopPropagation();

    let id = jQuery(this).data("instrument"),
        favorite = favorites.indexOf(id),
        $row = jQuery(this).parents(".b2bx-table-tbody-row");

    if (favorite !== -1) {
        favorites.splice(favorite, 1);
        $row.removeClass("b2bx-table-tbody-row-favorite");

        if (market == "FAV" && marketsConfig.defaults.mode == "widget") {
            $row.addClass("b2bx-table-tbody-row-hide");

            // ЕСЛИ убрали у всех пар отметку
            let items = jQuery(".b2bx-table-markets tbody tr.b2bx-table-tbody-row-favorite").length;

            if (items == "0") {
                jQuery(".b2bx-table-thead-result").show();
            }
        }
    } else {
        favorites.push(id);
        $row.addClass("b2bx-table-tbody-row-favorite");
    }

    try {
        webStorage.setItem("favorites", JSON.stringify(favorites));
    } catch (e) {
    }
});

jQuery(document).on("click", ".b2bx-table-thead-sorting", function () {
    sortTable(this);
    marketsConfig.defaults.sorting = jQuery(this).data('sorting');
});



