// Generated by CoffeeScript 1.6.2
(function() {
  var DefaultUnitConfig, i, item, species, _i, _len, _ref;

  species = ["sea-creature", "beach-creature", "land-creature"];

  DefaultUnitConfig = (function() {
    function DefaultUnitConfig() {
      this.config = {
        name: "nimo",
        species: "sea-creature",
        view: {
          name: "fish01",
          animateType: "sprite"
        },
        scale: {
          xy: .4,
          x: 1,
          y: 1
        },
        position: {
          x: 0,
          y: 0
        },
        reg: {
          x: 2 / 3,
          y: 1 / 2
        },
        rotation: 0,
        randomRotation: true,
        moveType: "movable",
        moveSpeed: .1,
        rotationType: true,
        rotateSpeed: .1,
        life: {
          total: 1,
          birthTime: 0
        },
        habitat: {
          restricted: true,
          from: "coast",
          to: "deepSea"
        },
        shadow: true
      };
      return this.config;
    }

    return DefaultUnitConfig;

  })();

  window.DefaultUnitConfig = DefaultUnitConfig;

  window.creatureConfig = [
    {
      name: "fish01",
      constructor: function() {
        this.data = new DefaultUnitConfig();
        return this.data.view.name = this.name;
      },
      data: null
    }, {
      name: "fish02",
      constructor: function() {
        this.data = new DefaultUnitConfig();
        return this.data.view.name = this.name;
      },
      data: null
    }, {
      name: "fish03",
      constructor: function() {
        this.data = new DefaultUnitConfig();
        return this.data.view.name = this.name;
      },
      data: null
    }, {
      name: "fish04",
      constructor: function() {
        this.data = new DefaultUnitConfig();
        return this.data.view.name = this.name;
      },
      data: null
    }, {
      name: "fish05",
      constructor: function() {
        this.data = new DefaultUnitConfig();
        return this.data.view.name = this.name;
      },
      data: null
    }, {
      name: "coral01",
      constructor: function() {
        this.data = new DefaultUnitConfig();
        this.data.view.name = this.name;
        this.data.moveType = "fixed";
        this.data.view.animateType = "scale";
        return this.data.shadow = false;
      },
      data: null
    }, {
      name: "coral02",
      constructor: function() {
        this.data = new DefaultUnitConfig();
        this.data.view.name = this.name;
        this.data.moveType = "fixed";
        this.data.view.animateType = "scale";
        return this.data.shadow = false;
      },
      data: null
    }, {
      name: "shark",
      constructor: function() {
        this.data = new DefaultUnitConfig();
        this.data.view.name = this.name;
        this.data.habitat.from = "ocean";
        return this.data.habitat.to = "deepSea";
      },
      data: null
    }, {
      name: "Whale",
      constructor: function() {
        this.data = new DefaultUnitConfig();
        this.data.view.name = this.name;
        this.data.habitat.from = "ocean";
        return this.data.habitat.to = "deepSea";
      },
      data: null
    }, {
      name: "jellyFish",
      constructor: function() {
        this.data = new DefaultUnitConfig();
        this.data.view.name = this.name;
        this.data.habitat.from = "coast";
        this.data.habitat.to = "deepSea";
        return this.data.scale.xy = .2;
      },
      data: null
    }, {
      name: "crab",
      constructor: function() {
        this.data = new DefaultUnitConfig();
        this.data.view.name = this.name;
        this.data.habitat.from = "field";
        this.data.habitat.to = "beach";
        return this.data.shadow = false;
      },
      data: null
    }, {
      name: "Shellfish02",
      constructor: function() {
        this.data = new DefaultUnitConfig();
        this.data.view.name = this.name;
        this.data.habitat.from = "field";
        this.data.habitat.to = "beach";
        this.data.moveType = "fixed";
        return this.data.shadow = false;
      },
      data: null
    }, {
      name: "Satrfish01",
      constructor: function() {
        this.data = new DefaultUnitConfig();
        this.data.view.name = this.name;
        this.data.habitat.from = "field";
        this.data.habitat.to = "beach";
        this.data.moveType = "fixed";
        return this.data.shadow = false;
      },
      data: null
    }, {
      name: "Starfish02",
      constructor: function() {
        this.data = new DefaultUnitConfig();
        this.data.view.name = this.name;
        this.data.habitat.from = "field";
        this.data.habitat.to = "beach";
        this.data.moveType = "fixed";
        return this.data.shadow = false;
      },
      data: null
    }, {
      name: "Starfish03",
      constructor: function() {
        this.data = new DefaultUnitConfig();
        this.data.view.name = this.name;
        this.data.habitat.from = "field";
        this.data.habitat.to = "beach";
        this.data.moveType = "fixed";
        return this.data.shadow = false;
      },
      data: null
    }, {
      name: "Tree01",
      constructor: function() {
        this.data = new DefaultUnitConfig();
        this.data.view.name = this.name;
        this.data.habitat.from = "alpine";
        this.data.habitat.to = "field";
        this.data.moveType = "fixed";
        this.data.view.animateType = "scale";
        return this.data.shadow = false;
      },
      data: null
    }, {
      name: "Tree02",
      constructor: function() {
        this.data = new DefaultUnitConfig();
        this.data.view.name = this.name;
        this.data.habitat.from = "alpine";
        this.data.habitat.to = "field";
        this.data.moveType = "fixed";
        this.data.view.animateType = "scale";
        return this.data.shadow = false;
      },
      data: null
    }, {
      name: "Tree03",
      constructor: function() {
        this.data = new DefaultUnitConfig();
        this.data.view.name = this.name;
        this.data.habitat.from = "alpine";
        this.data.habitat.to = "field";
        this.data.moveType = "fixed";
        this.data.view.animateType = "scale";
        return this.data.shadow = false;
      },
      data: null
    }, {
      name: "Tree04",
      constructor: function() {
        this.data = new DefaultUnitConfig();
        this.data.view.name = this.name;
        this.data.habitat.from = "alpine";
        this.data.habitat.to = "field";
        this.data.moveType = "fixed";
        this.data.view.animateType = "scale";
        return this.data.shadow = false;
      },
      data: null
    }
  ];

  _ref = window.creatureConfig;
  for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
    item = _ref[i];
    item.constructor();
  }

}).call(this);

/*
//@ sourceMappingURL=UnitConfig.map
*/
