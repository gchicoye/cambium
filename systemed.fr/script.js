//Script - systemed.fr
//Generated - Wed, 12 Feb 2020 21:29:23 +0000 by Cambium Media

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
	pbjsAdUnits = []
	if(cambiumAd.inventoryType == 'desktop'){
		pbjsAdUnits.push({
		    "code": "Megabanniere_Header",
		    "mediaTypes": {
		        "banner": {
		            "sizes": [[728,90],[1000,90],[970,250]]
		        }
		    },
		    "bids": [
		        {
		            "bidder": "aol",
		            "params": {
		                "placement": 6660096,
		                "network": 4950.1
		            }
		        },
		        {
		            "bidder": "piximedia",
		            "params": {
		                "siteId": "SYSTEME_D",
		                "placementId": "RG"
		            }
		        },
		        {
		            "bidder": "ix",
		            "params": {
		                "siteId": 317030,
		                "size": [728,90]
		            }
		        },
		        {
		            "bidder": "ix",
		            "params": {
		                "siteId": 317030,
		                "size": [1000,90]
		            }
		        },
		        {
		            "bidder": "ix",
		            "params": {
		                "siteId": 317030,
		                "size": [970,250]
		            }
		        },
		        {
		            "bidder": "msqapptra",
		            "params": {
		                "placementId": 13741643
		            }
		        },
		        {
		            "bidder": "msqrubtra",
		            "params": {
		                "accountId": 9585,
		                "siteId": 258000,
		                "zoneId": 1280500,
		                "position": "atf"
		            }
		        }
		    ]
		})
		pbjsAdUnits.push({
		    "code": "Pave_1",
		    "mediaTypes": {
		        "banner": {
		            "sizes": [[300,600],[300,250],[336,280]]
		        }
		    },
		    "bids": [
		        {
		            "bidder": "aol",
		            "params": {
		                "placement": 6660113,
		                "network": 4950.1
		            }
		        },
		        {
		            "bidder": "piximedia",
		            "params": {
		                "siteId": "SYSTEME_D",
		                "placementId": "RG"
		            }
		        },
		        {
		            "bidder": "ix",
		            "params": {
		                "siteId": 317034,
		                "size": [300,600]
		            }
		        },
		        {
		            "bidder": "ix",
		            "params": {
		                "siteId": 317034,
		                "size": [300,250]
		            }
		        },
		        {
		            "bidder": "ix",
		            "params": {
		                "siteId": 317034,
		                "size": [336,280]
		            }
		        },
		        {
		            "bidder": "msqapptra",
		            "params": {
		                "placementId": 13741658
		            }
		        },
		        {
		            "bidder": "msqrubtra",
		            "params": {
		                "accountId": 9585,
		                "siteId": 258000,
		                "zoneId": 1280502,
		                "position": "atf"
		            }
		        }
		    ]
		})
		pbjsAdUnits.push({
		    "code": "Pave_2",
		    "mediaTypes": {
		        "banner": {
		            "sizes": [[300,600],[300,250],[336,280]]
		        }
		    },
		    "bids": [
		        {
		            "bidder": "aol",
		            "params": {
		                "placement": 6660099,
		                "network": 4950.1
		            }
		        },
		        {
		            "bidder": "piximedia",
		            "params": {
		                "siteId": "SYSTEME_D",
		                "placementId": "BTF"
		            }
		        },
		        {
		            "bidder": "ix",
		            "params": {
		                "siteId": 317037,
		                "size": [300,600]
		            }
		        },
		        {
		            "bidder": "ix",
		            "params": {
		                "siteId": 317037,
		                "size": [300,250]
		            }
		        },
		        {
		            "bidder": "ix",
		            "params": {
		                "siteId": 317037,
		                "size": [336,280]
		            }
		        },
		        {
		            "bidder": "msqapptra",
		            "params": {
		                "placementId": 15889758
		            }
		        },
		        {
		            "bidder": "msqrubtra",
		            "params": {
		                "accountId": 9585,
		                "siteId": 258000,
		                "zoneId": 1280504,
		                "position": "btf"
		            }
		        }
		    ]
		})
	}
	if(cambiumAd.inventoryType == 'mobile'){
		pbjsAdUnits.push({
		    "code": "Megabanniere_Header",
		    "mediaTypes": {
		        "banner": {
		            "sizes": [[320,100],[320,50]]
		        }
		    },
		    "bids": [
		        {
		            "bidder": "aol",
		            "params": {
		                "placement": 6660115,
		                "network": 4950.1
		            }
		        },
		        {
		            "bidder": "piximedia",
		            "params": {
		                "siteId": "SYSTEME_D",
		                "placementId": "RG"
		            }
		        },
		        {
		            "bidder": "ix",
		            "params": {
		                "siteId": 317043,
		                "size": [320,100]
		            }
		        },
		        {
		            "bidder": "ix",
		            "params": {
		                "siteId": 317043,
		                "size": [320,50]
		            }
		        },
		        {
		            "bidder": "msqapptra",
		            "params": {
		                "placementId": 15889762
		            }
		        },
		        {
		            "bidder": "msqrubtra",
		            "params": {
		                "accountId": 9585,
		                "siteId": 258000,
		                "zoneId": 1280510,
		                "position": "atf"
		            }
		        }
		    ]
		})
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
		                "placement": 6660109,
		                "network": 4950.1
		            }
		        },
		        {
		            "bidder": "piximedia",
		            "params": {
		                "siteId": "SYSTEME_D",
		                "placementId": "BTF"
		            }
		        },
		        {
		            "bidder": "ix",
		            "params": {
		                "siteId": 317044,
		                "size": [300,600]
		            }
		        },
		        {
		            "bidder": "ix",
		            "params": {
		                "siteId": 317044,
		                "size": [300,250]
		            }
		        },
		        {
		            "bidder": "msqapptra",
		            "params": {
		                "placementId": 15889762
		            }
		        },
		        {
		            "bidder": "msqrubtra",
		            "params": {
		                "accountId": 9585,
		                "siteId": 258000,
		                "zoneId": 1280512,
		                "position": "btf"
		            }
		        }
		    ]
		})
		pbjsAdUnits.push({
		    "code": "Pave_2",
		    "mediaTypes": {
		        "banner": {
		            "sizes": [[300,600],[300,250]]
		        }
		    },
		    "bids": [
		        {
		            "bidder": "aol",
		            "params": {
		                "placement": 6660108,
		                "network": 4950.1
		            }
		        },
		        {
		            "bidder": "piximedia",
		            "params": {
		                "siteId": "SYSTEME_D",
		                "placementId": "BTF"
		            }
		        },
		        {
		            "bidder": "ix",
		            "params": {
		                "siteId": 317045,
		                "size": [300,600]
		            }
		        },
		        {
		            "bidder": "ix",
		            "params": {
		                "siteId": 317045,
		                "size": [300,250]
		            }
		        },
		        {
		            "bidder": "msqapptra",
		            "params": {
		                "placementId": 15889763
		            }
		        },
		        {
		            "bidder": "msqrubtra",
		            "params": {
		                "accountId": 9585,
		                "siteId": 258000,
		                "zoneId": 1280512,
		                "position": "btf"
		            }
		        }
		    ]
		})
	}
	cambiumAd.pbjsAdUnits = pbjsAdUnits
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
		pbjs.setConfig({
			bidderTimeout: cambiumAd.prebidTimeout,
			priceGranularity: 'dense',
			consentManagement: {
				cmpApi: 'iab',
				timeout: 8000,
				allowAuctionWithoutConsent: true
			},
			'currency': {
				'adServerCurrency': 'EUR',
				'granularityMultiplier': 1,
				'rates': { 'USD': { 'EUR': 0.91 }}
			}
		});
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
	if(slotName.substring(0,4) == "dev_"){
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
