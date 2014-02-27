/// <reference path="knockout-3.0.0.debug.js" />
/// <reference path="jquery-ui-1.8.24.js" />
/// <reference path="jquery-1.8.2.min.js" />
/// <reference path="ko-projected-observable.js" />
/// <reference path="jquery.unobtrusive-ajax.js" />

$(document).ready(function() {
    var data = [
        { Id: 1, Name: "Ball Handling" },
        { Id: 2, Name: "Passing" },
        { Id: 3, Name: "Shooting" },
        { Id: 4, Name: "Rebounding" },
        { Id: 5, Name: "Transition" },
        { Id: 6, Name: "Defense" },
        { Id: 7, Name: "Team Offense" },
        { Id: 8, Name: "Team Defense" }
    ];

    var viewModel = {

        // data
        tags: ko.observableArray(data),
        tagToAdd: ko.observable(""),

        // behaviors
        addTag: function() {
            this.tags.push({ Name: this.tagToAdd() });
        }
    };

    ko.applyBindings(viewModel);

});
