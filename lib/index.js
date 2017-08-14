module.exports = {
  activate: async function(){
    return require('atom-package-deps').install('livescript-ide');
  },
  deactivate: function(){
    var ref$;
    if ((ref$ = this.disposables) != null) {
      ref$.dispose();
    }
    return this.disposables = null;
  }
};
//# sourceMappingURL=/home/bartek/Projekty/atom/livescript-ide/ide/lib/index.js.map
