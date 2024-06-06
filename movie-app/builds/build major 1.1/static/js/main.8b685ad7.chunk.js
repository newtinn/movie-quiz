(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{42:function(e,t,s){},53:function(e,t,s){"use strict";s.r(t);var n=s(1),i=s.n(n),r=s(21),c=s.n(r),o=(s(42),s(3)),a=s(4),u=s(2),h=s(6),l=s(5),j=s(17),b=s.n(j),p=s(24),d=s(13),O=s(0),x=function(e){Object(h.a)(s,e);var t=Object(l.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).nextRound=n.nextRound.bind(Object(u.a)(n)),n.resetGame=n.resetGame.bind(Object(u.a)(n)),n.contentFadeOut=n.contentFadeOut.bind(Object(u.a)(n)),n}return Object(a.a)(s,[{key:"contentFadeOut",value:function(){document.getElementById("content").className="fade-out",!0===this.props.correct&&this.nextRound(),!1===this.props.correct&&this.resetGame()}},{key:"nextRound",value:function(){this.props.removeQuestion(),this.props.newQuestion(),this.props.nextQuestion()}},{key:"resetGame",value:function(){this.props.resetScore(),this.props.removeQuestion(),this.props.nextQuestion(),this.props.newQuestion(),this.props.newQuestion(),this.props.newQuestion()}},{key:"render",value:function(){return!0===this.props.correct?Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(d.HideUntilLoaded,{animationIn:"fadeIn",imageToLoad:this.props.cover,durationIn:"1000",children:Object(O.jsxs)("div",{id:"content",children:[Object(O.jsx)("img",{src:this.props.cover,alt:"",style:{maxHeight:"400px",paddingBottom:"10px"},class:"img-fluid"}),Object(O.jsx)("h2",{children:"Correct!"}),Object(O.jsxs)("h2",{style:{color:"#27FB6B"},children:["Score: ",this.props.score]}),Object(O.jsxs)("p",{children:["The answer was: ",this.props.answer,".",Object(O.jsx)("br",{}),"Click the button below to go to the next question. "]}),Object(O.jsx)("input",{type:"submit",value:"Next Question",class:"btn btn-primary",onClick:this.contentFadeOut}),Object(O.jsx)("p",{style:{paddingBottom:"150px"}})]})})}):!1===this.props.correct?Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(d.HideUntilLoaded,{animationIn:"fadeIn",imageToLoad:this.props.cover,durationIn:"1000",children:Object(O.jsxs)("div",{class:"fade-in",id:"content",children:[Object(O.jsx)("img",{src:this.props.cover,alt:"",style:{maxHeight:"400px",paddingBottom:"10px"},class:"img-fluid"}),Object(O.jsxs)("h2",{children:["Incorrect!",Object(O.jsx)("br",{}),"The answer was ",this.props.answer,"."]}),Object(O.jsxs)("h2",{style:{color:"#FF5A5F"},children:["Score: ",this.props.score]}),Object(O.jsx)("p",{children:"To play again press the button below."}),Object(O.jsx)("input",{type:"submit",value:"Restart",class:"btn btn-danger",onClick:this.contentFadeOut}),Object(O.jsx)("p",{style:{paddingBottom:"150px"}})]})})}):void 0}}]),s}(i.a.Component),m=function(e){Object(h.a)(s,e);var t=Object(l.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).fadeContentOut=n.fadeContentOut.bind(Object(u.a)(n)),n}return Object(a.a)(s,[{key:"fadeContentOut",value:function(){document.getElementById("content").className="fade-out"}},{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(d.HideUntilLoaded,{animationIn:"fadeInUp",durationIn:"10000",imageToLoad:this.props.question.cover,children:Object(O.jsxs)("div",{id:"content",children:[Object(O.jsx)("img",{src:this.props.question.cover,alt:"",style:{maxHeight:"400px"},class:"img-fluid"}),Object(O.jsxs)("h1",{style:{paddingTop:"15px"},children:["Who is this ",this.props.question.sex,"?"]}),Object(O.jsx)("input",{type:"text",id:"userAnswer",className:"text-line",placeholder:"Type your answer here..."}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"submit",value:"Submit",className:"btn btn-primary",onClick:this.fadeContentOut&&this.props.checkAnswer}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("p",{style:{paddingBottom:"150px"}})]})})})}}]),s}(i.a.Component),v=function(e){Object(h.a)(s,e);var t=Object(l.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={answered:!1,correct:null},n.checkAnswer=n.checkAnswer.bind(Object(u.a)(n)),n.nextQuestion=n.nextQuestion.bind(Object(u.a)(n)),n}return Object(a.a)(s,[{key:"checkAnswer",value:function(){var e=document.getElementById("userAnswer").value;(e=e.trim()).toLowerCase()===this.props.question.actor.toLowerCase()?(this.props.increaseScore(),this.setState({correct:!0})):this.setState({correct:!1}),this.setState({answered:!0})}},{key:"nextQuestion",value:function(){this.setState({answered:!1,correct:null})}},{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:this.state.answered?Object(O.jsx)(x,{correct:this.state.correct,answer:this.props.question.actor,newQuestion:this.props.newQuestion,removeQuestion:this.props.removeQuestion,resetScore:this.props.resetScore,nextQuestion:this.nextQuestion,score:this.props.score,cover:this.props.question.cover,answered:this.state.answered}):Object(O.jsx)(m,{question:this.props.question,checkAnswer:this.checkAnswer})})}}]),s}(i.a.Component),f=(new AbortController).signal,g=function(e){Object(h.a)(s,e);var t=Object(l.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e))._mounted=!1,n.getQuestion=n.getQuestion.bind(Object(u.a)(n)),n.removeQuestion=n.removeQuestion.bind(Object(u.a)(n)),n.state={questionAvailable:!1,currentQueue:[]},n}return Object(a.a)(s,[{key:"getQuestion",value:function(){var e=Object(p.a)(b.a.mark((function e(){var t=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0===this.props.queue.length&&this.setState({questionAvailable:!1}),!0!==this._mounted){e.next=4;break}return e.next=4,fetch("https://bigfatmoviequiz.herokuapp.com/getActorAPI",{signal:f}).then((function(e){return e.json()})).then((function(e){if(!0===t._mounted)if(-1===t.state.currentQueue.indexOf(e.actorID)){var s=t.state.currentQueue;s.push(e.actorID),t.setState({currentQueue:s}),t.props.enqueue(e),t.setState({questionAvailable:!0})}else t.getQuestion()})).catch((function(e){"AbortError"!==e.name&&t.getQuestion()}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"removeQuestion",value:function(){1===this.props.queue.length&&this.setState({questionAvailable:!1}),this.props.dequeue()}},{key:"componentDidMount",value:function(){var e=this;return this._mounted=!0,0===this.props.queue.length?(this.getQuestion(),this.getQuestion(),this.getQuestion()):this.setState({questionAvailable:!0}),function(){return e.setState({_mounted:!1})}}},{key:"componentWillUnmount",value:function(){this._mounted=!1}},{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:this.state.questionAvailable?Object(O.jsx)(v,{question:this.props.queue[0],gameOver:this.props.gameOver,increaseScore:this.props.increaseScore,resetScore:this.props.resetScore,removeQuestion:this.removeQuestion,newQuestion:this.getQuestion,score:this.props.score}):Object(O.jsx)("div",{className:"contentBox",children:Object(O.jsx)("div",{class:"fade-in",children:Object(O.jsx)("div",{class:"spinner-border text-light",role:"status"})})})})}}]),s}(i.a.Component),y=function(e){Object(h.a)(s,e);var t=Object(l.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={queue:[],queueMaxSize:3,question:null,score:0,gameOver:!1},n.enqueue=n.enqueue.bind(Object(u.a)(n)),n.dequeue=n.dequeue.bind(Object(u.a)(n)),n.checkFull=n.checkFull.bind(Object(u.a)(n)),n.checkEmpty=n.checkEmpty.bind(Object(u.a)(n)),n.increaseScore=n.increaseScore.bind(Object(u.a)(n)),n.resetScore=n.resetScore.bind(Object(u.a)(n)),n}return Object(a.a)(s,[{key:"enqueue",value:function(e){if(!1===this.checkFull()){var t=this.state.queue;t.push(e),this.setState({queue:t})}}},{key:"dequeue",value:function(){if(!1===this.checkEmpty()){var e=this.state.queue;e.shift(),this.setState({queue:e})}}},{key:"checkEmpty",value:function(){return 0===this.state.queue.length}},{key:"checkFull",value:function(){return this.state.queue.length===this.state.queueMaxSize}},{key:"increaseScore",value:function(){var e=this.state.score;e+=1,this.setState({score:e})}},{key:"resetScore",value:function(){this.state.score;this.setState({score:0,gameOver:!1})}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"fade-in",children:[Object(O.jsx)("h1",{children:"Easy mode"}),Object(O.jsx)("p",{children:"Guess the actor/actress"}),Object(O.jsx)(g,{enqueue:this.enqueue,dequeue:this.dequeue,checkEmpty:this.checkEmpty,checkFull:this.checkFull,queue:this.state.queue,gameOver:this.state.gameOver,increaseScore:this.increaseScore,resetScore:this.resetScore,score:this.state.score,controller:this.controller})]})}}]),s}(i.a.Component),w=s.p+"static/media/movie.10974783.jpg",k=function(e){Object(h.a)(s,e);var t=Object(l.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"fade-in",children:[Object(O.jsx)("h1",{style:{fontSize:"72px"},children:"Home"}),Object(O.jsx)("img",{src:w,style:{maxHeight:"300px",padding:"15px"},className:"img-fluid",alt:""}),Object(O.jsx)("h4",{children:"The Big Fat Film Quiz"}),Object(O.jsx)("p",{children:"A film quiz app"}),Object(O.jsx)("h1",{style:{paddingBottom:"10px"},children:"Want to play?"}),Object(O.jsx)("table",{style:{marginLeft:"auto",marginRight:"auto"},children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:Object(O.jsx)("a",{href:"/guessactor",children:Object(O.jsx)("input",{value:"Easy",type:"submit",className:"btn btn-info",style:{fontSize:"24px"}})})}),Object(O.jsx)("th",{children:Object(O.jsx)("a",{href:"/guessmovie",children:Object(O.jsx)("input",{value:"Medium",type:"submit",className:"btn btn-info",style:{fontSize:"24px"}})})}),Object(O.jsx)("th",{children:Object(O.jsx)("a",{href:"/sixdegrees",children:Object(O.jsx)("input",{value:"Hard",type:"submit",className:"btn btn-info",style:{fontSize:"24px"}})})})]})}),Object(O.jsxs)("p",{children:[Object(O.jsx)("br",{}),"There is information about how each gamemode works if you scroll down.",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("h1",{children:Object(O.jsx)("u",{children:"Gamemodes"})})]}),Object(O.jsx)("h3",{children:"Easy"}),Object(O.jsxs)("p",{children:["In this gamemode you will be given an image of an actor or actress and from that image",Object(O.jsx)("br",{}),"you will have to guess who the actor/actress is."]}),Object(O.jsx)("br",{}),Object(O.jsx)("h3",{children:"Medium"}),Object(O.jsxs)("p",{children:["In this gamemode you will be given an image of two actors/actresses and from those images",Object(O.jsx)("br",{}),"you will have to guess what film both of them have been in."]}),Object(O.jsx)("br",{}),Object(O.jsx)("h3",{children:"Hard"}),Object(O.jsxs)("p",{children:["In this gamemode you will be given an actor/actress and a film.",Object(O.jsx)("br",{}),"From this actor/actress mentioned there will be another actor/actress they have done",Object(O.jsx)("br",{}),"work with who has featured in the film mentioned in the question.",Object(O.jsx)("br",{}),"Your task would be to find the actor/actress who is the link between the film and the actor/actress mentioned."]}),Object(O.jsx)("p",{style:{paddingBottom:"150px"}})]})})}}]),s}(i.a.Component),q=function(e){Object(h.a)(s,e);var t=Object(l.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).nextRound=n.nextRound.bind(Object(u.a)(n)),n.resetGame=n.resetGame.bind(Object(u.a)(n)),n.contentFadeOut=n.contentFadeOut.bind(Object(u.a)(n)),n}return Object(a.a)(s,[{key:"contentFadeOut",value:function(){document.getElementById("content").className="fade-out",!0===this.props.correct&&this.nextRound(),!1===this.props.correct&&this.resetGame()}},{key:"nextRound",value:function(){this.props.removeQuestion(),this.props.newQuestion(),this.props.nextQuestion()}},{key:"resetGame",value:function(){this.props.resetScore(),this.props.removeQuestion(),this.props.nextQuestion(),this.props.newQuestion(),this.props.newQuestion(),this.props.newQuestion()}},{key:"render",value:function(){return!0===this.props.correct?Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(d.HideUntilLoaded,{animationIn:"fadeInUp",imageToLoad:this.props.cover,durationIn:"1000",Spinner:function(){return Object(O.jsx)("div",{class:"spinner-border text-light",role:"status"})},children:Object(O.jsxs)("div",{class:"fade-in",id:"content",children:[Object(O.jsx)("img",{src:this.props.cover,alt:"",style:{maxHeight:"400px",paddingBottom:"10px"},class:"img-fluid"}),Object(O.jsx)("h2",{children:"Correct!"}),Object(O.jsxs)("h2",{style:{color:"#27FB6B"},children:["Score: ",this.props.score]}),Object(O.jsxs)("p",{children:["The answer was: ",this.props.answer,".",Object(O.jsx)("br",{}),"Click the button below to go to the next question. "]}),Object(O.jsx)("input",{type:"submit",value:"Next Question",class:"btn btn-primary",onClick:this.contentFadeOut}),Object(O.jsx)("p",{style:{paddingBottom:"150px"}})]})})}):!1===this.props.correct?Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(d.HideUntilLoaded,{animationIn:"fadeInUp",imageToLoad:this.props.cover,durationIn:"1000",Spinner:function(){return Object(O.jsx)("div",{class:"spinner-border text-light",role:"status"})},children:Object(O.jsxs)("div",{class:"fade-in",id:"content",children:[Object(O.jsx)("img",{src:this.props.cover,alt:"",style:{maxHeight:"400px",paddingBottom:"10px"},class:"img-fluid"}),Object(O.jsxs)("h2",{children:["Incorrect!",Object(O.jsx)("br",{}),"The answer was ",this.props.answer,"."]}),Object(O.jsxs)("h2",{style:{color:"#FF5A5F"},children:["Score: ",this.props.score]}),Object(O.jsx)("p",{children:"To play again press the button below."}),Object(O.jsx)("input",{type:"submit",value:"Restart",class:"btn btn-danger",onClick:this.contentFadeOut}),Object(O.jsx)("p",{style:{paddingBottom:"150px"}})]})})}):void 0}}]),s}(i.a.Component),S=function(e){Object(h.a)(s,e);var t=Object(l.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).fadeContentOut=n.fadeContentOut.bind(Object(u.a)(n)),n}return Object(a.a)(s,[{key:"fadeContentOut",value:function(){document.getElementById("content").className="fade-out"}},{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(d.HideUntilLoaded,{animationIn:"fadeInUp",durationIn:"10000",imageToLoad:this.props.question.actor1Cover&&this.props.question.actor2Cover,children:Object(O.jsxs)("div",{id:"content",children:[Object(O.jsx)("img",{src:this.props.question.actor1Cover,alt:"",style:{maxHeight:"400px",padding:"5px"},class:"img-fluid"}),Object(O.jsx)("img",{src:this.props.question.actor2Cover,alt:"",style:{maxHeight:"400px",padding:"5px"},class:"img-fluid"}),Object(O.jsxs)("h3",{style:{paddingTop:"15px"},children:["What ",this.props.question.genre," movie, released in ",this.props.question.year,",",Object(O.jsx)("br",{}),"has both ",this.props.question.actor1," and ",this.props.question.actor2," been in?"]}),Object(O.jsx)("input",{type:"text",id:"userAnswer",className:"text-line",placeholder:"Type your answer here..."}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"submit",value:"Submit",className:"btn btn-primary",onClick:this.fadeContentOut&&this.props.checkAnswer}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("p",{style:{paddingBottom:"150px"}})]})})})}}]),s}(i.a.Component),Q=function(e){Object(h.a)(s,e);var t=Object(l.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={answered:!1,correct:null},n.checkAnswer=n.checkAnswer.bind(Object(u.a)(n)),n.nextQuestion=n.nextQuestion.bind(Object(u.a)(n)),n}return Object(a.a)(s,[{key:"checkAnswer",value:function(){var e=document.getElementById("userAnswer").value;(e=e.trim()).toLowerCase()===this.props.question.movie.toLowerCase()?(this.props.increaseScore(),this.setState({correct:!0})):this.setState({correct:!1}),this.setState({answered:!0})}},{key:"nextQuestion",value:function(){this.setState({answered:!1,correct:null})}},{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:this.state.answered?Object(O.jsx)(q,{correct:this.state.correct,answer:this.props.question.movie,newQuestion:this.props.newQuestion,removeQuestion:this.props.removeQuestion,resetScore:this.props.resetScore,nextQuestion:this.nextQuestion,score:this.props.score,cover:this.props.question.movieCover,answered:this.state.answered}):Object(O.jsx)(S,{question:this.props.question,checkAnswer:this.checkAnswer})})}}]),s}(i.a.Component),F=new AbortController,C=F.signal,A=function(e){Object(h.a)(s,e);var t=Object(l.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e))._mounted=!1,n.getQuestion=n.getQuestion.bind(Object(u.a)(n)),n.removeQuestion=n.removeQuestion.bind(Object(u.a)(n)),n.state={questionAvailable:!1,currentQueue:[]},n}return Object(a.a)(s,[{key:"getQuestion",value:function(){var e=Object(p.a)(b.a.mark((function e(){var t=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0===this.props.queue.length&&this.setState({questionAvailable:!1}),!0!==this._mounted){e.next=4;break}return e.next=4,fetch("https://bigfatmoviequiz.herokuapp.com/getMovieAPI",{signal:C}).then((function(e){return e.json()})).then((function(e){if(!0===t._mounted)if(-1===t.state.currentQueue.indexOf(e.actorID)){var s=t.state.currentQueue;s.push([e.actor1ID,e.actor2ID,e.movieID]),t.setState({currentQueue:s}),t.props.enqueue(e),t.setState({questionAvailable:!0})}else console.log("data already exists"),t.getQuestion()})).catch((function(e){"AbortError"!==e.name&&t.getQuestion()}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"removeQuestion",value:function(){1===this.props.queue.length&&this.setState({questionAvailable:!1}),this.props.dequeue()}},{key:"componentDidMount",value:function(){var e=this;return this._mounted=!0,0===this.props.queue.length?(this.getQuestion(),this.getQuestion(),this.getQuestion()):this.setState({questionAvailable:!0}),function(){return e.setState({_mounted:!1})}}},{key:"componentWillUnmount",value:function(){F.abort(),this._mounted=!1}},{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:this.state.questionAvailable?Object(O.jsx)(Q,{question:this.props.queue[0],gameOver:this.props.gameOver,increaseScore:this.props.increaseScore,resetScore:this.props.resetScore,removeQuestion:this.removeQuestion,newQuestion:this.getQuestion,score:this.props.score}):Object(O.jsx)("div",{className:"contentBox",children:Object(O.jsx)("div",{class:"fade-in",children:Object(O.jsx)("div",{class:"spinner-border text-light",role:"status"})})})})}}]),s}(i.a.Component),I=function(e){Object(h.a)(s,e);var t=Object(l.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={queue:[],queueMaxSize:3,question:null,score:0,gameOver:!1},n.enqueue=n.enqueue.bind(Object(u.a)(n)),n.dequeue=n.dequeue.bind(Object(u.a)(n)),n.checkFull=n.checkFull.bind(Object(u.a)(n)),n.checkEmpty=n.checkEmpty.bind(Object(u.a)(n)),n.increaseScore=n.increaseScore.bind(Object(u.a)(n)),n.resetScore=n.resetScore.bind(Object(u.a)(n)),n}return Object(a.a)(s,[{key:"enqueue",value:function(e){if(!1===this.checkFull()){var t=this.state.queue;t.push(e),this.setState({queue:t})}}},{key:"dequeue",value:function(){if(!1===this.checkEmpty()){var e=this.state.queue;e.shift(),this.setState({queue:e})}}},{key:"checkEmpty",value:function(){return 0===this.state.queue.length}},{key:"checkFull",value:function(){return this.state.queue.length===this.state.queueMaxSize}},{key:"increaseScore",value:function(){var e=this.state.score;e+=1,this.setState({score:e})}},{key:"resetScore",value:function(){this.state.score;this.setState({score:0,gameOver:!1})}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"fade-in",children:[Object(O.jsx)("h1",{children:"Medium mode"}),Object(O.jsx)("p",{children:"Guess the movie that two actors/actresses have been in"}),Object(O.jsx)(A,{enqueue:this.enqueue,dequeue:this.dequeue,checkEmpty:this.checkEmpty,checkFull:this.checkFull,queue:this.state.queue,gameOver:this.state.gameOver,increaseScore:this.increaseScore,resetScore:this.resetScore,score:this.state.score,controller:this.controller})]})}}]),s}(i.a.Component),B=function(e){Object(h.a)(s,e);var t=Object(l.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).nextRound=n.nextRound.bind(Object(u.a)(n)),n.resetGame=n.resetGame.bind(Object(u.a)(n)),n.contentFadeOut=n.contentFadeOut.bind(Object(u.a)(n)),n}return Object(a.a)(s,[{key:"contentFadeOut",value:function(){document.getElementById("content").className="fade-out",!0===this.props.correct&&this.nextRound(),!1===this.props.correct&&this.resetGame()}},{key:"nextRound",value:function(){this.props.removeQuestion(),this.props.newQuestion(),this.props.nextQuestion()}},{key:"resetGame",value:function(){this.props.resetScore(),this.props.removeQuestion(),this.props.nextQuestion(),this.props.newQuestion(),this.props.newQuestion(),this.props.newQuestion()}},{key:"render",value:function(){return!0===this.props.correct?Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(d.HideUntilLoaded,{animationIn:"fadeIn",imageToLoad:this.props.cover,durationIn:"1000",children:Object(O.jsxs)("div",{id:"content",children:[Object(O.jsx)("img",{src:this.props.cover,alt:"",style:{maxHeight:"400px",paddingBottom:"10px"},class:"img-fluid"}),Object(O.jsx)("h2",{children:"Correct!"}),Object(O.jsxs)("h2",{style:{color:"#27FB6B"},children:["Score: ",this.props.score]}),Object(O.jsxs)("p",{children:["The answer was: ",this.props.answer,".",Object(O.jsx)("br",{}),"Click the button below to go to the next question. "]}),Object(O.jsx)("input",{type:"submit",value:"Next Question",class:"btn btn-primary",onClick:this.contentFadeOut}),Object(O.jsx)("p",{style:{paddingBottom:"150px"}})]})})}):!1===this.props.correct?Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(d.HideUntilLoaded,{animationIn:"fadeIn",imageToLoad:this.props.cover,durationIn:"1000",children:Object(O.jsxs)("div",{class:"fade-in",id:"content",children:[Object(O.jsx)("img",{src:this.props.cover,alt:"",style:{maxHeight:"400px",paddingBottom:"10px"},class:"img-fluid"}),Object(O.jsxs)("h2",{children:["Incorrect!",Object(O.jsx)("br",{}),"The answer was ",this.props.answer,"."]}),Object(O.jsxs)("h2",{style:{color:"#FF5A5F"},children:["Score: ",this.props.score]}),Object(O.jsx)("p",{children:"To play again press the button below."}),Object(O.jsx)("input",{type:"submit",value:"Restart",class:"btn btn-danger",onClick:this.contentFadeOut}),Object(O.jsx)("p",{style:{paddingBottom:"150px"}})]})})}):void 0}}]),s}(i.a.Component),T=function(e){Object(h.a)(s,e);var t=Object(l.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).fadeContentOut=n.fadeContentOut.bind(Object(u.a)(n)),n}return Object(a.a)(s,[{key:"fadeContentOut",value:function(){document.getElementById("content").className="fade-out"}},{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(d.HideUntilLoaded,{animationIn:"fadeInUp",durationIn:"10000",imageToLoad:this.props.question.cover1&&this.props.question.cover2,children:Object(O.jsxs)("div",{id:"content",children:[Object(O.jsx)("img",{src:this.props.question.cover1,alt:"",style:{maxHeight:"400px",padding:"5px"},class:"img-fluid"}),Object(O.jsx)("img",{src:this.props.question.cover2,alt:"",style:{maxHeight:"400px",padding:"5px"},class:"img-fluid"}),Object(O.jsx)("h3",{style:{paddingTop:"15px"},children:this.props.question.question}),Object(O.jsx)("input",{type:"text",id:"userAnswer",className:"text-line",placeholder:"Type your answer here..."}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"submit",value:"Submit",className:"btn btn-primary",onClick:this.fadeContentOut&&this.props.checkAnswer}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("p",{style:{paddingBottom:"150px"}})]})})})}}]),s}(i.a.Component),E=function(e){Object(h.a)(s,e);var t=Object(l.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={answered:!1,correct:null},n.checkAnswer=n.checkAnswer.bind(Object(u.a)(n)),n.nextQuestion=n.nextQuestion.bind(Object(u.a)(n)),n}return Object(a.a)(s,[{key:"checkAnswer",value:function(){var e=document.getElementById("userAnswer").value;(e=e.trim()).toLowerCase()===this.props.question.answer.toLowerCase()?(this.props.increaseScore(),this.setState({correct:!0})):this.setState({correct:!1}),this.setState({answered:!0})}},{key:"nextQuestion",value:function(){this.setState({answered:!1,correct:null})}},{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:this.state.answered?Object(O.jsx)(B,{correct:this.state.correct,answer:this.props.question.answer,newQuestion:this.props.newQuestion,removeQuestion:this.props.removeQuestion,resetScore:this.props.resetScore,nextQuestion:this.nextQuestion,score:this.props.score,cover:this.props.question.answerCover,answered:this.state.answered}):Object(O.jsx)(T,{question:this.props.question,checkAnswer:this.checkAnswer})})}}]),s}(i.a.Component),L=new AbortController,N=L.signal,H=function(e){Object(h.a)(s,e);var t=Object(l.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e))._mounted=!1,n.getQuestion=n.getQuestion.bind(Object(u.a)(n)),n.removeQuestion=n.removeQuestion.bind(Object(u.a)(n)),n.state={questionAvailable:!1,currentQueue:[]},n}return Object(a.a)(s,[{key:"getQuestion",value:function(){var e=Object(p.a)(b.a.mark((function e(){var t=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0===this.props.queue.length&&this.setState({questionAvailable:!1}),!0!==this._mounted){e.next=4;break}return e.next=4,fetch("https://bigfatmoviequiz.herokuapp.com/sixdegreesAPI",{signal:N}).then((function(e){return e.json()})).then((function(e){if(!0===t._mounted)if(-1===t.state.currentQueue.indexOf(e.answer)){var s=t.state.currentQueue;s.push(e.answer),t.setState({currentQueue:s}),t.props.enqueue(e),t.setState({questionAvailable:!0})}else t.getQuestion()})).catch((function(e){"AbortError"!==e.name&&t.getQuestion()}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"removeQuestion",value:function(){1===this.props.queue.length&&this.setState({questionAvailable:!1}),this.props.dequeue()}},{key:"componentDidMount",value:function(){var e=this;return this._mounted=!0,0===this.props.queue.length?(this.getQuestion(),this.getQuestion(),this.getQuestion()):this.setState({questionAvailable:!0}),function(){return e.setState({_mounted:!1})}}},{key:"componentWillUnmount",value:function(){L.abort(),this._mounted=!1}},{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:this.state.questionAvailable?Object(O.jsx)(E,{question:this.props.queue[0],gameOver:this.props.gameOver,increaseScore:this.props.increaseScore,resetScore:this.props.resetScore,removeQuestion:this.removeQuestion,newQuestion:this.getQuestion,score:this.props.score}):Object(O.jsx)("div",{className:"contentBox",children:Object(O.jsx)("div",{class:"fade-in",children:Object(O.jsx)("div",{class:"spinner-border text-light",role:"status"})})})})}}]),s}(i.a.Component),z=function(e){Object(h.a)(s,e);var t=Object(l.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={queue:[],queueMaxSize:3,question:null,score:0,gameOver:!1},n.enqueue=n.enqueue.bind(Object(u.a)(n)),n.dequeue=n.dequeue.bind(Object(u.a)(n)),n.checkFull=n.checkFull.bind(Object(u.a)(n)),n.checkEmpty=n.checkEmpty.bind(Object(u.a)(n)),n.increaseScore=n.increaseScore.bind(Object(u.a)(n)),n.resetScore=n.resetScore.bind(Object(u.a)(n)),n}return Object(a.a)(s,[{key:"enqueue",value:function(e){if(!1===this.checkFull()){var t=this.state.queue;t.push(e),this.setState({queue:t})}}},{key:"dequeue",value:function(){if(!1===this.checkEmpty()){var e=this.state.queue;e.shift(),this.setState({queue:e})}}},{key:"checkEmpty",value:function(){return 0===this.state.queue.length}},{key:"checkFull",value:function(){return this.state.queue.length===this.state.queueMaxSize}},{key:"increaseScore",value:function(){var e=this.state.score;e+=1,this.setState({score:e})}},{key:"resetScore",value:function(){this.state.score;this.setState({score:0,gameOver:!1})}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"fade-in",children:[Object(O.jsx)("h1",{children:"Hard mode"}),Object(O.jsx)("p",{children:"Six degrees of separation"}),Object(O.jsx)(H,{enqueue:this.enqueue,dequeue:this.dequeue,checkEmpty:this.checkEmpty,checkFull:this.checkFull,queue:this.state.queue,gameOver:this.state.gameOver,increaseScore:this.increaseScore,resetScore:this.resetScore,score:this.state.score,controller:this.controller})]})}}]),s}(i.a.Component),_=function(e){Object(h.a)(s,e);var t=Object(l.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{style:{fontSize:"72px"},children:"About"}),Object(O.jsxs)("p",{children:["Welcome to the about page!",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"The Big Fat Film Quiz is a website that is about testing your knowledge on films.",Object(O.jsx)("br",{}),"To really test your knowledge there are three gamemodes. From easy to hard, there are questions for everyone!",Object(O.jsx)("br",{}),Object(O.jsx)("br",{})]}),Object(O.jsxs)("p",{style:{fontSize:"10px"},children:["Copyright Information:",Object(O.jsx)("br",{}),"I must state that in NO way, shape or form am I intending to infringe rights of the copyright holder.",Object(O.jsx)("br",{}),"Content used is strictly for research/reviewing purposes and to help educate. All under the Fair Use law.",Object(O.jsx)("br",{}),'"Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for "fair use" for purposes such as ',Object(O.jsx)("br",{}),"criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing.",Object(O.jsx)("br",{}),'Non-profit, educational or personal use tips the balance in favor of fair use."',Object(O.jsx)("br",{}),"All these rights are owned by IMDb and I do not intend to infringe these rights."]}),Object(O.jsx)("h2",{children:"About the creator"}),Object(O.jsxs)("p",{children:["Hey! My name's Newtinn and I created this app. This is my first website that I have created and put online.",Object(O.jsx)("br",{}),"Before this website, I have mostly created games in Unity and GameMaker: Studio.",Object(O.jsx)("br",{}),"If you want to check those out check out my itch.io here:",Object(O.jsx)("br",{}),Object(O.jsx)("a",{href:"https://newtinn.itch.io/",target:"_blank",children:Object(O.jsx)("input",{value:"itch.io",type:"submit",className:"btn btn-info"})}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Some of my interests include:",Object(O.jsx)("br",{}),"\u2022 Gaming",Object(O.jsx)("br",{}),"\u2022 Listening to lofi",Object(O.jsx)("br",{}),"\u2022 Watching sports",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"If you want to contact me go to the contact page!"]})]})}}]),s}(i.a.Component),U=function(e){Object(h.a)(s,e);var t=Object(l.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{style:{fontSize:"72px"},children:"Contact"}),Object(O.jsxs)("p",{children:["Welcome to the contact page!",Object(O.jsx)("br",{}),"If you want to send an inquiry about the quiz or just want to say hi to the creator, you have come to the right place!",Object(O.jsx)("br",{}),"Contact details:",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Email: newtinn@hotmail.com",Object(O.jsx)("br",{}),"Twitter: @newtinn - ",Object(O.jsx)("a",{href:"https://www.twitter.com/@newtinn",target:"_blank",children:Object(O.jsx)("input",{type:"submit",value:"Twitter",className:"btn btn-info"})}),Object(O.jsx)("br",{}),"Youtube: newtinn - ",Object(O.jsx)("a",{href:"https://www.youtube.com/channel/UCo48YTr8_mMz_U8GOzmV_bg",target:"_blank",children:Object(O.jsx)("input",{type:"submit",value:"Youtube",className:"btn btn-danger"})})]}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("p",{style:{paddingBottom:"150px"}})]})}}]),s}(i.a.Component),G=s(56),M=s(57),R=s(36),D=s(9);var W=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(G.a,{bg:"transparent",variant:"dark",expand:"lg",children:[Object(O.jsx)(G.a.Toggle,{}),Object(O.jsx)(G.a.Collapse,{children:Object(O.jsxs)(M.a,{className:"justify-content-end",style:{width:"100%"},children:[Object(O.jsx)(M.a.Link,{href:"/",children:Object(O.jsx)("h1",{style:{padding:"10px",textAlign:"left"},children:"Home"})}),Object(O.jsx)(M.a.Link,{href:"/about",children:Object(O.jsx)("h1",{style:{padding:"10px",textAlign:"left"},children:"About"})}),Object(O.jsx)(M.a.Link,{href:"/contact",children:Object(O.jsx)("h1",{style:{padding:"10px",textAlign:"left"},children:"Contact"})})]})})]}),Object(O.jsx)("div",{style:{paddingLeft:"20px"},children:Object(O.jsx)(R.a,{children:Object(O.jsxs)(D.c,{children:[Object(O.jsx)(D.a,{path:"/guessactor",exact:!0,children:Object(O.jsx)(y,{})}),Object(O.jsx)(D.a,{path:"/guessmovie",exact:!0,children:Object(O.jsx)(I,{})}),Object(O.jsx)(D.a,{path:"/sixdegrees",exact:!0,children:Object(O.jsx)(z,{})}),Object(O.jsx)(D.a,{path:"/about",exact:!0,children:Object(O.jsx)(_,{})}),Object(O.jsx)(D.a,{path:"/contact",exact:!0,children:Object(O.jsx)(U,{})}),Object(O.jsx)(D.a,{path:"/",exact:!0,children:Object(O.jsx)(k,{})}),Object(O.jsx)(D.a,{path:"*",children:Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{style:{fontSize:"72px"},children:"Page not found"}),Object(O.jsx)("p",{children:"Sorry this page could not be found, please use the navigation at the top to locate to a page that exists."}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{})]})})]})})}),Object(O.jsxs)("footer",{style:{paddingTop:"200px",paddingBottom:"50px"},children:["BigFatFilmQuiz is made by Newtinn, \xa9 2021",Object(O.jsx)("a",{rel:"license",href:"http://creativecommons.org/licenses/by/4.0/",children:Object(O.jsx)("img",{alt:"Creative Commons Licence",style:{"border-width":"0"},src:"https://i.creativecommons.org/l/by/4.0/88x31.png"})}),Object(O.jsx)("br",{}),"This work is licensed under a ",Object(O.jsx)("a",{rel:"license",href:"http://creativecommons.org/licenses/by/4.0/",children:"Creative Commons Attribution 4.0 International License"}),"."]})]})},P=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,58)).then((function(t){var s=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;s(e),n(e),i(e),r(e),c(e)}))};c.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(W,{})}),document.getElementById("root")),P()}},[[53,1,2]]]);
//# sourceMappingURL=main.8b685ad7.chunk.js.map