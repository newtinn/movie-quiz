(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{42:function(e,t,s){},53:function(e,t,s){"use strict";s.r(t);var n=s(1),i=s.n(n),r=s(20),c=s.n(r),o=(s(42),s(3)),a=s(4),u=s(2),h=s(6),j=s(5),l=s(13),b=s(0),p=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).nextRound=n.nextRound.bind(Object(u.a)(n)),n.resetGame=n.resetGame.bind(Object(u.a)(n)),n.contentFadeOut=n.contentFadeOut.bind(Object(u.a)(n)),n}return Object(a.a)(s,[{key:"contentFadeOut",value:function(){document.getElementById("content").className="fade-out",!0===this.props.correct&&this.nextRound(),!1===this.props.correct&&this.resetGame()}},{key:"nextRound",value:function(){this.props.removeQuestion(),this.props.newQuestion(),this.props.nextQuestion()}},{key:"resetGame",value:function(){this.props.resetScore(),this.props.removeQuestion(),this.props.nextQuestion(),this.props.newQuestion(),this.props.newQuestion(),this.props.newQuestion()}},{key:"render",value:function(){return!0===this.props.correct?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(l.HideUntilLoaded,{animationIn:"fadeIn",imageToLoad:this.props.cover,durationIn:"1000",children:Object(b.jsxs)("div",{id:"content",children:[Object(b.jsx)("img",{src:this.props.cover,alt:"",style:{maxHeight:"400px",paddingBottom:"10px"},class:"img-fluid"}),Object(b.jsx)("h2",{children:"Correct!"}),Object(b.jsxs)("h2",{style:{color:"#27FB6B"},children:["Score: ",this.props.score]}),Object(b.jsxs)("p",{children:["The answer was: ",this.props.answer,".",Object(b.jsx)("br",{}),"Click the button below to go to the next question. "]}),Object(b.jsx)("input",{type:"submit",value:"Next Question",class:"btn btn-primary",onClick:this.contentFadeOut}),Object(b.jsx)("p",{style:{paddingBottom:"150px"}})]})})}):!1===this.props.correct?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(l.HideUntilLoaded,{animationIn:"fadeIn",imageToLoad:this.props.cover,durationIn:"1000",children:Object(b.jsxs)("div",{class:"fade-in",id:"content",children:[Object(b.jsx)("img",{src:this.props.cover,alt:"",style:{maxHeight:"400px",paddingBottom:"10px"},class:"img-fluid"}),Object(b.jsxs)("h2",{children:["Incorrect!",Object(b.jsx)("br",{}),"The answer was ",this.props.answer,"."]}),Object(b.jsxs)("h2",{style:{color:"#FF5A5F"},children:["Score: ",this.props.score]}),Object(b.jsx)("p",{children:"To play again press the button below."}),Object(b.jsx)("input",{type:"submit",value:"Restart",class:"btn btn-danger",onClick:this.contentFadeOut}),Object(b.jsx)("p",{style:{paddingBottom:"150px"}})]})})}):void 0}}]),s}(i.a.Component),d=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).fadeContentOut=n.fadeContentOut.bind(Object(u.a)(n)),n}return Object(a.a)(s,[{key:"fadeContentOut",value:function(){document.getElementById("content").className="fade-out"}},{key:"render",value:function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(l.HideUntilLoaded,{animationIn:"fadeInUp",durationIn:"10000",imageToLoad:this.props.question.cover,children:Object(b.jsxs)("div",{id:"content",children:[Object(b.jsx)("img",{src:this.props.question.cover,alt:"",style:{maxHeight:"400px"},class:"img-fluid"}),Object(b.jsxs)("h1",{style:{paddingTop:"15px"},children:["Who is this ",this.props.question.sex,"?"]}),Object(b.jsx)("input",{type:"text",id:"userAnswer",className:"text-line",placeholder:"Type your answer here..."}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"submit",value:"Submit",className:"btn btn-primary",onClick:this.fadeContentOut&&this.props.checkAnswer}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("p",{style:{paddingBottom:"150px"}})]})})})}}]),s}(i.a.Component),O=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={answered:!1,correct:null},n.checkAnswer=n.checkAnswer.bind(Object(u.a)(n)),n.nextQuestion=n.nextQuestion.bind(Object(u.a)(n)),n}return Object(a.a)(s,[{key:"checkAnswer",value:function(){var e=document.getElementById("userAnswer").value;(e=e.trim()).toLowerCase()===this.props.question.actor.toLowerCase()?(this.props.increaseScore(),this.setState({correct:!0})):this.setState({correct:!1}),this.setState({answered:!0})}},{key:"nextQuestion",value:function(){this.setState({answered:!1,correct:null})}},{key:"render",value:function(){return Object(b.jsx)(b.Fragment,{children:this.state.answered?Object(b.jsx)(p,{correct:this.state.correct,answer:this.props.question.actor,newQuestion:this.props.newQuestion,removeQuestion:this.props.removeQuestion,resetScore:this.props.resetScore,nextQuestion:this.nextQuestion,score:this.props.score,cover:this.props.question.cover,answered:this.state.answered}):Object(b.jsx)(d,{question:this.props.question,checkAnswer:this.checkAnswer})})}}]),s}(i.a.Component),x=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e))._mounted=!1,n.getQuestion=n.getQuestion.bind(Object(u.a)(n)),n.removeQuestion=n.removeQuestion.bind(Object(u.a)(n)),n.state={questionAvailable:!1,currentQueue:[]},n}return Object(a.a)(s,[{key:"getQuestion",value:function(){var e=this;0===this.props.queue.length&&this.setState({questionAvailable:!1}),!0===this._mounted&&fetch("https://bigfatmoviequiz.herokuapp.com/getActorAPI").then((function(e){return e.json()})).then((function(t){if(!0===e._mounted)if(-1===e.state.currentQueue.indexOf(t.actorID)){var s=e.state.currentQueue;s.push(t.actorID),e.setState({currentQueue:s}),e.props.enqueue(t),e.setState({questionAvailable:!0})}else e.getQuestion()})).catch((function(t){return e.getQuestion()}))}},{key:"removeQuestion",value:function(){1===this.props.queue.length&&this.setState({questionAvailable:!1}),this.props.dequeue()}},{key:"componentDidMount",value:function(){var e=this;return this._mounted=!0,0===this.props.queue.length?(this.getQuestion(),this.getQuestion(),this.getQuestion()):this.setState({questionAvailable:!0}),function(){return e.setState({_mounted:!1})}}},{key:"componentWillUnmount",value:function(){this._mounted=!1}},{key:"render",value:function(){return Object(b.jsx)(b.Fragment,{children:this.state.questionAvailable?Object(b.jsx)(O,{question:this.props.queue[0],gameOver:this.props.gameOver,increaseScore:this.props.increaseScore,resetScore:this.props.resetScore,removeQuestion:this.removeQuestion,newQuestion:this.getQuestion,score:this.props.score}):Object(b.jsx)("div",{className:"contentBox",children:Object(b.jsx)("div",{class:"fade-in",children:Object(b.jsx)("div",{class:"spinner-border text-light",role:"status"})})})})}}]),s}(i.a.Component),m=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={queue:[],queueMaxSize:3,question:null,score:0,gameOver:!1},n.enqueue=n.enqueue.bind(Object(u.a)(n)),n.dequeue=n.dequeue.bind(Object(u.a)(n)),n.checkFull=n.checkFull.bind(Object(u.a)(n)),n.checkEmpty=n.checkEmpty.bind(Object(u.a)(n)),n.increaseScore=n.increaseScore.bind(Object(u.a)(n)),n.resetScore=n.resetScore.bind(Object(u.a)(n)),n}return Object(a.a)(s,[{key:"enqueue",value:function(e){if(!1===this.checkFull()){var t=this.state.queue;t.push(e),this.setState({queue:t})}}},{key:"dequeue",value:function(){if(!1===this.checkEmpty()){var e=this.state.queue;e.shift(),this.setState({queue:e})}}},{key:"checkEmpty",value:function(){return 0===this.state.queue.length}},{key:"checkFull",value:function(){return this.state.queue.length===this.state.queueMaxSize}},{key:"increaseScore",value:function(){var e=this.state.score;e+=1,this.setState({score:e})}},{key:"resetScore",value:function(){this.state.score;this.setState({score:0,gameOver:!1})}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"fade-in",children:[Object(b.jsx)("h1",{children:"Easy mode"}),Object(b.jsx)("p",{children:"Guess the actor/actress"}),Object(b.jsx)(x,{enqueue:this.enqueue,dequeue:this.dequeue,checkEmpty:this.checkEmpty,checkFull:this.checkFull,queue:this.state.queue,gameOver:this.state.gameOver,increaseScore:this.increaseScore,resetScore:this.resetScore,score:this.state.score,controller:this.controller})]})}}]),s}(i.a.Component),v=s.p+"static/media/movie.10974783.jpg",f=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"fade-in",children:[Object(b.jsx)("h1",{style:{fontSize:"72px"},children:"Home"}),Object(b.jsx)("img",{src:v,style:{maxHeight:"300px",padding:"15px"},className:"img-fluid",alt:""}),Object(b.jsx)("h4",{children:"The Big Fat Film Quiz"}),Object(b.jsx)("p",{children:"A film quiz app"}),Object(b.jsx)("h1",{style:{paddingBottom:"10px"},children:"Want to play?"}),Object(b.jsx)("table",{style:{marginLeft:"auto",marginRight:"auto"},children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:Object(b.jsx)("a",{href:"/guessactor",children:Object(b.jsx)("input",{value:"Easy",type:"submit",className:"btn btn-info",style:{fontSize:"24px"}})})}),Object(b.jsx)("th",{children:Object(b.jsx)("a",{href:"/guessmovie",children:Object(b.jsx)("input",{value:"Medium",type:"submit",className:"btn btn-info",style:{fontSize:"24px"}})})}),Object(b.jsx)("th",{children:Object(b.jsx)("a",{href:"/sixdegrees",children:Object(b.jsx)("input",{value:"Hard",type:"submit",className:"btn btn-info",style:{fontSize:"24px"}})})})]})}),Object(b.jsxs)("p",{children:[Object(b.jsx)("br",{}),"There is information about how each gamemode works if you scroll down.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("h1",{children:Object(b.jsx)("u",{children:"Gamemodes"})})]}),Object(b.jsx)("h3",{children:"Easy"}),Object(b.jsxs)("p",{children:["In this gamemode you will be given an image of an actor or actress and from that image",Object(b.jsx)("br",{}),"you will have to guess who the actor/actress is."]}),Object(b.jsx)("br",{}),Object(b.jsx)("h3",{children:"Medium"}),Object(b.jsxs)("p",{children:["In this gamemode you will be given an image of two actors/actresses and from those images",Object(b.jsx)("br",{}),"you will have to guess what film both of them have been in."]}),Object(b.jsx)("br",{}),Object(b.jsx)("h3",{children:"Hard"}),Object(b.jsxs)("p",{children:["In this gamemode you will be given an actor/actress and a film.",Object(b.jsx)("br",{}),"From this actor/actress mentioned there will be another actor/actress they have done",Object(b.jsx)("br",{}),"work with who has featured in the film mentioned in the question.",Object(b.jsx)("br",{}),"Your task would be to find the actor/actress who is the link between the film and the actor/actress mentioned."]}),Object(b.jsx)("p",{style:{paddingBottom:"150px"}})]})})}}]),s}(i.a.Component),g=s(23),y=s.n(g),w=s(24),k=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).nextRound=n.nextRound.bind(Object(u.a)(n)),n.resetGame=n.resetGame.bind(Object(u.a)(n)),n.contentFadeOut=n.contentFadeOut.bind(Object(u.a)(n)),n}return Object(a.a)(s,[{key:"contentFadeOut",value:function(){document.getElementById("content").className="fade-out",!0===this.props.correct&&this.nextRound(),!1===this.props.correct&&this.resetGame()}},{key:"nextRound",value:function(){this.props.removeQuestion(),this.props.newQuestion(),this.props.nextQuestion()}},{key:"resetGame",value:function(){this.props.resetScore(),this.props.removeQuestion(),this.props.nextQuestion(),this.props.newQuestion(),this.props.newQuestion(),this.props.newQuestion()}},{key:"render",value:function(){return!0===this.props.correct?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(l.HideUntilLoaded,{animationIn:"fadeInUp",imageToLoad:this.props.cover,durationIn:"1000",Spinner:function(){return Object(b.jsx)("div",{class:"spinner-border text-light",role:"status"})},children:Object(b.jsxs)("div",{class:"fade-in",id:"content",children:[Object(b.jsx)("img",{src:this.props.cover,alt:"",style:{maxHeight:"400px",paddingBottom:"10px"},class:"img-fluid"}),Object(b.jsx)("h2",{children:"Correct!"}),Object(b.jsxs)("h2",{style:{color:"#27FB6B"},children:["Score: ",this.props.score]}),Object(b.jsxs)("p",{children:["The answer was: ",this.props.answer,".",Object(b.jsx)("br",{}),"Click the button below to go to the next question. "]}),Object(b.jsx)("input",{type:"submit",value:"Next Question",class:"btn btn-primary",onClick:this.contentFadeOut}),Object(b.jsx)("p",{style:{paddingBottom:"150px"}})]})})}):!1===this.props.correct?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(l.HideUntilLoaded,{animationIn:"fadeInUp",imageToLoad:this.props.cover,durationIn:"1000",Spinner:function(){return Object(b.jsx)("div",{class:"spinner-border text-light",role:"status"})},children:Object(b.jsxs)("div",{class:"fade-in",id:"content",children:[Object(b.jsx)("img",{src:this.props.cover,alt:"",style:{maxHeight:"400px",paddingBottom:"10px"},class:"img-fluid"}),Object(b.jsxs)("h2",{children:["Incorrect!",Object(b.jsx)("br",{}),"The answer was ",this.props.answer,"."]}),Object(b.jsxs)("h2",{style:{color:"#FF5A5F"},children:["Score: ",this.props.score]}),Object(b.jsx)("p",{children:"To play again press the button below."}),Object(b.jsx)("input",{type:"submit",value:"Restart",class:"btn btn-danger",onClick:this.contentFadeOut}),Object(b.jsx)("p",{style:{paddingBottom:"150px"}})]})})}):void 0}}]),s}(i.a.Component),q=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).fadeContentOut=n.fadeContentOut.bind(Object(u.a)(n)),n}return Object(a.a)(s,[{key:"fadeContentOut",value:function(){document.getElementById("content").className="fade-out"}},{key:"render",value:function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(l.HideUntilLoaded,{animationIn:"fadeInUp",durationIn:"10000",imageToLoad:this.props.question.actor1Cover&&this.props.question.actor2Cover,children:Object(b.jsxs)("div",{id:"content",children:[Object(b.jsx)("img",{src:this.props.question.actor1Cover,alt:"",style:{maxHeight:"400px",padding:"5px"},class:"img-fluid"}),Object(b.jsx)("img",{src:this.props.question.actor2Cover,alt:"",style:{maxHeight:"400px",padding:"5px"},class:"img-fluid"}),Object(b.jsxs)("h3",{style:{paddingTop:"15px"},children:["What ",this.props.question.genre," movie, released in ",this.props.question.year,",",Object(b.jsx)("br",{}),"has both ",this.props.question.actor1," and ",this.props.question.actor2," been in?"]}),Object(b.jsx)("input",{type:"text",id:"userAnswer",className:"text-line",placeholder:"Type your answer here..."}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"submit",value:"Submit",className:"btn btn-primary",onClick:this.fadeContentOut&&this.props.checkAnswer}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("p",{style:{paddingBottom:"150px"}})]})})})}}]),s}(i.a.Component),S=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={answered:!1,correct:null},n.checkAnswer=n.checkAnswer.bind(Object(u.a)(n)),n.nextQuestion=n.nextQuestion.bind(Object(u.a)(n)),n}return Object(a.a)(s,[{key:"checkAnswer",value:function(){var e=document.getElementById("userAnswer").value;(e=e.trim()).toLowerCase()===this.props.question.movie.toLowerCase()?(this.props.increaseScore(),this.setState({correct:!0})):this.setState({correct:!1}),this.setState({answered:!0})}},{key:"nextQuestion",value:function(){this.setState({answered:!1,correct:null})}},{key:"render",value:function(){return Object(b.jsx)(b.Fragment,{children:this.state.answered?Object(b.jsx)(k,{correct:this.state.correct,answer:this.props.question.movie,newQuestion:this.props.newQuestion,removeQuestion:this.props.removeQuestion,resetScore:this.props.resetScore,nextQuestion:this.nextQuestion,score:this.props.score,cover:this.props.question.movieCover,answered:this.state.answered}):Object(b.jsx)(q,{question:this.props.question,checkAnswer:this.checkAnswer})})}}]),s}(i.a.Component),Q=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e))._mounted=!1,n.getQuestion=n.getQuestion.bind(Object(u.a)(n)),n.removeQuestion=n.removeQuestion.bind(Object(u.a)(n)),n.state={questionAvailable:!1,currentQueue:[]},n}return Object(a.a)(s,[{key:"getQuestion",value:function(){var e=Object(w.a)(y.a.mark((function e(){var t=this;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 0===this.props.queue.length&&this.setState({questionAvailable:!1}),e.next=3,fetch("https://bigfatmoviequiz.herokuapp.com/getMovieAPI").then((function(e){return e.json()})).then((function(e){if(!0===t._mounted)if(-1===t.state.currentQueue.indexOf(e.actorID)){var s=t.state.currentQueue;s.push([e.actor1ID,e.actor2ID,e.movieID]),t.setState({currentQueue:s}),t.props.enqueue(e),t.setState({questionAvailable:!0})}else console.log("data already exists"),t.getQuestion()})).catch((function(e){return t.getQuestion()}));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"removeQuestion",value:function(){1===this.props.queue.length&&this.setState({questionAvailable:!1}),this.props.dequeue()}},{key:"componentDidMount",value:function(){var e=this;return this._mounted=!0,0===this.props.queue.length?(this.getQuestion(),this.getQuestion(),this.getQuestion()):this.setState({questionAvailable:!0}),function(){return e.setState({_mounted:!1})}}},{key:"componentWillUnmount",value:function(){this._mounted=!1}},{key:"render",value:function(){return Object(b.jsx)(b.Fragment,{children:this.state.questionAvailable?Object(b.jsx)(S,{question:this.props.queue[0],gameOver:this.props.gameOver,increaseScore:this.props.increaseScore,resetScore:this.props.resetScore,removeQuestion:this.removeQuestion,newQuestion:this.getQuestion,score:this.props.score}):Object(b.jsx)("div",{className:"contentBox",children:Object(b.jsx)("div",{class:"fade-in",children:Object(b.jsx)("div",{class:"spinner-border text-light",role:"status"})})})})}}]),s}(i.a.Component),F=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={queue:[],queueMaxSize:3,question:null,score:0,gameOver:!1},n.enqueue=n.enqueue.bind(Object(u.a)(n)),n.dequeue=n.dequeue.bind(Object(u.a)(n)),n.checkFull=n.checkFull.bind(Object(u.a)(n)),n.checkEmpty=n.checkEmpty.bind(Object(u.a)(n)),n.increaseScore=n.increaseScore.bind(Object(u.a)(n)),n.resetScore=n.resetScore.bind(Object(u.a)(n)),n}return Object(a.a)(s,[{key:"enqueue",value:function(e){if(!1===this.checkFull()){var t=this.state.queue;t.push(e),this.setState({queue:t})}}},{key:"dequeue",value:function(){if(!1===this.checkEmpty()){var e=this.state.queue;e.shift(),this.setState({queue:e})}}},{key:"checkEmpty",value:function(){return 0===this.state.queue.length}},{key:"checkFull",value:function(){return this.state.queue.length===this.state.queueMaxSize}},{key:"increaseScore",value:function(){var e=this.state.score;e+=1,this.setState({score:e})}},{key:"resetScore",value:function(){this.state.score;this.setState({score:0,gameOver:!1})}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"fade-in",children:[Object(b.jsx)("h1",{children:"Medium mode"}),Object(b.jsx)("p",{children:"Guess the movie that two actors/actresses have been in"}),Object(b.jsx)(Q,{enqueue:this.enqueue,dequeue:this.dequeue,checkEmpty:this.checkEmpty,checkFull:this.checkFull,queue:this.state.queue,gameOver:this.state.gameOver,increaseScore:this.increaseScore,resetScore:this.resetScore,score:this.state.score,controller:this.controller})]})}}]),s}(i.a.Component),C=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).nextRound=n.nextRound.bind(Object(u.a)(n)),n.resetGame=n.resetGame.bind(Object(u.a)(n)),n.contentFadeOut=n.contentFadeOut.bind(Object(u.a)(n)),n}return Object(a.a)(s,[{key:"contentFadeOut",value:function(){document.getElementById("content").className="fade-out",!0===this.props.correct&&this.nextRound(),!1===this.props.correct&&this.resetGame()}},{key:"nextRound",value:function(){this.props.removeQuestion(),this.props.newQuestion(),this.props.nextQuestion()}},{key:"resetGame",value:function(){this.props.resetScore(),this.props.removeQuestion(),this.props.nextQuestion(),this.props.newQuestion(),this.props.newQuestion(),this.props.newQuestion()}},{key:"render",value:function(){return!0===this.props.correct?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(l.HideUntilLoaded,{animationIn:"fadeIn",imageToLoad:this.props.cover,durationIn:"1000",children:Object(b.jsxs)("div",{id:"content",children:[Object(b.jsx)("img",{src:this.props.cover,alt:"",style:{maxHeight:"400px",paddingBottom:"10px"},class:"img-fluid"}),Object(b.jsx)("h2",{children:"Correct!"}),Object(b.jsxs)("h2",{style:{color:"#27FB6B"},children:["Score: ",this.props.score]}),Object(b.jsxs)("p",{children:["The answer was: ",this.props.answer,".",Object(b.jsx)("br",{}),"Click the button below to go to the next question. "]}),Object(b.jsx)("input",{type:"submit",value:"Next Question",class:"btn btn-primary",onClick:this.contentFadeOut}),Object(b.jsx)("p",{style:{paddingBottom:"150px"}})]})})}):!1===this.props.correct?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(l.HideUntilLoaded,{animationIn:"fadeIn",imageToLoad:this.props.cover,durationIn:"1000",children:Object(b.jsxs)("div",{class:"fade-in",id:"content",children:[Object(b.jsx)("img",{src:this.props.cover,alt:"",style:{maxHeight:"400px",paddingBottom:"10px"},class:"img-fluid"}),Object(b.jsxs)("h2",{children:["Incorrect!",Object(b.jsx)("br",{}),"The answer was ",this.props.answer,"."]}),Object(b.jsxs)("h2",{style:{color:"#FF5A5F"},children:["Score: ",this.props.score]}),Object(b.jsx)("p",{children:"To play again press the button below."}),Object(b.jsx)("input",{type:"submit",value:"Restart",class:"btn btn-danger",onClick:this.contentFadeOut}),Object(b.jsx)("p",{style:{paddingBottom:"150px"}})]})})}):void 0}}]),s}(i.a.Component),I=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).fadeContentOut=n.fadeContentOut.bind(Object(u.a)(n)),n}return Object(a.a)(s,[{key:"fadeContentOut",value:function(){document.getElementById("content").className="fade-out"}},{key:"render",value:function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(l.HideUntilLoaded,{animationIn:"fadeInUp",durationIn:"10000",imageToLoad:this.props.question.cover1&&this.props.question.cover2,children:Object(b.jsxs)("div",{id:"content",children:[Object(b.jsx)("img",{src:this.props.question.cover1,alt:"",style:{maxHeight:"400px",padding:"5px"},class:"img-fluid"}),Object(b.jsx)("img",{src:this.props.question.cover2,alt:"",style:{maxHeight:"400px",padding:"5px"},class:"img-fluid"}),Object(b.jsx)("h3",{style:{paddingTop:"15px"},children:this.props.question.question}),Object(b.jsx)("input",{type:"text",id:"userAnswer",className:"text-line",placeholder:"Type your answer here..."}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"submit",value:"Submit",className:"btn btn-primary",onClick:this.fadeContentOut&&this.props.checkAnswer}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("p",{style:{paddingBottom:"150px"}})]})})})}}]),s}(i.a.Component),A=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={answered:!1,correct:null},n.checkAnswer=n.checkAnswer.bind(Object(u.a)(n)),n.nextQuestion=n.nextQuestion.bind(Object(u.a)(n)),n}return Object(a.a)(s,[{key:"checkAnswer",value:function(){var e=document.getElementById("userAnswer").value;(e=e.trim()).toLowerCase()===this.props.question.answer.toLowerCase()?(this.props.increaseScore(),this.setState({correct:!0})):this.setState({correct:!1}),this.setState({answered:!0})}},{key:"nextQuestion",value:function(){this.setState({answered:!1,correct:null})}},{key:"render",value:function(){return Object(b.jsx)(b.Fragment,{children:this.state.answered?Object(b.jsx)(C,{correct:this.state.correct,answer:this.props.question.answer,newQuestion:this.props.newQuestion,removeQuestion:this.props.removeQuestion,resetScore:this.props.resetScore,nextQuestion:this.nextQuestion,score:this.props.score,cover:this.props.question.answerCover,answered:this.state.answered}):Object(b.jsx)(I,{question:this.props.question,checkAnswer:this.checkAnswer})})}}]),s}(i.a.Component),B=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e))._mounted=!1,n.getQuestion=n.getQuestion.bind(Object(u.a)(n)),n.removeQuestion=n.removeQuestion.bind(Object(u.a)(n)),n.state={questionAvailable:!1,currentQueue:[]},n}return Object(a.a)(s,[{key:"getQuestion",value:function(){var e=Object(w.a)(y.a.mark((function e(){var t=this;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 0===this.props.queue.length&&this.setState({questionAvailable:!1}),e.next=3,fetch("https://bigfatmoviequiz.herokuapp.com/sixdegreesAPI").then((function(e){return e.json()})).then((function(e){if(!0===t._mounted)if(-1===t.state.currentQueue.indexOf(e.answer)){var s=t.state.currentQueue;s.push(e.answer),t.setState({currentQueue:s}),t.props.enqueue(e),t.setState({questionAvailable:!0})}else t.getQuestion()})).catch((function(e){return t.getQuestion()}));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"removeQuestion",value:function(){1===this.props.queue.length&&this.setState({questionAvailable:!1}),this.props.dequeue()}},{key:"componentDidMount",value:function(){var e=this;return this._mounted=!0,0===this.props.queue.length?(this.getQuestion(),this.getQuestion(),this.getQuestion()):this.setState({questionAvailable:!0}),function(){return e.setState({_mounted:!1})}}},{key:"componentWillUnmount",value:function(){this._mounted=!1}},{key:"render",value:function(){return Object(b.jsx)(b.Fragment,{children:this.state.questionAvailable?Object(b.jsx)(A,{question:this.props.queue[0],gameOver:this.props.gameOver,increaseScore:this.props.increaseScore,resetScore:this.props.resetScore,removeQuestion:this.removeQuestion,newQuestion:this.getQuestion,score:this.props.score}):Object(b.jsx)("div",{className:"contentBox",children:Object(b.jsx)("div",{class:"fade-in",children:Object(b.jsx)("div",{class:"spinner-border text-light",role:"status"})})})})}}]),s}(i.a.Component),T=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={queue:[],queueMaxSize:3,question:null,score:0,gameOver:!1},n.enqueue=n.enqueue.bind(Object(u.a)(n)),n.dequeue=n.dequeue.bind(Object(u.a)(n)),n.checkFull=n.checkFull.bind(Object(u.a)(n)),n.checkEmpty=n.checkEmpty.bind(Object(u.a)(n)),n.increaseScore=n.increaseScore.bind(Object(u.a)(n)),n.resetScore=n.resetScore.bind(Object(u.a)(n)),n}return Object(a.a)(s,[{key:"enqueue",value:function(e){if(!1===this.checkFull()){var t=this.state.queue;t.push(e),this.setState({queue:t})}}},{key:"dequeue",value:function(){if(!1===this.checkEmpty()){var e=this.state.queue;e.shift(),this.setState({queue:e})}}},{key:"checkEmpty",value:function(){return 0===this.state.queue.length}},{key:"checkFull",value:function(){return this.state.queue.length===this.state.queueMaxSize}},{key:"increaseScore",value:function(){var e=this.state.score;e+=1,this.setState({score:e})}},{key:"resetScore",value:function(){this.state.score;this.setState({score:0,gameOver:!1})}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"fade-in",children:[Object(b.jsx)("h1",{children:"Hard mode"}),Object(b.jsx)("p",{children:"Six degrees of separation"}),Object(b.jsx)(B,{enqueue:this.enqueue,dequeue:this.dequeue,checkEmpty:this.checkEmpty,checkFull:this.checkFull,queue:this.state.queue,gameOver:this.state.gameOver,increaseScore:this.increaseScore,resetScore:this.resetScore,score:this.state.score,controller:this.controller})]})}}]),s}(i.a.Component),L=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{style:{fontSize:"72px"},children:"About"}),Object(b.jsxs)("p",{children:["Welcome to the about page!",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"The Big Fat Film Quiz is a website that is about testing your knowledge on films.",Object(b.jsx)("br",{}),"To really test your knowledge there are three gamemodes. From easy to hard, there are questions for everyone!",Object(b.jsx)("br",{}),Object(b.jsx)("br",{})]}),Object(b.jsxs)("p",{style:{fontSize:"10px"},children:["Copyright Information:",Object(b.jsx)("br",{}),"I must state that in NO way, shape or form am I intending to infringe rights of the copyright holder.",Object(b.jsx)("br",{}),"Content used is strictly for research/reviewing purposes and to help educate. All under the Fair Use law.",Object(b.jsx)("br",{}),'"Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for "fair use" for purposes such as ',Object(b.jsx)("br",{}),"criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing.",Object(b.jsx)("br",{}),'Non-profit, educational or personal use tips the balance in favor of fair use."',Object(b.jsx)("br",{}),"All these rights are owned by IMDb and I do not intend to infringe these rights."]}),Object(b.jsx)("h2",{children:"About the creator"}),Object(b.jsxs)("p",{children:["Hey! My name's Newtinn and I created this app. This is my first website that I have created and put online.",Object(b.jsx)("br",{}),"Before this website, I have mostly created games in Unity and GameMaker: Studio.",Object(b.jsx)("br",{}),"If you want to check those out check out my itch.io here:",Object(b.jsx)("br",{}),Object(b.jsx)("a",{href:"https://newtinn.itch.io/",target:"_blank",children:Object(b.jsx)("input",{value:"itch.io",type:"submit",className:"btn btn-info"})}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Some of my interests include:",Object(b.jsx)("br",{}),"\u2022 Gaming",Object(b.jsx)("br",{}),"\u2022 Listening to lofi",Object(b.jsx)("br",{}),"\u2022 Watching sports",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"If you want to contact me go to the contact page!"]})]})}}]),s}(i.a.Component),N=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{style:{fontSize:"72px"},children:"Contact"}),Object(b.jsxs)("p",{children:["Welcome to the contact page!",Object(b.jsx)("br",{}),"If you want to send an inquiry about the quiz or just want to say hi to the creator, you have come to the right place!",Object(b.jsx)("br",{}),"Contact details:",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Email: newtinn@hotmail.com",Object(b.jsx)("br",{}),"Twitter: @newtinn - ",Object(b.jsx)("a",{href:"https://www.twitter.com/@newtinn",target:"_blank",children:Object(b.jsx)("input",{type:"submit",value:"Twitter",className:"btn btn-info"})}),Object(b.jsx)("br",{}),"Youtube: newtinn - ",Object(b.jsx)("a",{href:"https://www.youtube.com/channel/UCo48YTr8_mMz_U8GOzmV_bg",target:"_blank",children:Object(b.jsx)("input",{type:"submit",value:"Youtube",className:"btn btn-danger"})})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("p",{style:{paddingBottom:"150px"}})]})}}]),s}(i.a.Component),E=s(56),H=s(57),z=s(36),U=s(9);var _=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(E.a,{bg:"transparent",variant:"dark",expand:"lg",children:[Object(b.jsx)(E.a.Toggle,{}),Object(b.jsx)(E.a.Collapse,{children:Object(b.jsxs)(H.a,{className:"justify-content-end",style:{width:"100%"},children:[Object(b.jsx)(H.a.Link,{href:"/",children:Object(b.jsx)("h1",{style:{padding:"10px",textAlign:"left"},children:"Home"})}),Object(b.jsx)(H.a.Link,{href:"/about",children:Object(b.jsx)("h1",{style:{padding:"10px",textAlign:"left"},children:"About"})}),Object(b.jsx)(H.a.Link,{href:"/contact",children:Object(b.jsx)("h1",{style:{padding:"10px",textAlign:"left"},children:"Contact"})})]})})]}),Object(b.jsx)("div",{style:{paddingLeft:"20px"},children:Object(b.jsx)(z.a,{children:Object(b.jsxs)(U.c,{children:[Object(b.jsx)(U.a,{path:"/guessactor",exact:!0,children:Object(b.jsx)(m,{})}),Object(b.jsx)(U.a,{path:"/guessmovie",exact:!0,children:Object(b.jsx)(F,{})}),Object(b.jsx)(U.a,{path:"/sixdegrees",exact:!0,children:Object(b.jsx)(T,{})}),Object(b.jsx)(U.a,{path:"/about",exact:!0,children:Object(b.jsx)(L,{})}),Object(b.jsx)(U.a,{path:"/contact",exact:!0,children:Object(b.jsx)(N,{})}),Object(b.jsx)(U.a,{path:"/",exact:!0,children:Object(b.jsx)(f,{})}),Object(b.jsx)(U.a,{path:"*",children:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{style:{fontSize:"72px"},children:"Page not found"}),Object(b.jsx)("p",{children:"Sorry this page could not be found, please use the navigation at the top to locate to a page that exists."}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{})]})})]})})}),Object(b.jsxs)("footer",{style:{paddingTop:"200px",paddingBottom:"50px"},children:["BigFatFilmQuiz is made by Newtinn, \xa9 2021",Object(b.jsx)("a",{rel:"license",href:"http://creativecommons.org/licenses/by/4.0/",children:Object(b.jsx)("img",{alt:"Creative Commons Licence",style:{"border-width":"0"},src:"https://i.creativecommons.org/l/by/4.0/88x31.png"})}),Object(b.jsx)("br",{}),"This work is licensed under a ",Object(b.jsx)("a",{rel:"license",href:"http://creativecommons.org/licenses/by/4.0/",children:"Creative Commons Attribution 4.0 International License"}),"."]})]})},G=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,58)).then((function(t){var s=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;s(e),n(e),i(e),r(e),c(e)}))};c.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(_,{})}),document.getElementById("root")),G()}},[[53,1,2]]]);
//# sourceMappingURL=main.48531f4a.chunk.js.map