// Generated by CoffeeScript 1.6.2
(function() {
  var SandboxOcean,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  SandboxOcean = (function() {
    function SandboxOcean() {
      this.update = __bind(this.update, this);
      this.inialize = __bind(this.inialize, this);
      this.stageSetup = __bind(this.stageSetup, this);      this.stageSetup();
      this.inialize();
    }

    SandboxOcean.prototype.stageSetup = function() {
      this.stage = new createjs.Stage("stage");
      window.stage = this.stage;
      createjs.Ticker.setFPS(30);
      return createjs.Ticker.addEventListener("tick", this.update);
    };

    SandboxOcean.prototype.inialize = function() {
      var config, fish;

      window.depthMap = new Image();
      window.depth = new Depth(depthMap);
      this.factory = SpriteFactory.get();
      this.factory.spriteList = [fish01_instance_1, fish02_instance_1, fish03_instance_1, fish04_instance_1, fish05_instance_1, coral01_instance_1, coral02_instance_1, crab_instance_1, jellyFish_instance_1, shark_instance_1, Shellfish02_instance_1, Satrfish01_instance_1, Starfish02_instance_1, Starfish03_instance_1, Tree01_instance_1, Tree02_instance_1, Tree03_instance_1, Tree04_instance_1, turtle_instance_1, Whale_instance_1];
      config = new DefaultUnitConfig();
      config.position.x = 300;
      config.position.y = 300;
      fish = new Fish(config);
      return fish.birth();
    };

    SandboxOcean.prototype.update = function() {
      return this.stage.update();
    };

    return SandboxOcean;

  })();

  window.SandboxOcean = SandboxOcean;

}).call(this);

/*
//@ sourceMappingURL=SandboxOcean.map
*/