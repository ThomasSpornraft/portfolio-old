(function(e){function t(t){for(var s,A,r=t[0],c=t[1],o=t[2],d=0,u=[];d<r.length;d++)A=r[d],Object.prototype.hasOwnProperty.call(i,A)&&i[A]&&u.push(i[A][0]),i[A]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);l&&l(t);while(u.length)u.shift()();return a.push.apply(a,o||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],s=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(s=!1)}s&&(a.splice(t--,1),e=A(A.s=n[0]))}return e}var s={},i={app:0},a=[];function A(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,A),n.l=!0,n.exports}A.m=e,A.c=s,A.d=function(e,t,n){A.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},A.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},A.t=function(e,t){if(1&t&&(e=A(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(A.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)A.d(n,s,function(t){return e[t]}.bind(null,s));return n},A.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return A.d(t,"a",t),t},A.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},A.p="/portfolio/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var o=0;o<r.length;o++)t(r[o]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0418":function(e,t,n){"use strict";n.r(t);var s=n("7a23"),i=n("1ab5"),a=n.n(i),A=function(e){return Object(s["t"])("data-v-8596f3d4"),e=e(),Object(s["r"])(),e},r={class:"header"},c=A((function(){return Object(s["e"])("div",{class:"header__logo"},[Object(s["e"])("div",{class:"header__logo-img"},[Object(s["e"])("img",{src:a.a,alt:""})]),Object(s["e"])("div",{class:"header__logo-name"},[Object(s["e"])("h2",null,"Thomas")])],-1)})),o=A((function(){return Object(s["e"])("div",{class:"header__navbar-mobile"},[Object(s["e"])("i",{class:"fas fa-bars"})],-1)})),l={class:"header__navbar-desktop"},d=Object(s["g"])("Home"),u=Object(s["g"])("Ausbildung"),b=Object(s["g"])("Erfahrung"),p=Object(s["g"])("Skills"),g=Object(s["g"])("Sonstiges"),f=A((function(){return Object(s["e"])("div",{class:"header__settings"},[Object(s["e"])("div",{class:"header__settings-design"},[Object(s["e"])("i",{class:"fas fa-sun"})]),Object(s["e"])("div",{class:"header__settings-language"},[Object(s["e"])("p",null,"Englisch")])],-1)}));function m(e,t,n,i,a,A){var m=Object(s["x"])("router-link");return Object(s["q"])(),Object(s["d"])("div",r,[c,o,Object(s["e"])("div",l,[Object(s["h"])(m,{to:"/"},{default:Object(s["C"])((function(){return[d]})),_:1}),Object(s["h"])(m,{to:"/ausbildung"},{default:Object(s["C"])((function(){return[u]})),_:1}),Object(s["h"])(m,{to:"/erfahrung"},{default:Object(s["C"])((function(){return[b]})),_:1}),Object(s["h"])(m,{to:"/skills"},{default:Object(s["C"])((function(){return[p]})),_:1}),Object(s["h"])(m,{to:"/sonstiges"},{default:Object(s["C"])((function(){return[g]})),_:1})]),f])}var h={},v=(n("edaa"),n("6b0d")),j=n.n(v);const O=j()(h,[["render",m],["__scopeId","data-v-8596f3d4"]]);t["default"]=O},"055b":function(e,t,n){e.exports=n.p+"img/python.7c4cfa35.svg"},"0ac6":function(e,t,n){"use strict";n.r(t);n("a4d3"),n("e01a");var s=n("7a23"),i=n("4b9a"),a=n.n(i),A={class:"skillcard__head"},r={class:"scillcard__head-logo"},c=["src","alt"],o={class:"scillcard__head-title"},l={class:"skillcard__body"},d={class:"skillcard__body-item"},u={class:"skillcard__body-item"},b={open:""},p=Object(s["e"])("summary",null,"Selbstbewertung",-1),g={class:"score__container"},f=["value"],m=Object(s["e"])("div",{class:"skillcard__body-item"},[Object(s["e"])("details",null,[Object(s["e"])("summary",null,"Kurse"),Object(s["e"])("div",{class:"kurs"},[Object(s["e"])("p",null,"Lorem ipsum dolor, sit amet"),Object(s["e"])("img",{class:"udemy",src:a.a,alt:""}),Object(s["e"])("p",{class:"kurs-prozent"},"100%"),Object(s["e"])("i",{class:"fas fa-check-circle green"})]),Object(s["e"])("div",{class:"kurs"},[Object(s["e"])("p",null,"Lorem ipsum dolor"),Object(s["e"])("img",{class:"udemy",src:a.a,alt:""}),Object(s["e"])("p",{class:"kurs-prozent gelb"},"75%"),Object(s["e"])("i",{class:"fas fa-minus-circle gelb"})]),Object(s["e"])("div",{class:"kurs"},[Object(s["e"])("p",null,"Lorem ipsum dolor, sit amet"),Object(s["e"])("img",{class:"udemy",src:a.a,alt:""}),Object(s["e"])("p",{class:"kurs-prozent rot"},"33%"),Object(s["e"])("i",{class:"fas fa-times-circle rot"})])])],-1),h=Object(s["e"])("div",{class:"skillcard__body-item"},[Object(s["e"])("details",null,[Object(s["e"])("summary",null,"Projekte"),Object(s["e"])("div",{class:"projekt"},[Object(s["e"])("p",null,"noch keins")]),Object(s["e"])("div",{class:"projekt"},[Object(s["e"])("p",null,"sehr kleines Projekt")]),Object(s["e"])("div",{class:"projekt"},[Object(s["e"])("p",null,"mittleres Projekt")])])],-1);function v(e,t,i,a,v,j){return Object(s["q"])(!0),Object(s["d"])(s["a"],null,Object(s["w"])(v.cards,(function(e){return Object(s["q"])(),Object(s["d"])("div",{key:e.id,class:"skillcard"},[Object(s["e"])("div",A,[Object(s["e"])("div",r,[Object(s["e"])("img",{src:n("a8ec")("./".concat(e.img_url)),alt:e.img_alt},null,8,c)]),Object(s["e"])("div",o,[Object(s["e"])("h2",null,Object(s["z"])(e.title),1)])]),Object(s["e"])("div",l,[Object(s["e"])("div",d,[Object(s["e"])("details",null,[Object(s["e"])("summary",null,"über "+Object(s["z"])(e.description),1),Object(s["g"])(" "+Object(s["z"])(e.descriptionDetails),1)])]),Object(s["e"])("div",u,[Object(s["e"])("details",b,[p,(Object(s["q"])(!0),Object(s["d"])(s["a"],null,Object(s["w"])(e.scores,(function(e,t){return Object(s["q"])(),Object(s["d"])("div",{key:e,class:"score"},[Object(s["e"])("div",g,[Object(s["e"])("p",null,Object(s["z"])(t),1),Object(s["e"])("progress",{value:e,max:"100"},null,8,f)])])})),128))])]),m,h])])})),128)}var j={data:function(){return{cards:[{id:1,title:"HTML",scores:{Total:85,Forms:70,Buttons:60},img_url:"assets/img/html.svg",img_alt:"HTML logo",description:"HTML",descriptionDetails:"Die Hypertext Markup Language (HTML, englisch für Hypertext-Auszeichnungssprache) ist eine textbasierte Auszeichnungssprache zur Strukturierung elektronischer Dokumente wie Texte mit Hyperlinks, Bildern und anderen Inhalten. HTML-Dokumente sind die Grundlage des World Wide Web und werden von Webbrowsern dargestellt."},{id:2,title:"CSS",scores:{Total:85,Selektoren:70,"Box-Modell":90,Flexbox:80,Grid:60,Animations:50,MediaQueries:50},img_url:"assets/img/css3.svg",img_alt:"CSS logo",description:"CSS",descriptionDetails:"Cascading Style Sheets (englische Aussprache [kæsˌkeɪdɪŋˈstaɪlʃiːts]; für gestufte Gestaltungsbögen; kurz: CSS) ist eine Stylesheet-Sprache für elektronische Dokumente und zusammen mit HTML und JavaScript eine der Kernsprachen des World Wide Webs.[1][2] Sie ist ein sogenannter „living standard“ (lebendiger Standard) und wird vom World Wide Web Consortium (W3C) beständig weiterentwickelt. Mit CSS werden Gestaltungsanweisungen erstellt, die vor allem zusammen mit den Auszeichnungssprachen HTML und XML (zum Beispiel bei SVG) eingesetzt werden"},{id:3,title:"JavaScript",scores:{Total:70,VUE:70,React:45,Angular:30,fetch:50,axios:30,nodeJs:15,expressJS:25},img_url:"assets/img/javascript.svg",img_alt:"JavaScript Logo",description:"JavaScript",descriptionDetails:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus alias aliquid consequuntur delectus eius accusamus quasi a omnis velit, repellendus mollitia sit, explicabo voluptate. Molestias molestiae animi eos harum assumenda, nihil cumque consequuntur impedit dolorum illum, blanditiis, magni consectetur! Corporis quam mollitia recusandae, pariatur asperiores exercitationem modi doloribus nulla"},{id:4,title:"Excel",scores:{Total:85,Tabellen:80,Formeln:80,Funktionen:70,"Pivot Tabellen":60,"Power Query":70,VBA:35,Diagramme:45},img_url:"assets/img/excel.svg",img_alt:"Excel Logo",description:"Microsoft Excel",descriptionDetails:"Microsoft Excel ist das am weitesten verbreitete Tabellenkalkulationsprogramm. Excel gehört zum Microsoft-Office-365-Abonnement und ist in der Desktop-Version für Windows und macOS, sowie in der mobilen Version als App für Android und iOS verfügbar."},{id:5,title:"Power BI",scores:{Total:75,Imports:70,Datenmodell:50,Funktionen:70,Visuals:60,"Power Query":70,DAX:45,"M-Language":25},img_url:"assets/img/powerbi.svg",img_alt:"Power BI Logo",description:"Power BI",descriptionDetails:"Power BI ist ein Geschäftsanalysedienst von Microsoft. Ziel ist es, interaktive Visualisierungen und Business-Intelligence-Funktionen mit einer Oberfläche bereitzustellen, die so einfach ist, dass Endbenutzer ihre eigenen Berichte und Dashboards erstellen können."},{id:6,title:"Python",scores:{Total:65,Grundlagen:70,Datenstrukturen:70,pandas:80,Charts:40,GUI:20},img_url:"assets/img/python.svg",img_alt:"python Logo",description:"python",descriptionDetails:"Python ist eine universelle, üblicherweise interpretierte, höhere Programmiersprache. Sie hat den Anspruch, einen gut lesbaren, knappen Programmierstil zu fördern. So werden beispielsweise Blöcke nicht durch geschweifte Klammern, sondern durch Einrückungen strukturiert."},{id:7,title:"PostgreSQl",scores:{Total:65},img_url:"assets/img/Postgresql.svg",img_alt:"PostgreSQL Logo",description:"PostgreSQL",descriptionDetails:""}]}}},O=(n("ca14"),n("6b0d")),k=n.n(O);const w=k()(j,[["render",v]]);t["default"]=w},"1ab5":function(e,t,n){e.exports=n.p+"img/profil.109ac84a.png"},"1aee":function(e,t,n){},"231f":function(e,t,n){e.exports=n.p+"img/flask.d98463ab.svg"},"285e":function(e,t,n){e.exports=n.p+"img/aws2.da9b363e.svg"},"2b1d":function(e,t,n){"use strict";n.r(t);var s=n("7a23"),i=function(e){return Object(s["t"])("data-v-1278ccba"),e=e(),Object(s["r"])(),e},a={class:"ausbildung"},A=i((function(){return Object(s["e"])("p",{class:"ausbildung__text"},"verdammt lang her 😂🦕",-1)})),r={class:"ausbildung__content"},c=i((function(){return Object(s["e"])("div",{class:"ausbildung__timeline"},null,-1)})),o={class:"ausbildung__card"};function l(e,t,n,i,l,d){var u=Object(s["x"])("AusbildungCard");return Object(s["q"])(),Object(s["d"])("div",a,[A,Object(s["e"])("div",r,[c,Object(s["e"])("div",o,[Object(s["h"])(u)])])])}var d=n("e28c"),u={components:{AusbildungCard:d["default"]}},b=(n("2dd4"),n("6b0d")),p=n.n(b);const g=p()(u,[["render",l],["__scopeId","data-v-1278ccba"]]);t["default"]=g},"2d75":function(e,t,n){e.exports=n.p+"img/profil.6b59b523.png"},"2dd4":function(e,t,n){"use strict";n("ce8e")},3122:function(e,t,n){"use strict";n.r(t);var s=n("7a23"),i={id:"impressum",class:"main-item impressum"},a=Object(s["f"])('<div class="impressum-content" data-v-4373b95c><h1 data-v-4373b95c>Impressum</h1><br data-v-4373b95c><h2 data-v-4373b95c>Angaben gemäß § 5 TMG</h2><p data-v-4373b95c> Thomas Spornraft <br data-v-4373b95c> Hopfenweg, 12 <br data-v-4373b95c> 85276 Pfaffenhofen an der Ilm <br data-v-4373b95c></p><br data-v-4373b95c><h2 data-v-4373b95c>Kontakt</h2><p data-v-4373b95c> Telefon: 0151-70809098 <br data-v-4373b95c> E-Mail: Thomas.Spornraft@web.de </p><br data-v-4373b95c><h3 data-v-4373b95c>Haftung für Inhalte</h3><p data-v-4373b95c> Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. </p><br data-v-4373b95c><p data-v-4373b95c> Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen. </p><br data-v-4373b95c><h3 data-v-4373b95c>Haftung für Links</h3><p data-v-4373b95c> Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. </p><p data-v-4373b95c> Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen. </p><br data-v-4373b95c><h3 data-v-4373b95c>Urheberrecht</h3><p data-v-4373b95c> Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. </p><p data-v-4373b95c> Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen. </p><br data-v-4373b95c><p data-v-4373b95c> Quelle: <a href="https://www.e-recht24.de" data-v-4373b95c>https://www.e-recht24.de</a></p><i class="far fa-times-circle" data-v-4373b95c></i></div>',1),A=[a];function r(e,t){return Object(s["q"])(),Object(s["d"])("div",i,A)}n("6104");var c=n("6b0d"),o=n.n(c);const l={},d=o()(l,[["render",r],["__scopeId","data-v-4373b95c"]]);t["default"]=d},"36f8":function(e,t,n){},"390a":function(e,t,n){"use strict";n.r(t);var s=n("7a23"),i={class:"sonstiges"},a=Object(s["f"])('<div class="sonstiges__content"><div class="sonstiges__content-games"><div><h2>DOOM</h2><h2>Assassin’s Creed</h2><h2>GTA V</h2><h2>World of Warcraft</h2><h2>No Mans Sky</h2></div></div><div class="sonstiges__content-training"><div><h2>Benchpress</h2><h2>Squat</h2><h2>Row</h2><h2>Deadlift</h2><h2>Press</h2></div></div><div class="sonstiges__content-books"><div><h2>DOOM</h2><h2>Assassin’s Creed</h2><h2>GTA V</h2><h2>World of Warcraft</h2><h2>No Mans Sky</h2></div></div></div>',1),A=[a];function r(e,t){return Object(s["q"])(),Object(s["d"])("div",i,A)}n("ed8d");var c=n("6b0d"),o=n.n(c);const l={},d=o()(l,[["render",r]]);t["default"]=d},"3c5a":function(e,t,n){e.exports=n.p+"img/javascript.2d2e31cc.svg"},"3dfd":function(e,t,n){"use strict";n.r(t);var s=n("7a23");function i(e,t,n,i,a,A){var r=Object(s["x"])("Header"),c=Object(s["x"])("router-view"),o=Object(s["x"])("vue-particles");return Object(s["q"])(),Object(s["d"])(s["a"],null,[Object(s["h"])(r),Object(s["h"])(c),Object(s["h"])(o,{class:"particles-class",color:"#dedede",particleOpacity:.7,particlesNumber:180,shapeType:"circle",particleSize:4,linesColor:"#dedede",linesWidth:1,lineLinked:!0,lineOpacity:.4,linesDistance:150,moveSpeed:3,hoverEffect:!0,hoverMode:"grab",clickEffect:!0,clickMode:"push"},null,8,["particleOpacity","lineOpacity"])],64)}var a=n("0418"),A={components:{Header:a["default"]}},r=(n("3e7c"),n("6b0d")),c=n.n(r);const o=c()(A,[["render",i]]);t["default"]=o},"3e7c":function(e,t,n){"use strict";n("74ad")},"44f7":function(e,t,n){e.exports=n.p+"img/lesen1.10afbb3a.jpg"},4739:function(e,t,n){},"477e":function(e,t,n){e.exports=n.p+"img/aktien.97cc8330.jpg"},4969:function(e,t,n){e.exports=n.p+"img/Postgresql.45e46bc0.svg"},"4b7a":function(e,t,n){"use strict";n("1aee")},"4b9a":function(e,t){e.exports="data:image/png;base64,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"},"567b":function(e,t,n){e.exports=n.p+"img/pc.3592a833.jpg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("7a23"),i=n("3dfd"),a=n("a18c"),A=n("98c9");Object(s["c"])(i["default"]).use(a["default"]).use(A["a"]).mount("#app")},"5e91":function(e,t,n){"use strict";n("9094")},"5edd":function(e,t,n){e.exports=n.p+"img/wow.83d71c79.jpg"},"5f65":function(e,t,n){e.exports=n.p+"img/BMW.fe694499.png"},6104:function(e,t,n){"use strict";n("9454")},"674f":function(e,t,n){"use strict";n("4739")},"6f1a":function(e,t,n){e.exports=n.p+"img/BMW.462b1e23.svg"},"70ba":function(e,t,n){},"70d3":function(e,t,n){e.exports=n.p+"img/python.dc199ecc.png"},"74ad":function(e,t,n){},"769f":function(e,t,n){"use strict";n("f755")},"7b02":function(e,t,n){e.exports=n.p+"img/css3.7415a70a.svg"},"7e4d":function(e,t,n){e.exports=n.p+"img/BMW_logo_(gray).9efb2760.svg"},"882e":function(e,t,n){e.exports=n.p+"img/javascript2.181ba958.svg"},"8a7a":function(e,t,n){e.exports=n.p+"img/cyberpunk.c3c73eb6.jpg"},"8ab0":function(e,t,n){e.exports=n.p+"img/tux.a0e6e27f.png"},9094:function(e,t,n){},"92c1":function(e,t,n){},9454:function(e,t,n){},"96c5":function(e,t,n){e.exports=n.p+"img/powerbi.04c66e3d.svg"},"977e":function(e,t,n){e.exports=n.p+"img/ubuntu.f0b8b7ba.png"},9981:function(e,t,n){e.exports=n.p+"img/lesen2.1e478837.jpg"},"99e7":function(e,t,n){"use strict";n.r(t);var s=n("7a23"),i=function(e){return Object(s["t"])("data-v-907af958"),e=e(),Object(s["r"])(),e},a=i((function(){return Object(s["e"])("div",{class:"content__img"},null,-1)})),A={class:"bullet"},r=["src"],c={class:"date"},o={class:"description"};function l(e,t,i,l,d,u){return Object(s["q"])(!0),Object(s["d"])(s["a"],null,Object(s["w"])(d.items,(function(e){return Object(s["q"])(),Object(s["d"])("div",{class:"content",key:e.id},[a,Object(s["e"])("div",A,[Object(s["e"])("img",{src:n("a8ec")("./".concat(e.image))},null,8,r)]),Object(s["e"])("div",c,[Object(s["e"])("p",null,Object(s["z"])(e.start),1),Object(s["e"])("p",null,Object(s["z"])(e.end),1)]),Object(s["e"])("div",o,[Object(s["e"])("h2",null,Object(s["z"])(e.title),1),Object(s["e"])("h4",null,Object(s["z"])(e.subtitle),1),Object(s["e"])("p",null,Object(s["z"])(e.Beschreibung),1)])])})),128)}var d={data:function(){return{items:[{id:1,start:"2001",end:"2005",title:"BMW Motorenbau",subtitle:"Prototypen, Sondermotoren und Formel 1",Beschreibung:"Manuelle bearbeitung von Motor-Kernbauteilen (Kurbelgehäuse, Zylinderkopf und Kurbelwelle) für BMW Formel 1 Motoren und Prototypen für Serienmotoren",image:"assets/img/BMW.svg"},{id:2,start:"2005",end:"2008",title:"BMW Motorenbau",subtitle:"Prototypen, Sondermotoren und Formel 1",Beschreibung:"",image:"assets/img/BMW.svg"},{id:3,start:"2008",end:"2009",title:"BMW Motorenbau",subtitle:"Prototypen, Sondermotoren und Formel 1",image:"assets/img/BMW.svg"},{id:4,start:"2009",end:"2011",title:"BMW Motorenbau",subtitle:"Technologieentwicklung Antrieb",Beschreibung:"",image:"assets/img/BMW.svg"},{id:5,start:"2011",end:"-",title:"BMW Einkauf",subtitle:"Getriebe und Schaltungen",Beschreibung:"",image:"assets/img/BMW.svg"}]}}},u=(n("db5e"),n("6b0d")),b=n.n(u);const p=b()(d,[["render",l],["__scopeId","data-v-907af958"]]);t["default"]=p},"9b1b":function(e){e.exports=JSON.parse('[{"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#fc0e0e"},"shape":{"type":"circle","stroke":{"width":1,"color":"#ff0000"},"polygon":{"nb_sides":6},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":4,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ff3f16","opacity":1,"width":2.4051180912982844},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}]')},"9bb5":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAHCCAQAAAC9amVDAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfkBgYOGSKv1Jy+AAAC0UlEQVR42u3BMQEAAADCoPVPbQsvoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3gb+2AAB3jRGgAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wNi0wNlQxNDoyNTozNCswMDowMFvi3pAAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDYtMDZUMTQ6MjU6MzQrMDA6MDAqv2YsAAAAAElFTkSuQmCC"},"9de5":function(e,t,n){e.exports=n.p+"img/gewichte.74f2186e.jpg"},"9f43":function(e,t,n){e.exports=n.p+"img/html.525f317f.svg"},a18c:function(e,t,n){"use strict";n.r(t);var s=n("6c02"),i=n("bb51"),a=n("2b1d"),A=n("eb50"),r=n("ad83"),c=n("390a"),o=[{path:"/",name:"Home",component:i["default"]},{path:"/ausbildung",name:"Ausbildung",component:a["default"]},{path:"/erfahrung",name:"Erfahrung",component:A["default"]},{path:"/skills",name:"Skills",component:r["default"]},{path:"/sonstiges",name:"Sonstiges",component:c["default"]}],l=Object(s["a"])({history:Object(s["b"])(),routes:o});t["default"]=l},a3d4:function(e,t,n){},a8ec:function(e,t,n){var s={"./App":"3dfd","./App.vue":"3dfd","./assets/img/BMW.png":"5f65","./assets/img/BMW.svg":"6f1a","./assets/img/BMW_logo_(gray).svg":"7e4d","./assets/img/MySQL.svg":"fff7","./assets/img/Postgresql.svg":"4969","./assets/img/Power_bi.svg":"e69d","./assets/img/aktien.jpg":"477e","./assets/img/assassins_creed.jpg":"d69e","./assets/img/aws.svg":"cf15","./assets/img/aws2.svg":"285e","./assets/img/boerse.jpg":"bb7d","./assets/img/css3.svg":"7b02","./assets/img/cyberp.jpg":"b275","./assets/img/cyberpunk.jpg":"8a7a","./assets/img/dummy.png":"9bb5","./assets/img/excel.svg":"e6fb","./assets/img/flask.svg":"231f","./assets/img/gewichte.jpg":"9de5","./assets/img/html.svg":"9f43","./assets/img/javascript.svg":"3c5a","./assets/img/javascript2.svg":"882e","./assets/img/lesen1.jpg":"44f7","./assets/img/lesen2.jpg":"9981","./assets/img/mongo.jpg":"f9b0","./assets/img/nodejs.svg":"c44f","./assets/img/pc.jpg":"567b","./assets/img/powerbi.svg":"96c5","./assets/img/profil.png":"2d75","./assets/img/python.png":"70d3","./assets/img/python.svg":"bfc6","./assets/img/sass.svg":"b943","./assets/img/tux.png":"8ab0","./assets/img/ubuntu.png":"977e","./assets/img/wow.jpg":"5edd","./assets/particles":"9b1b","./assets/particles.json":"9b1b","./assets/profil.png":"1ab5","./assets/python.svg":"055b","./assets/udemy.png":"4b9a","./components/AusbildungCard":"e28c","./components/AusbildungCard.vue":"e28c","./components/ErfahrungCard":"99e7","./components/ErfahrungCard.vue":"99e7","./components/Header":"0418","./components/Header.vue":"0418","./components/Impressum":"3122","./components/Impressum.vue":"3122","./components/SkillCard":"0ac6","./components/SkillCard.vue":"0ac6","./main":"56d7","./main.js":"56d7","./router":"a18c","./router/":"a18c","./router/index":"a18c","./router/index.js":"a18c","./views/Ausbildung":"2b1d","./views/Ausbildung.vue":"2b1d","./views/Erfahrung":"eb50","./views/Erfahrung.vue":"eb50","./views/Home":"bb51","./views/Home copy":"d7c2","./views/Home copy.vue":"d7c2","./views/Home.vue":"bb51","./views/Skills":"ad83","./views/Skills.vue":"ad83","./views/Sonstiges":"390a","./views/Sonstiges.vue":"390a"};function i(e){var t=a(e);return n(t)}function a(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}i.keys=function(){return Object.keys(s)},i.resolve=a,e.exports=i,i.id="a8ec"},ad83:function(e,t,n){"use strict";n.r(t);var s=n("7a23"),i=function(e){return Object(s["t"])("data-v-697984f8"),e=e(),Object(s["r"])(),e},a={class:"skills"},A=i((function(){return Object(s["e"])("aside",null,[Object(s["e"])("h1",null,"🚧🚧")],-1)})),r={class:"skills__main"};function c(e,t,n,i,c,o){var l=Object(s["x"])("skill-card");return Object(s["q"])(),Object(s["d"])("div",a,[A,Object(s["e"])("div",r,[Object(s["h"])(l)])])}var o=n("0ac6"),l={components:{skillCard:o["default"]}},d=(n("5e91"),n("6b0d")),u=n.n(d);const b=u()(l,[["render",c],["__scopeId","data-v-697984f8"]]);t["default"]=b},b275:function(e,t,n){e.exports=n.p+"img/cyberp.6969d0a9.jpg"},b943:function(e,t,n){e.exports=n.p+"img/sass.b446ca5a.svg"},bb51:function(e,t,n){"use strict";n.r(t);var s=n("7a23"),i={class:"home"},a={class:"home__content"},A={class:"home__content-contact"},r=Object(s["e"])("img",{src:"https://github.com/ThomasSpornraft/portfolio/blob/master/src/assets/profil.png?raw=true",alt:""},null,-1),c=Object(s["e"])("div",{class:"home__content-contact-profiletext"},[Object(s["e"])("p",{class:"title"},"Thomas Spornraft"),Object(s["e"])("p",null,[Object(s["e"])("i",{class:"fas fa-map-marker-alt"}),Object(s["g"])("   München, Germany ")])],-1),o={class:"home__content-contact-list"},l=Object(s["f"])('<li><a href="https://github.com/ThomasSpornraft" target="_blank"><i class="fab fa-github"></i></a></li><li><a href="https://discordapp.com/users/390962526466080768" target="_blank"><i class="fab fa-discord"></i></a></li><li><a href="https://www.linkedin.com/in/thomas-spornraft-5974b71b7/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li><li><a href="https://twitter.com/TSpornraft" target="_blank"><i class="fab fa-twitter"></i></a></li><li><a href="https://www.facebook.com/thomas.spornraft" target="_blank"><i class="fab fa-facebook"></i></a></li><li><a href="https://www.instagram.com/thomasspornraft/?hl=de" target="_blank"><i class="fab fa-instagram"></i></a></li>',6),d=Object(s["f"])('<div class="home__content-main"><div class="home__content-main-header"><h1>Hello there, it&#39;s me, Thomas</h1><p>I am a 40 years old guy from germany</p></div><div class="home__content-main-header-content"><p> you can find some further informations about me here and if you want to get in contact with me, please do so. </p><p>I prefer Discord</p><p> I can offer German <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg" alt=""> and English <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_the_United_Kingdom.svg" alt=""></p><p> I work at BMW <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" alt="">, if your interest belongs to this business please contact me via LinkedIn, so we can share contact informations </p></div><div class="home__content-main-footer"><p> This site is still under construction. I create this one mainly because i want to learn VueJs <img src="https://vuejs.org/images/logo.svg" alt=""></p><p><a href="#" target="_blank" rel="noopener noreferrer">Impressum</a></p></div></div>',1);function u(e,t,n,u,b,p){var g=Object(s["x"])("Impressum");return Object(s["q"])(),Object(s["d"])(s["a"],null,[Object(s["e"])("div",i,[Object(s["e"])("div",a,[Object(s["e"])("div",A,[r,c,Object(s["e"])("div",o,[Object(s["e"])("p",null,Object(s["z"])(b.showContact),1),Object(s["e"])("ul",null,[Object(s["e"])("li",null,[Object(s["e"])("a",null,[Object(s["e"])("i",{onClick:t[0]||(t[0]=function(e){return p.clickHandler("phone")}),class:"fas fa-phone"})])]),Object(s["e"])("li",null,[Object(s["e"])("a",null,[Object(s["e"])("i",{onClick:t[1]||(t[1]=function(e){return p.clickHandler("email")}),class:"fas fa-at"})])]),l])])]),d])]),Object(s["h"])(g)],64)}var b=n("3122"),p={name:"Home",data:function(){return{showContact:"-"}},components:{Impressum:b["default"]},methods:{clickHandler:function(e){"phone"==e?this.showContact="+49-151-70809098":"email"==e&&(this.showContact="Thomas.Spornraft@web.de")}}},g=(n("674f"),n("6b0d")),f=n.n(g);const m=f()(p,[["render",u]]);t["default"]=m},bb7d:function(e,t,n){e.exports=n.p+"img/boerse.0415e16d.jpg"},bfc6:function(e,t,n){e.exports=n.p+"img/python.fbef321e.svg"},c3c2:function(e,t,n){"use strict";n("92c1")},c44f:function(e,t,n){e.exports=n.p+"img/nodejs.6587c46a.svg"},ca14:function(e,t,n){"use strict";n("a3d4")},ce8e:function(e,t,n){},cf15:function(e,t,n){e.exports=n.p+"img/aws.259e1339.svg"},d69e:function(e,t,n){e.exports=n.p+"img/assassins_creed.2cbee1dc.jpg"},d7c2:function(e,t,n){"use strict";n.r(t);var s=n("7a23"),i={class:"home"},a=Object(s["f"])('<div class="home__content"><div class="home__content-contact"><img src="https://github.com/ThomasSpornraft/portfolio/blob/master/src/assets/profil.png?raw=true" alt=""><div class="home__content-contact-profiletext"><h2><strong>THOMAS</strong> SPORNRAFT</h2><p><i class="fas fa-map-marker-alt"></i>   München, Germany </p></div><div class="home__content-contact-list"><ul><li><a href="tel:+49015170809098"><i class="fas fa-phone"></i><p>0151-70809098</p></a></li><li><a href="mailto:Thomas.Spornraft@web.de"><i class="fas fa-at"></i><p>Thomas.Spornraft@web.de</p></a></li><li><a href="https://github.com/ThomasSpornraft" target="_blank"><i class="fab fa-github"></i><p>GitHub</p></a></li><li><a href="https://discordapp.com/users/390962526466080768" target="_blank"><i class="fab fa-discord"></i><p>Discord</p></a></li><li><a href="https://www.linkedin.com/in/thomas-spornraft-5974b71b7/" target="_blank"><i class="fab fa-linkedin-in"></i><p>Linked in</p></a></li><li><a href="https://twitter.com/TSpornraft" target="_blank"><i class="fab fa-twitter"></i><p>Twitter</p></a></li><li><a href="https://www.facebook.com/thomas.spornraft" target="_blank"><i class="fab fa-facebook"></i><p>Facebook</p></a></li><li><a href="https://www.instagram.com/thomasspornraft/?hl=de" target="_blank"><i class="fab fa-instagram"></i><p>Instagram</p></a></li></ul></div></div><div class="home__content-main"><div class="home__content-main-header"><h1>Hello there, it&#39;s me, Thomas</h1><p>I am a 40 years old guy from germany</p></div><div class="home__content-main-header-content"><p> you can find some further informations about me here and if you want to get in contact with me, please do so. </p><p>I prefer Discord</p><p> I can offer German <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg" alt=""> and English <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_the_United_Kingdom.svg" alt=""></p><p> I work at BMW <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" alt="">, if your interest belongs to this business please contact me via LinkedIn, so we can share contact informations </p></div><div class="home__content-main-footer"><p> This site is still under construction. I create this one mainly because i want to learn VueJs <img src="https://vuejs.org/images/logo.svg" alt=""></p><p><a href="#" target="_blank" rel="noopener noreferrer">Impressum</a></p></div></div></div>',1),A=[a];function r(e,t,n,a,r,c){return Object(s["q"])(),Object(s["d"])("div",i,A)}var c={name:"Home",components:{}},o=(n("769f"),n("6b0d")),l=n.n(o);const d=l()(c,[["render",r]]);t["default"]=d},db5e:function(e,t,n){"use strict";n("36f8")},e28c:function(e,t,n){"use strict";n.r(t);var s=n("7a23"),i=function(e){return Object(s["t"])("data-v-9a06cf52"),e=e(),Object(s["r"])(),e},a=i((function(){return Object(s["e"])("div",{class:"content__img"},null,-1)})),A={class:"bullet"},r={key:0,class:"fas fa-graduation-cap"},c={key:1,class:"far fa-check"},o={class:"date"},l={class:"description"};function d(e,t,n,i,d,u){return Object(s["q"])(!0),Object(s["d"])(s["a"],null,Object(s["w"])(d.items,(function(e){return Object(s["q"])(),Object(s["d"])("div",{class:"content",key:e.id},[a,Object(s["e"])("div",A,[e.Abschluss?(Object(s["q"])(),Object(s["d"])("i",r)):(Object(s["q"])(),Object(s["d"])("i",c))]),Object(s["e"])("div",o,[Object(s["e"])("p",null,Object(s["z"])(e.start),1),Object(s["e"])("p",null,Object(s["z"])(e.end),1)]),Object(s["e"])("div",l,[Object(s["e"])("p",null,Object(s["z"])(e.Beschreibung),1)])])})),128)}var u={data:function(){return{items:[{id:1,start:"17.11.1981",end:"31.08.1988",Beschreibung:"Geburt"},{id:2,start:"01.09.1988",end:"31.08.1992",Beschreibung:"Besuch der Grundschule in Pfaffenhofen"},{id:3,start:"01.09.1992",end:"31.08.1994",Beschreibung:"Besuch der Hauptschule in Pfaffenhofen"},{start:"01.09.1994",end:"31.08.1998",Beschreibung:"Besuch der Realschule in Pfaffenhofen",Abschluss:!0},{start:"01.09.1998",end:"01.07.2001",Beschreibung:"Ausbildung zum Werkzeugmechaniker bei der BMW AG ",Abschluss:!0},{start:"01.09.2002",end:"01.05.2006",Beschreibung:"nebenberufliche Fortbildung zum staatlich geprüften Techniker für Maschinenbau am DAA-Technikum",Abschluss:!0}]}}},b=(n("4b7a"),n("6b0d")),p=n.n(b);const g=p()(u,[["render",d],["__scopeId","data-v-9a06cf52"]]);t["default"]=g},e69d:function(e,t,n){e.exports=n.p+"img/Power_bi.1515e5ed.svg"},e6fb:function(e,t,n){e.exports=n.p+"img/excel.d910cedd.svg"},eb50:function(e,t,n){"use strict";n.r(t);var s=n("7a23"),i=function(e){return Object(s["t"])("data-v-c3fb9dbe"),e=e(),Object(s["r"])(),e},a={class:"erfahrung"},A=i((function(){return Object(s["e"])("p",{class:"erfahrung__text"},"... was bisher geschah",-1)})),r={class:"erfahrung__content"},c=i((function(){return Object(s["e"])("div",{class:"erfahrung__timeline"},null,-1)})),o={class:"erfahrung__card"};function l(e,t,n,i,l,d){var u=Object(s["x"])("erfahrungCard");return Object(s["q"])(),Object(s["d"])("div",a,[A,Object(s["e"])("div",r,[c,Object(s["e"])("div",o,[Object(s["h"])(u)])])])}var d=n("99e7"),u={components:{ErfahrungCard:d["default"]}},b=(n("c3c2"),n("6b0d")),p=n.n(b);const g=p()(u,[["render",l],["__scopeId","data-v-c3fb9dbe"]]);t["default"]=g},ed8d:function(e,t,n){"use strict";n("f8b9")},edaa:function(e,t,n){"use strict";n("70ba")},f755:function(e,t,n){},f8b9:function(e,t,n){},f9b0:function(e,t,n){e.exports=n.p+"img/mongo.0cf7285c.jpg"},fff7:function(e,t,n){e.exports=n.p+"img/MySQL.0bc6533a.svg"}});
//# sourceMappingURL=app.e6a8416e.js.map