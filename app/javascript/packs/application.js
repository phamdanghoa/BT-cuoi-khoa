// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//= require jquery3
//= require popper
//= require bootstrap-sprockets
//= require dropzone


import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import dropzone from "dropzone"
import 'bootstrap'
import "channels"
require("bootstrap");
require("jquery");
require("dropzone");
Rails.start()
Turbolinks.start()
ActiveStorage.start()
dropzone.start()




