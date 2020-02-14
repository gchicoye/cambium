//Script - cdeco.fr
//Generated - Fri, 14 Feb 2020 17:16:25 +0000 by Cambium Media

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

var cambiumAd = cambiumAd || {};
cambiumAd.que = cambiumAd.que || [];

(function () {
	var s = document.createElement('script');
	s.async = true;
	s.type = 'text/javascript';
	s.src = "//dev.cdn.cleoma.fr/cambium/prebid.js";
	var node = document.getElementsByTagName('script')[0];
	node.parentNode.insertBefore(s, node);
})();

cambiumAd.setInventoryType = function(){
	if (navigator.userAgent.match(/(Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini)/gi)) {
		if ( ((screen.width  >= 480) && (screen.height >= 800)) || ((screen.width  >= 800) && (screen.height >= 480)) || navigator.userAgent.match(/ipad/gi) ) {
			cambiumAd.inventoryType = 'desktop';
		} else {
			cambiumAd.inventoryType = 'mobile';
		}
	} else {
		cambiumAd.inventoryType = 'desktop';
	}
}

cambiumAd.initTimeout = function(){
	cambiumAd.timeout = 2700
}

cambiumAd.setPbjsAdUnits = function(){
	var pbjsAdUnits = []
	if(cambiumAd.inventoryType == 'desktop'){
		pbjsAdUnits.push({
		    "code": "Pave_1",
		    "mediaTypes": {
		        "banner": {
		            "sizes": [[300,600],[300,250]]
		        }
		    },
		    "bids": [
		        {
		            "bidder": "aol",
		            "params": {
		                "placement": 6660126,
		                "network": 4950.1
		            }
		        },
		        {
		            "bidder": "piximedia",
		            "params": {
		                "siteId": "CDECOFR",
		                "placementId": "BTF"
		            }
		        },
		        {
		            "bidder": "ix",
		            "params": {
		                "siteId": 313157,
		                "size": [300,600]
		            }
		        },
		        {
		            "bidder": "ix",
		            "params": {
		                "siteId": 313157,
		                "size": [300,250]
		            }
		        },
		        {
		            "bidder": "msqapptra",
		            "params": {
		                "placementId": 15889670
		            }
		        },
		        {
		            "bidder": "msqrubtra",
		            "params": {
		                "accountId": 9585,
		                "siteId": 257992,
		                "zoneId": 1280466,
		                "position": "btf"
		            }
		        }
		    ]
		})
		pbjsAdUnits.push({
		    "code": "box",
		    "mediaTypes": {
		        "banner": {
		            "sizes": [[300,100]]
		        }
		    },
		    "bids": [
		        {
		            "bidder": "aol",
		            "params": {
		                "placement": 6660125,
		                "network": 4950.1
		            }
		        },
		        {
		            "bidder": "piximedia",
		            "params": {
		                "siteId": "CDECOFR",
		                "placementId": "BTF"
		            }
		        },
		        {
		            "bidder": "ix",
		            "params": {
		                "siteId": 316975,
		                "size": [300,100]
		            }
		        },
		        {
		            "bidder": "msqapptra",
		            "params": {
		                "placementId": 15889670
		            }
		        },
		        {
		            "bidder": "msqrubtra",
		            "params": {
		                "accountId": 9585,
		                "siteId": 257992,
		                "zoneId": 1280466,
		                "position": "btf"
		            }
		        }
		    ]
		})
	}
	if(cambiumAd.inventoryType == 'mobile'){
		pbjsAdUnits.push({
		    "code": "Pave_1",
		    "mediaTypes": {
		        "banner": {
		            "sizes": [[300,600],[300,250]]
		        }
		    },
		    "bids": [
		        {
		            "bidder": "aol",
		            "params": {
		                "placement": 6660121,
		                "network": 4950.1
		            }
		        },
		        {
		            "bidder": "piximedia",
		            "params": {
		                "siteId": "CDECOFR",
		                "placementId": "BTF"
		            }
		        },
		        {
		            "bidder": "ix",
		            "params": {
		                "siteId": 316976,
		                "size": [300,600]
		            }
		        },
		        {
		            "bidder": "ix",
		            "params": {
		                "siteId": 316976,
		                "size": [300,250]
		            }
		        },
		        {
		            "bidder": "msqapptra",
		            "params": {
		                "placementId": 15889671
		            }
		        },
		        {
		            "bidder": "msqrubtra",
		            "params": {
		                "accountId": 9585,
		                "siteId": 257992,
		                "zoneId": 1280468,
		                "position": "btf"
		            }
		        }
		    ]
		})
		pbjsAdUnits.push({
		    "code": "box",
		    "mediaTypes": {
		        "banner": {
		            "sizes": [[300,100]]
		        }
		    },
		    "bids": [
		        {
		            "bidder": "aol",
		            "params": {
		                "placement": 6660123,
		                "network": 4950.1
		            }
		        },
		        {
		            "bidder": "piximedia",
		            "params": {
		                "siteId": "CDECOFR",
		                "placementId": "BTF"
		            }
		        },
		        {
		            "bidder": "ix",
		            "params": {
		                "siteId": 316978,
		                "size": [300,100]
		            }
		        },
		        {
		            "bidder": "msqapptra",
		            "params": {
		                "placementId": 15889672
		            }
		        },
		        {
		            "bidder": "msqrubtra",
		            "params": {
		                "accountId": 9585,
		                "siteId": 257992,
		                "zoneId": 1280470,
		                "position": "btf"
		            }
		        }
		    ]
		})
	}
	cambiumAd.pbjsAdUnits = pbjsAdUnits
}

