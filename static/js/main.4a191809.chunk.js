(this.webpackJsonppersonal_website=this.webpackJsonppersonal_website||[]).push([[0],[,,,,,function(e,t,a){e.exports={Modal:"ProjectModal_Modal__KgffG",Container:"ProjectModal_Container__2HwrT",ImageContainer:"ProjectModal_ImageContainer__3zSDh",TextContainer:"ProjectModal_TextContainer__2d4cL",CloseButton:"ProjectModal_CloseButton__14wN3",ModalBackdrop:"ProjectModal_ModalBackdrop__19c1J"}},function(e,t,a){e.exports={ProjectCarousel:"ProjectCarousel_ProjectCarousel__kGzm7",ProjectCarouselRow:"ProjectCarousel_ProjectCarouselRow__Hmvqo",ProjectCarouselItem:"ProjectCarousel_ProjectCarouselItem__3pKp4"}},function(e,t,a){e.exports={navBar:"NavBar_navBar__c54Yv",navLinks:"NavBar_navLinks__1Daeq",navBarBlack:"NavBar_navBarBlack__TUlq7"}},function(e,t,a){e.exports={AboutContainer:"AboutContent_AboutContainer__1PpBA",AboutText:"AboutContent_AboutText__2EV_f",AboutPhoto:"AboutContent_AboutPhoto__BmUu9"}},function(e,t,a){e.exports={TVShowTracker:"TileStyles_TVShowTracker__3xMMz",DoorID:"TileStyles_DoorID__2YPsQ",NoteSet:"TileStyles_NoteSet__t3hds"}},function(e,t,a){e.exports={NavLink:"NavLink_NavLink__2pGDk",active:"NavLink_active__393bR"}},,,function(e,t,a){e.exports=a.p+"static/media/logo.79b7f306.png"},function(e,t,a){e.exports={BackDrop:"BackDrop_BackDrop__3aLD2"}},function(e,t,a){e.exports=a.p+"static/media/VideoBackground.232fa4e8.mp4"},function(e,t,a){e.exports={NameText:"NameText_NameText__3b7Xc",fadin:"NameText_fadin__1PeYx"}},function(e,t,a){e.exports={SectionHeader:"SectionHeader_SectionHeader__1OCf5"}},function(e,t,a){e.exports=a.p+"static/media/headshot.96620795.jpg"},function(e,t,a){e.exports=a.p+"static/media/DoorIDThumb.5afdcdb9.PNG"},function(e,t,a){e.exports=a.p+"static/media/TVShowTrackerImg.cd01b2a6.PNG"},function(e,t,a){e.exports=a(28)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(12),c=a.n(r),l=(a(26),a(1)),i=a(2),s=a(4),u=a(3),d=(a(27),a(7)),m=a.n(d),p=a(10),h=a.n(p),f=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).scrollHandler=function(t){e.props.clicked.current&&e.props.clicked.current.scrollIntoView({behavior:"smooth",block:"nearest"})},e}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("li",{className:h.a.NavLink},o.a.createElement("button",{onClick:this.scrollHandler,className:this.props.active?h.a.active:null},this.props.children))}}]),a}(o.a.Component),b=a(13),v=a.n(b),w=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={transparent:!0,activeSection:"home"},e.windowHeight=window.innerHeight,e.halfWindowH=e.windowHeight/2,e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",(function(){window.pageYOffset>10?e.setState({transparent:!1}):e.setState({transparent:!0}),window.pageYOffset+e.halfWindowH<e.windowHeight?e.setState({activeSection:"home"}):window.pageYOffset+e.halfWindowH>e.windowHeight&&window.pageYOffset+e.halfWindowH<2*e.windowHeight?e.setState({activeSection:"about"}):e.setState({activeSection:"projects"})}))}},{key:"shouldComponentUpdate",value:function(e,t,a){return this.state.transparent!==t.transparent||this.state.activeSection!==t.activeSection}},{key:"render",value:function(){var e=[m.a.navBar];return this.state.transparent||e.push(m.a.navBarBlack),o.a.createElement("header",{className:e.join(" ")},o.a.createElement("img",{src:v.a,alt:"logo"}),o.a.createElement("nav",null,o.a.createElement("ul",{className:m.a.navLinks},o.a.createElement(f,{clicked:this.props.homeRef,active:"home"===this.state.activeSection},"Home"),o.a.createElement(f,{clicked:this.props.aboutRef,active:"about"===this.state.activeSection},"About"),o.a.createElement(f,{clicked:this.props.projectRef,active:"projects"===this.state.activeSection},"Projects"))))}}]),a}(o.a.Component),g=a(6),E=a.n(g),_=function(e){return o.a.createElement("div",{onClick:function(){return e.click(e.id)},className:[E.a.ProjectCarouselItem,e.useClass].join(" ")},o.a.createElement("p",null,e.children))},k=function(e){var t=e.projects.map((function(t){return o.a.createElement(_,{id:t.id,click:e.projectClick,key:t.id,useClass:t.tileStyle},t.name)}));return o.a.createElement("div",{className:E.a.ProjectCarousel},o.a.createElement("div",{className:E.a.ProjectCarouselRow},t))},j=a(14),y=a.n(j),C=a(15),S=a.n(C),N=function(e){var t=null;return e.video&&(t=o.a.createElement("video",{autoPlay:!0,muted:!0,loop:!0},o.a.createElement("source",{src:S.a}))),o.a.createElement("div",{className:y.a.BackDrop,ref:e.sectionRef},e.children,t)},T=a(16),P=a.n(T),D=function(){return o.a.createElement("h1",{className:P.a.NameText},"Hursh Arora")},I=a(17),A=a.n(I),B=function(e){return o.a.createElement("h1",{className:A.a.SectionHeader},e.children)},R=a(18),x=a.n(R),H=a(8),O=a.n(H),M=function(e){return o.a.createElement("div",{className:O.a.AboutContainer},o.a.createElement("div",{className:O.a.AboutPhoto},o.a.createElement("img",{src:x.a,alt:"AboutPhoto"})),o.a.createElement("div",{className:O.a.AboutText},e.desc))},V=a(5),L=a.n(V),J=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={show:!1},e}return Object(i.a)(a,[{key:"render",value:function(){var e=null;return this.props.toDisplay&&(e=o.a.createElement("div",{className:L.a.Modal,style:{display:this.props.show?null:"none"}},o.a.createElement("h1",null,this.props.toDisplay.name),o.a.createElement("button",{onClick:this.props.closed,className:L.a.CloseButton}),o.a.createElement("div",{className:L.a.Container},o.a.createElement("div",{className:L.a.ImageContainer},o.a.createElement("img",{src:this.props.toDisplay.image,alt:"Not available"})),o.a.createElement("div",{className:L.a.TextContainer},this.props.toDisplay.description)))),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:L.a.ModalBackdrop,style:{display:this.props.show?null:"none"},onClick:this.props.closed}),e)}}]),a}(o.a.Component),U=a(9),F=a.n(U),G=a(19),Y=a.n(G),W=a(20),z=a.n(W),q=o.a.createElement("p",null,"DoorID was a 24 hour Hackathon project made at nwHacks 2020. The idea behind the project was to help people with memory loss identify who's ringing their doorbell. ",o.a.createElement("br",null),o.a.createElement("br",null),"Originally, my team planned on using the camera on a Ring doorbell to send an image to a backend server for facial recognition, and then notify the user using an app. However, we ran into problems powering the doorbell, so we ended up using a website to simulate a doorbell instead. ",o.a.createElement("br",null),o.a.createElement("br",null),"My teammates worked on backend side of things including using the Azure Face API to get the doorbell server running, while I was responsible for creating the Android app that would receive notifications from the server. ",o.a.createElement("br",null),o.a.createElement("br",null),"The project Github for the Android app is available",o.a.createElement("a",{href:"https://github.com/hursharora/DoorbellID"}," here")," and for the server",o.a.createElement("a",{href:"https://github.com/parsasi/projectDoorbellServer"}," here"),". The hackathon Devpost is available",o.a.createElement("a",{href:"https://devpost.com/software/door-identify"}," here"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("strong",null,"Technologies Used: Java, Android, Android Studio, JSON")),X=o.a.createElement("p",null,"For one of my course projects, I decided to make a TV show tracker. Users can search for shows, add them to a watch list, and track what episodes they have watched. All TV Show data, including episode/season information and poster images, are retrieved using TVDB's API. ",o.a.createElement("br",null),o.a.createElement("br",null),"The entire project is made using Java and utilizes JavaFX for UI and jUnit for testing. Design patterns are used to reduce coupling and increase cohesion of code.",o.a.createElement("br",null),o.a.createElement("br",null),"Since TVDB updated their API, the project no longer functions. ",o.a.createElement("br",null),o.a.createElement("br",null),"The project Github is available ",o.a.createElement("a",{href:"https://github.com/hursharora/TVShow-Tracker"},"here"),".",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("strong",null,"Technologies Used: Java, JavaFX, jUnit, JSON, IntelliJ")),K=o.a.createElement("p",null,"NoteSet is a project I am currently working on using React and Firebase. I've always been searching for the perfect note taking app, however I've never been able to find one that has all the features I want. Since I've really been enjoying React lately, I decided to create create NoteSet in an attempt to create my perfect note taking app. ",o.a.createElement("br",null),o.a.createElement("br",null),"More information to come."),Q=o.a.createElement("p",null,"I'm a second year Computer Science student at The University of British Columbia. Thanks for visiting my website! ",o.a.createElement("br",null),o.a.createElement("br",null),"Currently I'm working on on a note taking and task management web app using React and Firebase. ",o.a.createElement("br",null),o.a.createElement("br",null),"Looking for co-op internship opportunities for Fall 2020.",o.a.createElement("br",null),o.a.createElement("br",null),"Scroll down to see some of my projects."),$=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={aboutDescription:Q,clickedProject:null,showingModal:!1,projects:[{name:"TVShow Tracker",image:z.a,description:X,id:0,tileStyle:F.a.TVShowTracker},{name:"DoorID",image:Y.a,description:q,id:1,tileStyle:F.a.DoorID},{name:"NoteSet",image:null,description:K,id:2,tileStyle:F.a.NoteSet}]},e.projectRef=o.a.createRef(),e.aboutRef=o.a.createRef(),e.homeRef=o.a.createRef(),e.projectClickedHandler=function(t){var a=e.state.projects[t];e.setState({clickedProject:a,showingModal:!0})},e.modalClosedHandler=function(){e.setState({showingModal:!1})},e}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(w,{projectRef:this.projectRef,aboutRef:this.aboutRef,homeRef:this.homeRef}),o.a.createElement(N,{video:!0,sectionRef:this.homeRef},o.a.createElement(D,null)),o.a.createElement(N,{sectionRef:this.aboutRef},o.a.createElement(B,null,"About"),o.a.createElement(M,{desc:this.state.aboutDescription})),o.a.createElement(N,{sectionRef:this.projectRef},o.a.createElement(B,null,"Projects"),o.a.createElement(J,{show:this.state.showingModal,closed:this.modalClosedHandler,toDisplay:this.state.clickedProject},"Test"),o.a.createElement(k,{projects:this.state.projects,projectClick:this.projectClickedHandler})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[21,1,2]]]);
//# sourceMappingURL=main.4a191809.chunk.js.map