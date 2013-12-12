"use strict";

(function () {
  $.ajax({
    url: "agents.json"
  }).done(function (data) {
    console.log(data)
  }).fail(function (error) {
    console.log(error)
  })
})()
