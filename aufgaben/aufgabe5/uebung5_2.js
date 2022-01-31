class StopWatch{
  //source = https://jsfiddle.net/dalinhuang/op8ae79j/
    constructor(elem, id, options){   
      this.id = id; 
      this.btn = this.createButton("toggle",() => this.toggle());
      this.timer = document.createElement("span");
      this.offset;
      this.clock;
      this.interval;
      this.options = {};//options || {};
      this.options.delay = 1;//options.delay || 1;
      elem.appendChild(this.timer);
      elem.appendChild(this.btn);
        this.reset();
    }
    createButton(action, handler){
        var btn = document.createElement("button");
      btn.id = this.id + "-" + action;
      btn.innerText = "Start!";
      btn.addEventListener("click", (event)=>{
        handler();
        event.preventDefault();
      })
      return btn;
    }
    toggle(){
        if(!this.interval){
          this.offset = Date.now();
          this.interval = setInterval(() => this.update(), this.options.delay);
          this.btn.innerText = "Stop!";
      }
      else{
          clearInterval(this.interval);
          this.interval = null;
          this.btn.innerText = "Start!";
      }
    }
    reset(){
        this.clock = 0;
      this.render(0);
    }
    update(){
        this.clock += this.delta();
      this.render();
    }
    render() {
      var h = Math.floor(this.clock / (1000 * 60 * 60)) % 24;
      var m = Math.floor(this.clock / (1000 * 60)) % 60;
      var s = Math.floor(this.clock / 1000) % 60;
      var ms = Math.floor(this.clock % 1000);
  
      if (h < 10) {
        h = "0" + h;
      }
      if (m < 10) {
        m = "0" + m;
      }
      if (s < 10) {
        s = "0" + s;
      }
      // if (ms < 100) {
      //   ms = "0" + ms;
      // }
      // if (ms < 10) {
      //   ms = "0" + ms;
      // }
      this.timer.innerText =  h + ':' + m + ':' + s + " " /*+ '::' + ms*/;
    }
    delta() {
      var now = Date.now(),
        d = now - this.offset;
      this.offset = now;
      return d;
    }
  }
  const stopWatches = [];
  function addStopWatch(id){
    const input = document.getElementById(id);
    const ul = document.getElementById("timer-list");
    const li = document.createElement("li");
    const participant = document.createElement("span");
    li.id = id;
    li.style.display = "flex;"
    li.style.flexDirection = "row";
    
    participant.innerText = input.value + " ";
    li.appendChild(participant);
    ul.appendChild(li);
      stopWatches.push(new StopWatch(li, input.value,));
  }