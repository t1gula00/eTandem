Template.registerHelper('truncate', function(string, length) {
  var cleanString = s(string).stripTags();
  return s(cleanString).truncate(length);
});

Template.registerHelper('concat', function () {
    return Array.prototype.slice.call(arguments, 0, -1).join('');
});
