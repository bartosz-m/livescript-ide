module.exports = 
    activate: ->>        
        require \atom-package-deps .install 'livescript-ide'
        
    deactivate: ->
        @disposables?dispose! 
        @disposables = null
      