cambiumAd.getConsentString = function(){
	var output = false
	document.cookie.split(";").forEach(function(element){
		if(element.substr(0,10) == " euconsent"){
			output = element.split("=")[1]
		}
	})
	return output
}

cambiumAd.setUpPbjs = function(){
	pbjs.que.push(function(){
		pbjs.aliasBidder('appnexus', 'msqapptra');
		pbjs.aliasBidder('appnexus', 'msqappprv');
		pbjs.aliasBidder('appnexus', 'msqappmax');
		pbjs.aliasBidder('rubicon', 'msqrubprv');
		pbjs.aliasBidder('rubicon', 'msqrubtra');
		pbjs.bidderSettings = {
			msqapptra:{
				bidCpmAdjustment : function(bidCpm, bid){
					return bidCpm * .83;
				}
			},
			msqappprv:{
				bidCpmAdjustment : function(bidCpm, bid){
					return bidCpm * .83;
				}
			},
			msqappmax:{
				bidCpmAdjustment : function(bidCpm, bid){
					return bidCpm * .83;
				}
			},
			msqrubprv:{
				bidCpmAdjustment : function(bidCpm, bid){
					return bidCpm * .83;
				}
			},
			msqrubtra:{
				bidCpmAdjustment : function(bidCpm, bid){
					return bidCpm * .83;
				}
			},
		}
		var config = {
			bidderTimeout: cambiumAd.timeout,
			priceGranularity: 'dense',
			currency: {
				adServerCurrency: 'EUR',
				granularityMultiplier: 1,
				rates: { 'USD': { 'EUR': 0.91 }}
			},
			consentManagement: {
				gdpr : {
					cmpApi: 'static',
					allowAuctionWithoutConsent: true
				}	
			}
		}
		var consentString = cambiumAd.getConsentString()
		if(consentString !== false){
			config.consentManagement.gdpr.consentData =  {}
			config.consentManagement.gdpr.consentData.getConsentData = {
				gdprApplies: true,
				hasGlobalScope: false,
				consentData: consentString
			}
			config.consentManagement.gdpr.consentData.getVendorConsents = {
				metadata: consentString,
				gdprApplies: true,
			}
		}
		console.log('[pbjsConfig]',config)
		pbjs.setConfig(config);
	});
	return true;
}

