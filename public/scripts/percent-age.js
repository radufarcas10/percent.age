function PercentAgeViewModel() {
  var self = this;
  self.title = ko.observable('PERCENTAGE CALCULATOR');
  self.offline = ko.observable('WORKS OFFLINE');
  self.homescreen = ko.observable('ADD TO HOME SCREEN');
  self.calculate = ko.observable('Calculate %');
  self.description = ko.observableArray([
    { what: 'What is', percent: '% of', qMark: '?'},
    { what: 'is what % of', percent: null, qMark: '?'},
    { what: 'is', percent: '% of what?', qMark: null}
  ]);
  self.author = ko.observable('Radu Farcas');
  self.initialValue = ko.observable();
  self.percentageValue = ko.observable();

  console.log(self);
  //Calculus
  self.calcWhatIsPercentOf = function() {

    // if (!self.initialValue || !self.percentageValue) return;

    // var result = document.getElementById('result-one');

    var result = (self.initialValue / 100) * self.percentageValue;

    console.log(self.initialValue.value);
    console.log(self.percentageValue);
    // result.innerText = (result % 2 === 0) ? result : result.toFixed(2);
    return result;
    console.log(result);
  }
};

ko.applyBindings(new PercentAgeViewModel());
