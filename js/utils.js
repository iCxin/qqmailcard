(window.webpackJsonp = window.webpackJsonp || []).push([
	[1], {
		"+CdD": function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		"+sKK": function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		"/G0N": function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		"11yO": function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		"2/1o": function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		"28sl": function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		"3Bv9": function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		"3izF": function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		"4DXU": function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		"4lWp": function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		"4zhx": function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		"5LSI": function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		"7Pzg": function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		"8ylo": function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		A85q: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		BS7X: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		CGxl: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		D4Nv: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		DCBL: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		DZuv: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		EfDe: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		GCwT: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		H0VI: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		H2HL: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		HUPE: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		HgE7: function(e, t, n) {
			"use strict";
			var i = n("bGnv"),
				o = n("ZCj2");

			function a(e, t) {
				var n = window.document,
					i = n.createElement("script");
				i.src = e, i.onload = t, n.body.appendChild(i)
			}
			var r, c = {
					packageName: "com.tencent.androidqqmail",
					packageUrl: "qqmail://"
				},
				s = {
					bridge: window.mqq,
					share: function(e, t) {
						this.bridge.data.setShareInfo({
							image_url: e.icon,
							share_url: e.url,
							desc: e.desc,
							title: e.title
						})
					},
					isAppInstalled: function(e, t) {
						e = mqq.android ? e.packageName : e.packageUrl, this.bridge.app.isAppInstalled(e, function(e) {
							t(e)
						})
					},
					goUrl: function(e) {
						location.href = e
					}
				},
				d = {
					bridge: window.qmailBridge,
					share: function(e, t) {
						this.bridge.moreOperation([{
							shareToWechatTimeLine: {
								imageUrl: t.icon,
								url: t.url,
								abstract: t.desc,
								title: t.title
							}
						}, {
							shareToWechatFriend: {
								imageUrl: e.icon,
								url: e.url,
								abstract: e.desc,
								title: e.title
							}
						}])
					},
					isAppInstalled: function(e, t) {
						t(e === c && i.isMailApp())
					},
					goUrl: function(e) {
						location.href = e
					}
				},
				l = {
					bridge: window.WeixinJSBridge,
					share: function(e, t) {
						var n = this.bridge;
						n.on("menu:share:appmessage", function() {
							n.invoke("sendAppMessage", {
								img_url: e.icon,
								link: e.url,
								desc: e.desc,
								title: e.title
							})
						}), n.on("menu:share:timeline", function() {
							n.invoke("shareTimeline", {
								img_url: t.icon,
								link: t.url,
								desc: t.desc,
								title: t.title
							})
						})
					},
					isAppInstalled: function(e, t) {
						return this.bridge.invoke("getInstallState", e, function(e) {
							t(e && e.err_msg && e.err_msg.indexOf("get_install_state:yes") > -1 || e.errMsg && e.errMsg.indexOf("get_install_state:yes") > -1)
						}), this
					},
					goUrl: function(e, t) {
						-1 !== function(e, t, n) {
							var i = n && n.lexicographical,
								o = n && n.zeroExtend,
								a = e.split("."),
								r = t.split(".");
							if (o) {
								for (; a.length < r.length;) a.push("0");
								for (; r.length < a.length;) r.push("0")
							}
							i || (a = a.map(Number), r = r.map(Number));
							for (var c = 0; c < a.length; ++c) {
								if (r.length == c) return 1;
								if (a[c] != r[c]) return a[c] > r[c] ? 1 : -1
							}
							return a.length != r.length ? -1 : 0
						}(navigator.userAgent.match(/MicroMessenger\/([\d\.]+)/i)[1] || "0", "6.5.6", {
							zeroExtend: !0
						}) ? this.bridge.invoke("launchApplication", {
							schemeUrl: e
						}, function(e) {
							t && t(e && e.err_msg && e.err_msg.indexOf("launchApplication:ok") > -1 || e.errMsg && e.errMsg.indexOf("launchApplication:ok") > -1)
						}) : location.href = e
					}
				},
				u = new o,
				m = !1;

			function p(e, t, n) {
				var i = function() {
					r ? r[e].apply(r, [t, n]) : "function" == typeof n && n(!1)
				};
				r ? r[e].apply(r, [t, n]) : m ? i() : u.on("ready", function() {
					i()
				})
			}
			e.exports = {
				share: function(e, t) {
					p("share", e, t)
				},
				isAppInstalled: function(e, t) {
					p("isAppInstalled", e, t)
				},
				goUrl: function(e, t) {
					p("goUrl", e, t)
				},
				isMailAppInstalled: function(e) {
					this.isAppInstalled(c, e)
				}
			}, u.on("ready", function() {
				m = !0
			}), i.isQQ() ? a("https://open.mobile.qq.com/sdk/qqapi.js?_bid=152", function() {
				window.mqq && (s.bridge = window.mqq, r = s, u.emit("ready"))
			}) : i.isWeiXin() ? window.document.addEventListener("WeixinJSBridgeReady", function() {
				l.bridge = WeixinJSBridge, r = l, u.emit("ready")
			}, !1) : i.isMailApp() ? window.qmailBridge ? (d.bridge = window.qmailBridge, r = d, u.emit("ready")) : a("https://rescdn.qqmail.com/zh_CN/htmledition/js/app_api.js", function() {
				window.qmailBridge && (d.bridge = window.qmailBridge, r = d, u.emit("ready"))
			}) : u.emit("ready")
		},
		Hofz: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		ILQP: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		JCKF: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		JPcf: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		LQ7h: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		LYXq: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		MJqz: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		MrJS: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		N5EV: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		OPAp: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		OiXj: function(e, t, n) {
			"use strict";
			var i = n("kGAF");

			function o() {}

			function a(e) {
				return this.url = e.url || "/cgi-bin/report", this.transformRequest = e.transformRequest || o, this.delayLogList = [], this._timer = null, this.report.bind(this)
			}
			a.prototype.report = function(e, t) {
				var n = this;
				(function(e) {
					return "[object Array]" === Object.prototype.toString.call(e)
				})(e) || (e = [e]), t && "delay" !== t ? this._doReport([].concat(e)) : this.delayLogList = this.delayLogList.concat(e), !this._timer && this.delayLogList.length > 0 && (this._timer = setTimeout(function() {
					n._doReport(n.delayLogList), n.delayLogList = []
				}, 500))
			}, a.prototype._doReport = function(e) {
				i(this.url, {
					type: "POST",
					data: this.transformRequest(e)
				}), this._timer && clearTimeout(this._timer), this._timer = void 0
			}, e.exports = a
		},
		Q5yL: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		TQCg: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		Tajd: function(e, t, n) {
			"use strict";
			var i = c(n("SsBM")),
				o = c(n("x5uC")),
				a = c(n("/byC")),
				r = c(n("PGlE"));

			function c(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function s(e) {
				var t = window.location.search;
				if (t) {
					var n = t.slice(1).split("&"),
						i = !0,
						o = !1,
						a = void 0;
					try {
						for (var c, s = (0, r.default)(n); !(i = (c = s.next()).done); i = !0) {
							var d = c.value.split("=");
							if (d && 2 === d.length && d[0] === e) try {
								return decodeURI(d[1])
							} catch (e) {
								console.log(e)
							}
						}
					} catch (e) {
						o = !0, a = e
					} finally {
						try {
							!i && s.return && s.return()
						} finally {
							if (o) throw a
						}
					}
				}
				return ""
			}
			window.wholeContainer = document.getElementById("wholeContainer"), window.stateContainer = document.querySelector(".state-container"), window.cardContain = document.querySelector(".card-container"), window.rotateContainer = document.querySelector(".rotate-container"), window.envelope = document.querySelector(".envelope"), window.frontend = document.querySelector(".front-end"), window.backend = document.querySelector(".back-end"), window.frontendPic = document.querySelector(".frontend-picture"), window.backendPic = document.querySelector(".backend-picture"), window.envelopeWithHead = document.querySelector(".envelope-withhead"), window.envelopeWithoutHead = document.querySelector(".envelope-withouthead"), window.cardMessage = document.querySelector(".card-message"), window.backendSenderName = document.querySelector(".user-name"), window.receiverName = document.querySelector(".receiver-name"), window.backendSendDate = document.querySelector(".user-date"), window.positionPic = document.querySelector(".user-position-picture"), window.collectContainer = document.querySelector(".collect-container"), window.saveContainer = document.querySelector(".save-container"), window.positionContainer = document.querySelector(".user-position"), window.positionTitle = document.querySelector(".position-title"), window.frontendPicInitSrc = frontendPic.getAttribute("src"), window.backendPicInitSrc = backendPic.getAttribute("src"), window.hiddenPic = document.querySelector(".hiddle-picture");
			var d = !1;
			s("a") && (d = !0);
			var l = n("HgE7"),
				u = n("bGnv"),
				m = new(n("OiXj"))({
					url: "https://i.mail.qq.com/cgi-bin/postcard?fun=report",
					transformRequest: function(e) {
						return e.reduce(function(e, t) {
							return e + "&item=" + t
						}, "")
					}
				});

			function p(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
					n = t.platform,
					i = void 0 !== n && n,
					o = t.theme,
					a = void 0 !== o && o,
					r = t.isImmediately,
					c = void 0 !== r && r,
					s = "";
				i && (s = u.isWeiXin() ? "weixin" : u.isQQ() ? "qq" : u.isMailApp() ? "app" : "web");
				var l = "";
				a && (l = d ? "riddles" : "");
				var p = "Card_receive_";
				m(p += s ? l ? s + "_" + e + "_" + l : s + "_" + e : l ? e + "_" + l : "" + e, c)
			}

			function f(e) {
				documentFirstTouchY = e.changedTouches[0].clientY
			}

			function g(e) {
				ducumentThisTouchY = e.changedTouches[0].clientY, ducumentThisTouchY < documentFirstTouchY && (envelopHidden(), p("draw", {
					platform: !0
				}))
			}

			function v(e) {
				e.stopPropagation(), envelopeFirstTouchY = e.changedTouches[0].clientY
			}

			function h(e) {
				e.stopPropagation(), envelopeThisTouchY = e.changedTouches[0].clientY, envelopeThisTouchY > envelopeFirstTouchY && (envelopHidden(), p("draw", {
					platform: !0
				}))
			}

			function w() {
				p("send", {
					platform: !0,
					isImmediately: !0
				}), p("send", {
					theme: !0,
					isImmediately: !0
				}), l.isMailAppInstalled(function(e) {
					e ? l.goUrl("qqmail://greetingcard?action=main") : location.href = "http://app.mail.qq.com/cgi-bin/mailapp?latest=y&fr=tz&dlfrom=web&downloadclick=2018|newMailCard"
				})
			}
			p("expose", {
				platform: !0,
				theme: !0
			}), p("expose", {
				platform: !0
			}), p("expose", {
				theme: !0
			}), window.isOpenInMobile = function() {
				return /phone|pad|pod|iPhone|iPod|iPad|ios|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone/i.test(navigator.userAgent)
			}, window.eventHandlerCreator = function(e, t, n) {
				var i = null;
				return i = "addPicture" === t ? function(e) {
						(0, a.default)(e).map(function(t) {
							window[t] && (window[t].src = e[t], n && n(t))
						})
					} : function(e) {
						(0, a.default)(e).map(function(t) {
							window[t] && (window[t].innerText = e[t], n && n(t))
						})
					},
					function(n) {
						n.stopPropagation();
						var o = {};
						"addPicture" === t ? o[e] = window[e].src : "addMessage" === t ? (-1 === n.target.className.indexOf("backend-footer") && -1 === n.target.className.indexOf("user-name") && -1 === n.target.className.indexOf("user-date") || (o.area = "name"), e.map(function(e) {
							o[e] = window[e].innerText
						})) : e.map(function(e) {
							o[e] = window[e].innerText
						}), qmailBridge[t](o, i, function() {
							throw new Error("There is something wrong!")
						})
					}
			}, window.removeBeforeUserInputStyle = function(e) {
				window[e].classList.remove("before-user-input")
			}, window.DIYTapEvent = function(e, t) {
				var n = null;
				e.addEventListener("touchstart", function() {
					n = setTimeout(function() {
						clearTimeout(n), n = null
					}, 200)
				}), e.addEventListener("touchend", function(e) {
					n && t(e), clearTimeout(n), n = null
				})
			}, window.DIYLongTapEvent = function(e, t, n) {
				n = n || 500;
				var i = null;
				e.addEventListener("touchstart", function() {
					i = setTimeout(function(e) {
						t(e)
					}, n)
				}), e.addEventListener("touchmove", function() {
					clearTimeout(i), i = null
				}), e.addEventListener("touchend", function() {
					clearTimeout(i), i = null
				})
			}, window.removeEditorEvent = function() {
				[{
					dom: "frontendPic",
					callback: addFrontendPic
				}, {
					dom: "backendPic",
					callback: addBackendPic
				}, {
					dom: "cardMessage",
					callback: addCardMessage
				}, {
					dom: "backendSenderName",
					callback: addSenderName
				}, {
					dom: "receiverName",
					callback: addReceiverName
				}, {
					dom: "positionPic",
					callback: addPositionPic
				}].map(function(e) {
					window[e.dom].removeEventListener("touchstart", window[e.dom].eventHandler2bindEvent.get(e.callback).touchstart), window[e.dom].removeEventListener("touchend", window[e.dom].eventHandler2bindEvent.get(e.callback).touchend)
				})
			}, window.documentFirstTouchY = 0, window.ducumentThisTouchY = 0, window.envelopeFirstTouchY = 0, window.envelopeThisTouchY = 0, window.hasRotateCard = 0, window.envelopHidden = function() {
				cardContain.classList.add("tanslateUp"), cardContain.classList.add("card-center"), envelope.classList.add("hidden"), isOpenInMobile() ? (document.body.removeEventListener("touchstart", f), document.body.removeEventListener("touchend", g)) : document.body.removeEventListener("click", envelopHidden), setTimeout(function() {
					envelope.classList.add("display-none"), document.querySelector(".card-background").classList.add("display-none")
				}, 500), setTimeout(function() {
					hasRotateCard || rotateContainer.classList.toggle("overturn")
				}, 1500), isOpenInMobile() ? rotateContainer.addEventListener("touchend", rotateHandler) : rotateContainer.addEventListener("click", rotateHandler)
			}, window.rotateHandler = function(e) {
				hasRotateCard || (hasRotateCard = 1), rotateContainer.classList.toggle("overturn"), p("turn", {
					platform: !0
				})
			}, window.animationActivation = function() {
				isOpenInMobile() ? (document.body.addEventListener("touchstart", f), document.body.addEventListener("touchend", g), envelope.addEventListener("touchstart", v), envelope.addEventListener("touchend", h)) : document.body.addEventListener("click", envelopHidden)
			}, window.webviewPreventDefault = function(e) {
				e.preventDefault()
			}, window.stopWebviewScroll = function() {
				document.body.addEventListener("touchmove", webviewPreventDefault, {
					passive: !1
				}), envelope.addEventListener("touchmove", webviewPreventDefault, {
					passive: !1
				})
			}, window.removeStopWebviewScroll = function() {
				document.body.removeEventListener("touchmove", webviewPreventDefault), envelope.removeEventListener("touchmove", webviewPreventDefault)
			}, window.removeAnimationEvents = function() {
				document.body.removeEventListener("touchstart", f), document.body.removeEventListener("touchend", g), envelope.removeEventListener("touchstart", v), envelope.removeEventListener("touchend", h)
			}, window.jump2Frontend = function() {
				backend.classList.add("display-none")
			}, window.jump2Backend = function() {
				cardContain.classList.remove("display-none"), envelope.classList.add("display-none"), backend.classList.remove("display-none")
			}, window.jump2SenderPreview = function() {
				saveContainer.parentNode.removeChild(saveContainer), collectContainer.parentNode.removeChild(collectContainer), envelopHidden()
			}, window.editorEventsInit = function() {
				var e = eventHandlerCreator("frontendPic", "addPicture"),
					t = eventHandlerCreator("backendPic", "addPicture"),
					n = eventHandlerCreator(["cardMessage", "backendSenderName"], "addMessage", removeBeforeUserInputStyle),
					i = eventHandlerCreator(["receiverName"], "addMessage", removeBeforeUserInputStyle);
				DIYTapEvent(frontendPic, e), DIYTapEvent(backendPic, t), DIYTapEvent(backend, n), DIYTapEvent(receiverName, i), DIYTapEvent(positionContainer, function(e) {
					e.stopPropagation(), qmailBridge.addPosition(null, function(e) {
						updatePosition(e.positionTitle, e.positionPic)
					})
				})
			}, window.initBackendSenderName = function(e) {
				backendSenderName.innerText = e
			}, window.jump2Edit = function() {
				stateContainer.className = "state-container editor", envelope.classList.add("display-none"), cardMessage.classList.add("before-user-input"), saveContainer.parentNode.removeChild(saveContainer), collectContainer.parentNode.removeChild(collectContainer), removeAnimationEvents(), editorEventsInit(), removeStopWebviewScroll()
			}, window.jump2Send = function() {
				removeAnimationEvents(), document.querySelector(".card-background").classList.add("display-none"), document.body.addEventListener("touchend", function(e) {
					qmailBridge.jump2SenderPreview(null, function() {
						console.log("Open Sender Preview")
					}, function(e) {
						e && console.log(e)
					})
				}), stateContainer.className = "state-container send"
			}, window.toggleFrontenfPicDisplay = function() {
				frontendPic.classList.toggle("display-none")
			}, window.toggleBackendPicDisplay = function() {
				backendPic.parentNode.classList.toggle("display-none")
			}, window.toggleBackendDateDisplay = function() {
				updateSendDate(), backendSendDate.classList.toggle("display-none"), backendSenderName.classList.toggle("margin-top-24"), backendSenderName.classList.toggle("user-name-Small")
			}, window.toggleBackendPostionDisplay = function() {
				positionContainer.classList.toggle("display-none")
			}, window.updatePosition = function(e, t) {
				positionContainer.classList.remove("display-none"), positionTitle.innerText = e, t ? (positionPic.src = t, positionPic.classList.remove("display-none")) : positionPic.classList.add("display-none")
			}, window.updateSendDate = function(e) {
				if (!e) {
					var t = new Date;
					e = t.getFullYear() + "." + (t.getMonth() + 1) + "." + t.getDate()
				}
				backendSendDate.innerText = e
			}, window.clearAllBeforeUserInput = function() {
				(0, o.default)(document.querySelectorAll(".before-user-input")).map(function(e) {
					e.classList.remove("before-user-input")
				})
			}, window.hideAllEmptyImgContainer = function() {
				(0, o.default)(document.querySelectorAll("img")).map(function(e) {
					e.getAttribute("src") || e.classList.add("display-none")
				})
			}, window.getCardId = function(e) {
				var t = location.href,
					n = new RegExp("(?:\\?|&)" + e + "=(.*?)(?:&|$)");
				return n.exec(t) && n.exec(t)[1]
			}, window.toggleIconHeart = function() {
				collectContainer.classList.remove("icon-heart-empty"), collectContainer.classList.add("icon-heart-filled")
			}, window.isMobile = function() {
				var e = navigator.userAgent,
					t = e.indexOf("Android") > -1 || e.indexOf("Adr") > -1,
					n = !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
				return t || n
			}, window.initPlatform = function() {
				var e = s("a");
				if (e) {
					var t = cardMessage.innerHTML.replace(e, '<span class="card-message-highlight">' + e + "</span>");
					cardMessage.innerHTML = t
				}
				var n = getCardId("id");
				!n && isMobile() && qmailBridge.getGreetingCardId(function(e) {
					n = e
				}, function(e) {
					console.log(e)
				});
				var i = document.querySelector(".hidden-picture-mask");
				DIYTapEvent(i, function(e) {
					e.stopPropagation(), i.classList.remove("actived")
				}), document.querySelector(".save-btn").addEventListener("touchend", function(e) {
					i.classList.add("actived"), p("picture", {
						platform: !0
					}), p("picture", {
						theme: !0
					})
				}), hiddenPic.addEventListener("touchstart", function(e) {
					e.stopPropagation()
				}), hiddenPic.addEventListener("touchend", function(e) {
					e.stopPropagation()
				}), DIYLongTapEvent(hiddenPic, function() {
					p("savepicture", {
						platform: !0
					}), p("savepicture", {
						theme: !0
					})
				}), document.querySelector(".send-btn").addEventListener("touchend", w), document.querySelector(".hidden-picture-saveToBook").addEventListener("touchend", function(e) {
					e.stopPropagation(),
						function(e) {
							p("save", {
								platform: !0,
								isImmediately: !0
							}), p("save", {
								theme: !0,
								isImmediately: !0
							});
							var t = "qqmail://greetingcard?action=collection&cardid=" + e;
							l.isMailAppInstalled(function(e) {
								e ? l.goUrl(t) : location.href = "http://app.mail.qq.com/cgi-bin/mailapp?latest=y&fr=tz&dlfrom=web&downloadclick=2018|newMailCard"
							})
						}(n)
				}), isMobile() && qmailBridge.getDeviceId(function(e) {
					if (e) {
						var t = function(e) {
								qmailBridge.goToUrl("qqmail://greetingcard?action=collectionlist")
							},
							i = function e(i) {
								qmailBridge.keepGreetingCard(n, function(n) {
									p("save", {
										platform: !0,
										isImmediately: !0
									}), toggleIconHeart(), collectContainer.removeEventListener("touchstart", collectContainer.eventHandler2bindEvent.get(e).touchstart), collectContainer.removeEventListener("touchend", collectContainer.eventHandler2bindEvent.get(e).touchend), DIYTapEvent(collectContainer, t)
								}, function(e) {
									console.log(e)
								})
							};
						collectContainer.classList.remove("display-none"), saveContainer.classList.add("display-none"), qmailBridge.hasGreetingCard(n, function(e) {
							e ? (toggleIconHeart(), DIYTapEvent(collectContainer, t)) : collectContainer.eventHandler2bindEvent = DIYTapEvent(collectContainer, i)
						}, function(e) {
							console.log(e)
						})
					} else stopWebviewScroll()
				}, function(e) {
					console.log(e)
				}), backendPic && "" === backendPic.getAttribute("src") && document.querySelector(".backend-picture-container").classList.add("display-none"), backendSendDate && "" === backendSendDate.innerHTML && (backendSendDate.classList.toggle("display-none"), backendSenderName.classList.toggle("margin-top-24"), backendSenderName.classList.toggle("user-name-Small"))
			}, window.getAllVariableData = function() {
				var e = {
					frontendPic: frontendPic.src !== frontendPicInitSrc ? frontendPic.src : "",
					backendPic: backendPic.src !== backendPicInitSrc ? backendPic.src : "",
					cardMessage: cardMessage.innerText,
					backendSenderName: backendSenderName.innerText,
					backendSendDate: backendSendDate.innerText,
					positionTitle: positionTitle.innerText,
					positionPic: positionPic.src,
					theme: wholeContainer.getAttribute("data-theme"),
					envelopeNicknameColor: wholeContainer.getAttribute("data-envelopeNicknameColor"),
					envelopeSendFieldColor: wholeContainer.getAttribute("data-envelopeSendFieldColor"),
					envelopePicWithHead: envelopeWithHead ? envelopeWithHead.src : "",
					envelopePicWithoutHead: envelopeWithoutHead ? envelopeWithoutHead.src : ""
				};
				return qmailBridge.getAllVariableData(e, null, function(e) {
					console.log(e)
				}), console.log("test1"), (0, i.default)(e)
			}, positionTitle.innerText && positionContainer.classList.remove("display-none"), isOpenInMobile() || saveContainer.classList.add("display-none"), clearAllBeforeUserInput(), hideAllEmptyImgContainer(), animationActivation(), initPlatform()
		},
		Tihi: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		U3Ij: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		VHDx: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		XEdc: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		XbcY: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		XgiB: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		YGnJ: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		YHf0: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		YWaQ: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		YmPJ: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		Z2zJ: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		Z7A5: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		ZCj2: function(e, t, n) {
			"use strict";

			function i() {
				this._events = []
			}
			i.prototype = {
				on: function(e, t) {
					return this._events[e] = this._events[e] || [], this._events[e].push(t), this
				},
				off: function(e, t) {
					return this._events[e].splice(this._events[e].indexOf(t), 1), this
				},
				emit: function(e) {
					var t = this;
					if (t._events[e]) {
						for (var n = 0, i = t._events[e].length; n < i; n++) t._events[e][n].apply(t);
						return t
					}
				}
			}, e.exports = i
		},
		"a//1": function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		aaHn: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		bGnv: function(e, t, n) {
			"use strict";
			var i, o = "weixin",
				a = "qq",
				r = "web",
				c = "mailapp";

			function s(e) {
				return function() {
					return e === function() {
						if (i) return i;
						var e = window.navigator.userAgent.toLowerCase();
						return i = /micromessenger(\/[\d\.]+)*/i.test(e) ? o : /qq\/(\/[\d\.]+)*/i.test(e) ? a : /mailapp/i.test(e) ? c : r
					}()
				}
			}
			e.exports.isQQ = s(a), e.exports.isWeiXin = s(o), e.exports.isWeb = s(r), e.exports.isMailApp = s(c);
			var d = navigator.userAgent;
			e.exports.isIOS = !!d.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), e.exports.isAndroid = !!d.match(/Android|Adr/i)
		},
		c3EC: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		c9ux: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		cVW0: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		dbnp: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		dzEj: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		ePaW: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		fedN: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		gb2a: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("Tajd")
		},
		gfI4: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		hnit: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		j1Wg: function(e, t) {
			! function() {
				QMailBridge = function() {
					this._sendMessageQueue = [], this._callback_count = 1e3, this._callback_map = {}, this.available_func = {}, this._iframe = document.createElement("iframe"), this._iframe.setAttribute("id", "iframe"), this._iframe.setAttribute("style", "position:absolute;top:0;left:0;width:1px;height:1px;visibility:hidden;"), this._QUEUE_HAS_MESSAGE_URL = "qqmailapijs://dispatch_message/", document.body.appendChild(this._iframe), this._resultIframe = document.createElement("iframe"), this._resultIframe.setAttribute("id", "_resultIframe"), this._resultIframe.setAttribute("style", "position:absolute;top:0;left:0;width:1px;height:1px;visibility:hidden;"), this._resultIframe._SET_RESULT_URL = "qqmailapijs://private/setresult/", document.body.appendChild(this._resultIframe)
				}, QMailBridge.prototype.getDeviceId = function(e, t) {
					var n = this;
					this._call("getDeviceId", "{}", function(i, o) {
						var a = {
							deviceid: o
						};
						(n.localLog(a), i) ? e(o): t(o)
					})
				}, QMailBridge.prototype.addPicture = function(e, t, n) {
					this._call("addPicture", e, function(e, i) {
						e ? ("string" == typeof i && (i = JSON.parse(i)), t(i)) : n()
					})
				}, QMailBridge.prototype.addMessage = function(e, t, n) {
					this._call("addMessage", e, function(e, i) {
						e ? ("string" == typeof i && (i = JSON.parse(i)), t(i)) : n()
					})
				}, QMailBridge.prototype.jump2SenderPreview = function(e, t, n) {
					this._call("jump2SenderPreview", e, function(e, i) {
						e ? t() : n(i)
					})
				}, QMailBridge.prototype.addPosition = function(e, t, n) {
					this._call("addPosition", e, function(e, i) {
						e ? ("string" == typeof i && (i = JSON.parse(i)), t(i)) : n()
					})
				}, QMailBridge.prototype.getAllVariableData = function(e, t, n) {
					this._call("getAllVariableData", e, function(e, i) {
						e ? t(i) : n(i)
					})
				}, QMailBridge.prototype.keepGreetingCard = function(e, t, n) {
					var i = this;
					this._call("keepGreetingCard", {
						cardID: e
					}, function(o, a) {
						i.localLog(e), o ? t(a) : n(a)
					})
				}, QMailBridge.prototype.hasGreetingCard = function(e, t, n) {
					var i = this;
					this._call("hasGreetingCard", {
						cardID: e
					}, function(o, a) {
						i.localLog(e), o ? t(a) : n(a)
					})
				}, QMailBridge.prototype.getGreetingCardId = function(e, t) {
					var n = this;
					this._call("getGreetingCardId", "{}", function(i, o) {
						var a = {
							cardid: o
						};
						(n.localLog(a), i) ? e(o): t(o)
					})
				}, QMailBridge.prototype.goToUrl = function(e, t, n) {
					var i = this,
						o = {
							url: e
						};
					this._call("goToUrl", o, function(e, o) {
						var a = {
							goToUrl: e
						};
						i.localLog(a), e ? t() : n(o)
					})
				}, QMailBridge.prototype.localLog = function(e, t, n) {
					this._call("localLog", e)
				}, QMailBridge.prototype._sendMessage = function(e) {
					this._sendMessageQueue.push(e), this._iframe.src = this._QUEUE_HAS_MESSAGE_URL
				}, QMailBridge.prototype.handleMessage = function(e) {
					var t = e.callbackId;
					if (t && "string" == typeof t) {
						var n = e.successOrNot,
							i = e.params;
						"function" == typeof this._callback_map[t] && (this._callback_map[t](n, i), delete this._callback_map[t])
					}
				}, QMailBridge.prototype.fetchQueue = function() {
					var e = JSON.stringify(this._sendMessageQueue);
					return this._sendMessageQueue = [], this._setResultValue("fetchqueue", e), e
				}, QMailBridge.prototype._setResultValue = function(e, t) {
					void 0 === t && (t = ""), this._resultIframe.src = this._resultIframe._SET_RESULT_URL + e + "&" + this._base64Encode(this._utf8Encode(t))
				}, QMailBridge.prototype._utf8Encode = function(e) {
					e = e.replace(/\r\n/g, "\n");
					for (var t = "", n = 0; n < e.length; n++) {
						var i = e.charCodeAt(n);
						i < 128 ? t += String.fromCharCode(i) : i > 127 && i < 2048 ? (t += String.fromCharCode(i >> 6 | 192), t += String.fromCharCode(63 & i | 128)) : (t += String.fromCharCode(i >> 12 | 224), t += String.fromCharCode(i >> 6 & 63 | 128), t += String.fromCharCode(63 & i | 128))
					}
					return t
				}, QMailBridge.prototype._utf8Decode = function(e) {
					for (var t = "", n = 0, i = c1 = c2 = 0; n < e.length;)(i = e.charCodeAt(n)) < 128 ? (t += String.fromCharCode(i), n++) : i > 191 && i < 224 ? (c1 = e.charCodeAt(n + 1), t += String.fromCharCode((31 & i) << 6 | 63 & c1), n += 2) : (c1 = e.charCodeAt(n + 1), c2 = e.charCodeAt(n + 2), t += String.fromCharCode((15 & i) << 12 | (63 & c1) << 6 | 63 & c2), n += 3);
					return t
				}, QMailBridge.prototype._base64Encode = function(e) {
					var t, n, i, o, a, r, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
					if (void 0 === e) return e;
					for (i = e.length, n = 0, t = ""; n < i;) {
						if (o = 255 & e.charCodeAt(n++), n == i) {
							t += c.charAt(o >> 2), t += c.charAt((3 & o) << 4), t += "==";
							break
						}
						if (a = e.charCodeAt(n++), n == i) {
							t += c.charAt(o >> 2), t += c.charAt((3 & o) << 4 | (240 & a) >> 4), t += c.charAt((15 & a) << 2), t += "=";
							break
						}
						r = e.charCodeAt(n++), t += c.charAt(o >> 2), t += c.charAt((3 & o) << 4 | (240 & a) >> 4), t += c.charAt((15 & a) << 2 | (192 & r) >> 6), t += c.charAt(63 & r)
					}
					return t
				}, QMailBridge.prototype.moreOperation = function(e, t, n) {
					var i = this;
					this._call("moreOperation", e, function(e, o) {
						var a = {
							moreOperation: e
						};
						i.localLog(a), e ? t() : n(o)
					})
				}, QMailBridge.prototype._call = function(e, t, n) {
					if (e && "string" == typeof e) {
						"object" != typeof t && (t = {});
						var i = {
								func: e,
								params: t
							},
							o = (this._callback_count++).toString();
						"function" == typeof n && (this._callback_map[o] = n, i.callbackId = o), this._sendMessage(JSON.stringify(i))
					}
				};
				var e, t = [],
					n = function() {
						var n;
						if (window.__QMB_INFO__, !e)
							for (e = !0; n = t.pop();) n[1].call(n[0])
					};
				window.qmailBridge = new QMailBridge, window.__QMB_INFO__ ? n() : window.__QMB_INFO_CALL__ = function() {
					n()
				}
			}()
		},
		kGAF: function(e, t, n) {
			"use strict";

			function i() {}
			e.exports = function(e, t) {
				var n = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"),
					o = t && t.type || "GET",
					a = t && t.data || "",
					r = t && t.dataType,
					c = t && t.success || i,
					s = t && t.complete || i,
					d = t && t.error || i;
				n.onreadystatechange = function() {
					if (4 == n.readyState)
						if (200 == n.status) try {
							var e = n.responseText;
							try {
								"json" === r && (e = JSON.parse(e))
							} catch (e) {}
							c(e, n), s(e)
						} catch (e) {} else d(n.statusText || null, n), s()
				}, n.open(o, e, !0), n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), "GET" === o ? n.send() : n.send(a)
			}
		},
		"l/w7": function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		lVDm: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		m76B: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		mZih: function(e, t, n) {
			"use strict";
			var i = s(n("SsBM")),
				o = s(n("x5uC")),
				a = s(n("t6ZW")),
				r = s(n("/byC")),
				c = s(n("PGlE"));

			function s(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function d(e) {
				var t = window.location.search;
				if (t) {
					var n = t.slice(1).split("&"),
						i = !0,
						o = !1,
						a = void 0;
					try {
						for (var r, s = (0, c.default)(n); !(i = (r = s.next()).done); i = !0) {
							var d = r.value.split("=");
							if (d && 2 === d.length && d[0] === e) try {
								return decodeURI(d[1])
							} catch (e) {
								console.log(e)
							}
						}
					} catch (e) {
						o = !0, a = e
					} finally {
						try {
							!i && s.return && s.return()
						} finally {
							if (o) throw a
						}
					}
				}
				return ""
			}
			window.wholeContainer = document.getElementById("wholeContainer"), window.stateContainer = document.querySelector(".state-container"), window.cardContain = document.querySelector(".card-container"), window.rotateContainer = document.querySelector(".rotate-container"), window.envelope = document.querySelector(".envelope"), window.frontend = document.querySelector(".front-end"), window.backend = document.querySelector(".back-end"), window.frontendPic = document.querySelector(".frontend-picture"), window.backendPic = document.querySelector(".backend-picture"), window.envelopeWithHead = document.querySelector(".envelope-withhead"), window.envelopeWithoutHead = document.querySelector(".envelope-withouthead"), window.cardMessage = document.querySelector(".card-message"), window.backendSenderName = document.querySelector(".user-name"), window.receiverName = document.querySelector(".receiver-name"), window.backendSendDate = document.querySelector(".user-date"), window.positionPic = document.querySelector(".user-position-picture"), window.collectContainer = document.querySelector(".collect-container"), window.saveContainer = document.querySelector(".save-container"), window.positionContainer = document.querySelector(".user-position"), window.positionTitle = document.querySelector(".position-title"), window.hiddenPic = document.querySelector(".hiddle-picture");
			var l = !1;
			d("a") && (l = !0);
			var u = n("HgE7"),
				m = n("bGnv"),
				p = new(n("OiXj"))({
					url: "https://i.mail.qq.com/cgi-bin/postcard?fun=report",
					transformRequest: function(e) {
						return e.reduce(function(e, t) {
							return e + "&item=" + t
						}, "")
					}
				});

			function f(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
					n = t.platform,
					i = void 0 !== n && n,
					o = t.theme,
					a = void 0 !== o && o,
					r = t.isImmediately,
					c = void 0 !== r && r,
					s = "";
				i && (s = m.isWeiXin() ? "weixin" : m.isQQ() ? "qq" : m.isMailApp() ? "app" : "web");
				var d = "";
				a && (d = l ? "riddles" : "");
				var u = "Card_receive_";
				p(u += s ? d ? s + "_" + e + "_" + d : s + "_" + e : d ? e + "_" + d : "" + e, c)
			}

			function g(e) {
				documentFirstTouchY = e.changedTouches[0].clientY
			}

			function v(e) {
				ducumentThisTouchY = e.changedTouches[0].clientY, ducumentThisTouchY < documentFirstTouchY && (envelopHidden(), f("draw", {
					platform: !0
				}))
			}

			function h(e) {
				e.stopPropagation(), envelopeFirstTouchY = e.changedTouches[0].clientY
			}

			function w(e) {
				e.stopPropagation(), envelopeThisTouchY = e.changedTouches[0].clientY, envelopeThisTouchY > envelopeFirstTouchY && (envelopHidden(), f("draw", {
					platform: !0
				}))
			}

			function b() {
				f("send", {
					platform: !0,
					isImmediately: !0
				}), f("send", {
					theme: !0,
					isImmediately: !0
				}), u.isMailAppInstalled(function(e) {
					e ? u.goUrl("qqmail://greetingcard?action=main") : location.href = "http://app.mail.qq.com/cgi-bin/mailapp?latest=y&fr=tz&dlfrom=web&downloadclick=2018|newMailCard"
				})
			}
			f("expose", {
				platform: !0,
				theme: !0
			}), f("expose", {
				platform: !0
			}), f("expose", {
				theme: !0
			}), window.isOpenInMobile = function() {
				return /phone|pad|pod|iPhone|iPod|iPad|ios|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone/i.test(navigator.userAgent)
			}, window.eventHandlerCreator = function(e, t, n) {
				var i = null;
				return i = "addPicture" === t ? function(e) {
						(0, r.default)(e).map(function(t) {
							window[t] && (window[t].src = e[t], n && n(t))
						})
					} : function(e) {
						(0, r.default)(e).map(function(t) {
							window[t] && (window[t].innerText = e[t], n && n(t))
						})
					},
					function(n) {
						var o = {};
						"addPicture" === t ? o[e] = window[e].src : "addMessage" === t ? (-1 === n.target.className.indexOf("backend-footer") && -1 === n.target.className.indexOf("user-name") && -1 === n.target.className.indexOf("user-date") || (o.area = "name"), e.map(function(e) {
							o[e] = window[e].innerText
						})) : e.map(function(e) {
							o[e] = window[e].innerText
						}), console.log(o), qmailBridge[t](o, i, function() {
							throw new Error("There is something wrong!")
						})
					}
			}, window.removeBeforeUserInputStyle = function(e) {
				window[e].classList.remove("before-user-input")
			}, window.DIYTapEvent = function(e, t) {
				var n = null,
					i = function() {
						n = setTimeout(function() {
							clearTimeout(n), n = null
						}, 200)
					},
					o = function(e) {
						n && t(e), clearTimeout(n), n = null
					};
				return e.addEventListener("touchstart", i), e.addEventListener("touchend", o), (new a.default).set(t, {
					touchstart: i,
					touchend: o
				})
			}, window.DIYLongTapEvent = function(e, t, n) {
				n = n || 500;
				var i = null;
				e.addEventListener("touchstart", function() {
					i = setTimeout(function(e) {
						t(e)
					}, n)
				}), e.addEventListener("touchmove", function() {
					clearTimeout(i), i = null
				}), e.addEventListener("touchend", function() {
					clearTimeout(i), i = null
				})
			}, window.documentFirstTouchY = 0, window.ducumentThisTouchY = 0, window.envelopeFirstTouchY = 0, window.envelopeThisTouchY = 0, window.hasRotateCard = 0, window.envelopHidden = function() {
				cardContain.classList.add("tanslateUp"), cardContain.classList.add("card-center"), envelope.classList.add("hidden"), isOpenInMobile() ? (document.body.removeEventListener("touchstart", g), document.body.removeEventListener("touchend", v)) : document.body.removeEventListener("click", envelopHidden), setTimeout(function() {
					envelope.classList.add("display-none"), document.querySelector(".card-background").classList.add("display-none")
				}, 500), setTimeout(function() {
					hasRotateCard || rotateContainer.classList.toggle("overturn")
				}, 1500), isOpenInMobile() ? rotateContainer.addEventListener("touchend", rotateHandler) : rotateContainer.addEventListener("click", rotateHandler)
			}, window.rotateHandler = function(e) {
				hasRotateCard || (hasRotateCard = 1), rotateContainer.classList.toggle("overturn"), f("turn", {
					platform: !0
				})
			}, window.animationActivation = function() {
				isOpenInMobile() ? (document.body.addEventListener("touchstart", g), document.body.addEventListener("touchend", v), envelope.addEventListener("touchstart", h), envelope.addEventListener("touchend", w)) : document.body.addEventListener("click", envelopHidden)
			}, window.webviewPreventDefault = function(e) {
				e.preventDefault()
			}, window.stopWebviewScroll = function() {
				document.body.addEventListener("touchmove", webviewPreventDefault, {
					passive: !1
				}), envelope.addEventListener("touchmove", webviewPreventDefault, {
					passive: !1
				})
			}, window.removeStopWebviewScroll = function() {
				document.body.removeEventListener("touchmove", webviewPreventDefault), envelope.removeEventListener("touchmove", webviewPreventDefault)
			}, window.removeAnimationEvents = function() {
				document.body.removeEventListener("touchstart", g), document.body.removeEventListener("touchend", v), envelope.removeEventListener("touchstart", h), envelope.removeEventListener("touchend", w)
			}, window.jump2Frontend = function() {
				backend.classList.add("display-none")
			}, window.jump2Backend = function() {
				cardContain.classList.remove("display-none"), envelope.classList.add("display-none"), backend.classList.remove("display-none")
			}, window.jump2SenderPreview = function() {
				saveContainer.parentNode.removeChild(saveContainer), collectContainer.parentNode.removeChild(collectContainer), envelopHidden()
			}, window.editorEventsInit = function() {
				var e = eventHandlerCreator(["cardMessage", "backendSenderName"], "addMessage", removeBeforeUserInputStyle),
					t = eventHandlerCreator(["receiverName"], "addMessage", removeBeforeUserInputStyle);
				DIYTapEvent(backendPic.parentNode, function(e) {
					e.stopPropagation();
					var t = {};
					t.backendPic = backendPic.src;
					qmailBridge.addPicture(t, function(e) {
						(0, r.default)(e).map(function(t) {
							window[t].src = e[t]
						}), backendPic.parentNode.classList.remove("mask-actived")
					}, function() {
						throw new Error("There is something wrong!")
					})
				}), DIYTapEvent(backend, e), DIYTapEvent(receiverName, t), DIYTapEvent(positionContainer, function(e) {
					e.stopPropagation(), qmailBridge.addPosition(null, function(e) {
						updatePosition(e.positionTitle, e.positionPic)
					})
				})
			}, window.initBackendSenderName = function(e) {
				backendSenderName.innerText = e
			}, window.jump2Edit = function() {
				stateContainer.className = "state-container editor", envelope.classList.add("display-none"), backendPic.parentNode.classList.add("mask-actived"), cardMessage.classList.add("before-user-input"), saveContainer.parentNode.removeChild(saveContainer), collectContainer.parentNode.removeChild(collectContainer), removeAnimationEvents(), editorEventsInit(), removeStopWebviewScroll()
			}, window.jump2Send = function() {
				removeAnimationEvents(), document.querySelector(".card-background").classList.add("display-none"), document.body.addEventListener("touchend", function(e) {
					qmailBridge.jump2SenderPreview(null, function() {
						console.log("Open Sender Preview")
					}, function(e) {
						e && console.log(e)
					})
				}), stateContainer.className = "state-container send"
			}, window.toggleFrontenfPicDisplay = function() {
				frontendPic.classList.toggle("display-none")
			}, window.toggleBackendPicDisplay = function() {
				backendPic.parentNode.classList.toggle("display-none")
			}, window.toggleBackendDateDisplay = function() {
				updateSendDate(), backendSendDate.classList.toggle("display-none"), backendSenderName.classList.toggle("margin-top-24"), backendSenderName.classList.toggle("user-name-Small")
			}, window.toggleBackendPostionDisplay = function() {
				positionContainer.classList.toggle("display-none")
			}, window.updatePosition = function(e, t) {
				positionContainer.classList.remove("display-none"), positionTitle.innerText = e, t ? (positionPic.src = t, positionPic.classList.remove("display-none")) : positionPic.classList.add("display-none")
			}, window.updateSendDate = function(e) {
				if (!e) {
					var t = new Date;
					e = t.getFullYear() + "." + (t.getMonth() + 1) + "." + t.getDate()
				}
				backendSendDate.innerText = e
			}, window.clearAllBeforeUserInput = function() {
				(0, o.default)(document.querySelectorAll(".before-user-input")).map(function(e) {
					e.classList.remove("before-user-input")
				})
			}, window.hideAllEmptyImgContainer = function() {
				(0, o.default)(document.querySelectorAll("img")).map(function(e) {
					e.getAttribute("src") || e.classList.add("display-none")
				})
			}, window.getCardId = function(e) {
				var t = location.href,
					n = new RegExp("(?:\\?|&)" + e + "=(.*?)(?:&|$)");
				return n.exec(t) && n.exec(t)[1]
			}, window.toggleIconHeart = function() {
				collectContainer.classList.remove("icon-heart-empty"), collectContainer.classList.add("icon-heart-filled")
			}, window.isMobile = function() {
				var e = navigator.userAgent,
					t = e.indexOf("Android") > -1 || e.indexOf("Adr") > -1,
					n = !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
				return t || n
			}, window.initPlatform = function() {
				var e = d("a");
				if (e) {
					var t = cardMessage.innerHTML.replace(e, '<span class="card-message-highlight">' + e + "</span>");
					cardMessage.innerHTML = t
				}
				var n = getCardId("id");
				!n && isMobile() && qmailBridge.getGreetingCardId(function(e) {
					n = e
				}, function(e) {
					console.log(e)
				});
				var i = document.querySelector(".hidden-picture-mask");
				DIYTapEvent(i, function(e) {
					e.stopPropagation(), i.classList.remove("actived")
				}), document.querySelector(".save-btn").addEventListener("touchend", function(e) {
					i.classList.add("actived"), f("picture", {
						platform: !0
					}), f("picture", {
						theme: !0
					})
				}), hiddenPic.addEventListener("touchstart", function(e) {
					e.stopPropagation()
				}), hiddenPic.addEventListener("touchend", function(e) {
					e.stopPropagation()
				}), DIYLongTapEvent(hiddenPic, function() {
					f("savepicture", {
						platform: !0
					}), f("savepicture", {
						theme: !0
					})
				}), document.querySelector(".send-btn").addEventListener("touchend", b), document.querySelector(".hidden-picture-saveToBook").addEventListener("touchend", function(e) {
					e.stopPropagation(),
						function(e) {
							f("save", {
								platform: !0,
								isImmediately: !0
							}), f("save", {
								theme: !0,
								isImmediately: !0
							});
							var t = "qqmail://greetingcard?action=collection&cardid=" + e;
							u.isMailAppInstalled(function(e) {
								e ? u.goUrl(t) : location.href = "http://app.mail.qq.com/cgi-bin/mailapp?latest=y&fr=tz&dlfrom=web&downloadclick=2018|newMailCard"
							})
						}(n)
				}), isMobile() && qmailBridge.getDeviceId(function(e) {
					if (e) {
						var t = function(e) {
								qmailBridge.goToUrl("qqmail://greetingcard?action=collectionlist")
							},
							i = function e(i) {
								qmailBridge.keepGreetingCard(n, function(n) {
									f("save", {
										platform: !0,
										isImmediately: !0
									}), toggleIconHeart(), collectContainer.removeEventListener("touchstart", collectContainer.eventHandler2bindEvent.get(e).touchstart), collectContainer.removeEventListener("touchend", collectContainer.eventHandler2bindEvent.get(e).touchend), DIYTapEvent(collectContainer, t)
								}, function(e) {
									console.log(e)
								})
							};
						collectContainer.classList.remove("display-none"), saveContainer.classList.add("display-none"), qmailBridge.hasGreetingCard(n, function(e) {
							e ? (toggleIconHeart(), DIYTapEvent(collectContainer, t)) : collectContainer.eventHandler2bindEvent = DIYTapEvent(collectContainer, i)
						}, function(e) {
							console.log(e)
						})
					} else stopWebviewScroll()
				}, function(e) {
					console.log(e)
				}), backendPic && "" === backendPic.getAttribute("src") && document.querySelector(".backend-picture-container").classList.add("display-none"), backendSendDate && "" === backendSendDate.innerHTML && (backendSendDate.classList.toggle("display-none"), backendSenderName.classList.toggle("margin-top-24"), backendSenderName.classList.toggle("user-name-Small"))
			}, window.getAllVariableData = function() {
				var e = {
					frontendPic: frontendPic.src,
					backendPic: backendPic.src,
					cardMessage: cardMessage.innerText,
					backendSenderName: backendSenderName.innerText,
					backendSendDate: backendSendDate.innerText,
					positionTitle: positionTitle.innerText,
					positionPic: positionPic.src,
					hiddlePic: hiddenPic.src,
					theme: wholeContainer.getAttribute("data-theme"),
					envelopeNicknameColor: wholeContainer.getAttribute("data-envelopeNicknameColor"),
					envelopeSendFieldColor: wholeContainer.getAttribute("data-envelopeSendFieldColor"),
					envelopePicWithHead: envelopeWithHead ? envelopeWithHead.src : "",
					envelopePicWithoutHead: envelopeWithoutHead ? envelopeWithoutHead.src : ""
				};
				return qmailBridge.getAllVariableData(e, null, function(e) {
					console.log(e)
				}), (0, i.default)(e)
			}, window.setAllVariableData = function(e) {
				"string" == typeof e && (e = JSON.parse(e)), console.log((0, i.default)(e, null, 4)), e.backendPic ? (backendPic.parentNode.classList.remove("display-none"), backendPic.src = e.backendPic) : backendPic.parentNode.classList.add("display-none"), e.backendSendDate ? (updateSendDate(), backendSendDate.classList.remove("display-none"), backendSenderName.classList.remove("margin-top-24"), backendSenderName.classList.remove("user-name-Small")) : (backendSendDate.classList.add("display-none"), backendSenderName.classList.add("margin-top-24"), backendSenderName.classList.add("user-name-Small")), backendSenderName.innerText = e.backendSenderName, cardMessage.innerText = e.cardMessage, e.positionPic || e.positionTitle ? (positionContainer.classList.remove("display-none"), e.positionPic ? (positionPic.classList.remove("display-none"), positionPic.src = e.positionPic) : positionPic.classList.add("display-none"), e.positionTitle && (positionTitle.innerText = e.positionTitle)) : positionContainer.classList.add("display-none")
			}, positionTitle.innerText && positionContainer.classList.remove("display-none"), isOpenInMobile() || saveContainer.classList.add("display-none"), clearAllBeforeUserInput(), hideAllEmptyImgContainer(), animationActivation(), initPlatform()
		},
		mady: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		nmiv: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		"oT4+": function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		pB9v: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		pxvS: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		q7V2: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		rDDS: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		s11D: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		sbyA: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		tzzx: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		uohS: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		v9Gg: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		vlCi: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		"w+wV": function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		w3XZ: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		y2t5: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		},
		yBlB: function(e, t, n) {
			"use strict";
			n("eUc9"), n("j1Wg"), n("mZih")
		}
	}
]);