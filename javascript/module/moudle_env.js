
(function probeModuleDefinition() {
  // CommonJS/Node
  if (typeof exports === 'object' && typeof module === 'object')
    console.log('this is CommonJS/Node');
  // AMD
  else if (typeof define === 'function' && define.amd)
    console.log('this is AMD');
  // Window/Global
  else
    console.log('this is Window/Global');
})();