cambiumAd.refresh = function(googleSlots){
	googletag.cmd.push(function(){
		pbjs.que.push(function(){
			var adUnitCodes = [];
			var updatedSlots = [];
			if(googleSlots == undefined){
				var slots = googletag.pubads().getSlots();
			} else {
				var slots = googleSlots;
			}
			slots.forEach(function(slot){
				var foo = cambiumAd.mapSlot(slot);
				if(foo !== false){
					adUnitCodes.push(foo);
				}
			});
			console.log('[adUnitCodes]', adUnitCodes,'[slots]', slots);
			if(adUnitCodes.length !== 0){
				console.log('[Header Bidding Launched]', adUnitCodes);
				pbjs.requestBids({
					timeout: cambiumAd.timeout,
					adUnitCodes: adUnitCodes,
					bidsBackHandler: function(bids) {
						slots.forEach(function(slot){
							var adUnitCode = cambiumAd.mapSlot(slot);
							if(adUnitCode !== false){
								if(slot.getTargetingKeys().length !== 0){
									slot.getTargetingKeys().forEach(function(key){
										if(key.substring(0,3) == 'hb_'){
											slot.clearTargeting(key)
										}
									});
								}
								var targeting = pbjs.getAdserverTargeting([adUnitCode])[adUnitCode];
								if(Object.keys(targeting).length !== 0){
									var bidder = targeting.hb_bidder;
									slot.setTargeting('hb_size', targeting.hb_size)
									slot.setTargeting('hb_pb', targeting.hb_pb)
									slot.setTargeting('hb_format', targeting.hb_format)
									slot.setTargeting(('hb_adid_'+bidder).substr(0,20), targeting[('hb_adid_'+bidder).substr(0,20)])
									slot.setTargeting(('hb_size_'+bidder).substr(0,20), targeting[('hb_size_'+bidder).substr(0,20)])
									slot.setTargeting(('hb_pb_'+bidder).substr(0,20), targeting[('hb_pb_'+bidder).substr(0,20)])
								}
							}
							updatedSlots.push(slot);
							if(updatedSlots.length == slots.length){
								updatedSlots.forEach(function(slot){
									console.log(['AdUnit'],slot.getAdUnitPath(), ['ElementId'], slot.getSlotElementId(), slot.getSizes(), slot.getTargetingKeys(), slot.getTargeting('AdPosition'));
								});
								googletag.pubads().refresh(updatedSlots);
							}
						});
					}
				});
			} else {
				slots.forEach(function(slot){
					updatedSlots.push(slot);
				});
				if(updatedSlots.length == slots.length){
					googletag.pubads().refresh(updatedSlots);
				}
			}
		});
	});
}

cambiumAd.mapSlot = function(slot){
	var slotName = slot.getAdUnitPath();
	if(slotName.split("/").length == 3){
		slotName = slotName.split("/")[2];
	} else {
		return
	}
	if(["dev_", "Dev_"].indexOf(slotName.substring(0,4)) !== -1){
		slotName = slotName.substring(4)
	}
	var foo = slotName.split("_")
	
	if(foo.length > 2){
		if(foo[1] == "box"){
			return foo[1]
		} else {
			return foo[1]+"_"+foo[2]
		}
	}
	return false
}

cambiumAd.showAllBids = function(){
	function forEach(responses, cb) {
		Object.keys(responses).forEach(function(adUnitCode) {
			var response = responses[adUnitCode];
			response.bids.forEach(function(bid) {
				cb(adUnitCode, bid);
			});
		});
	}
	var winners = pbjs.getAllWinningBids();
	var output = [];
	forEach(pbjs.getBidResponses(), function(code, bid) {
		output.push({
			bid: bid,
			adunit: code,
			adId: bid.adId,
			bidder: bid.bidder,
			time: bid.timeToRespond,
			cpm: bid.cpm,
			msg: bid.statusMessage,
			rendered: !!winners.find(function(winner) {
				return winner.adId==bid.adId;
			})
		});
	});
	forEach(pbjs.getNoBids && pbjs.getNoBids() || {}, function(code, bid) {
		output.push({
			msg: "no bid",
			adunit: code,
			adId: bid.bidId,
			bidder: bid.bidder
		});
	});
	if (output.length) {
		if (console.table) {
			console.table(output);
		} else {
			for (var j = 0; j < output.length; j++) {
				console.log(output[j]);
			}
		}
	} else {
		console.warn('NO prebid responses');
	}
}

cambiumAd.init = function(){
	cambiumAd.setInventoryType()
	cambiumAd.initTimeout()
	cambiumAd.setPbjsAdUnits()
	cambiumAd.setUpPbjs()
	pbjs.que.push(function(){
		pbjs.addAdUnits(cambiumAd.pbjsAdUnits);
	});
	cambiumAd.que.push = function(t){
		t();
	};
	for (var at = 0; at < cambiumAd.que.length; at++){
		cambiumAd.que[at]();
	}
}
cambiumAd.init()
