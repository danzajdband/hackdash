/**
 * VIEW: Projects of an Instance
 * 
 */

var Project = require('./ProjectListItem');

module.exports = Backbone.Marionette.CollectionView.extend({

  //--------------------------------------
  //+ PUBLIC PROPERTIES / CONSTANTS
  //--------------------------------------

  tagName: "ul",
  itemView: Project,

  itemViewOptions: function() {
    return {
      isDashboard: this.isDashboard
    };
  },

  //--------------------------------------
  //+ INHERITED / OVERRIDES
  //--------------------------------------
  
  initialize: function(options){
    this.isDashboard = (options && options.isDashboard) || false;
  }

  //--------------------------------------
  //+ PUBLIC METHODS / GETTERS / SETTERS
  //--------------------------------------

  //--------------------------------------
  //+ EVENT HANDLERS
  //--------------------------------------

  //--------------------------------------
  //+ PRIVATE AND PROTECTED METHODS
  //--------------------------------------

});