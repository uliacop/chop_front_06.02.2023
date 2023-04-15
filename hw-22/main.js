'use strict';
const bodyEl = $('body');
const containerEl = $('<div></div>').addClass('container');
const inputEl = $('<input>').addClass('form-control js-selector').attr('type', 'text');
const addBtnEl = $('<button></button>').addClass('btn btn-primary js-selector').text('Add').attr('type', 'button');
containerEl.append($('<div></div>').addClass('input-group mb-3').append(inputEl, $('<button></button>').addClass('btn btn-outline-secondary').attr('type', 'button').append(addBtnEl)));
bodyEl.append(containerEl);

addBtnEl.click(() => {
const inputValue = inputEl.val();
if (inputValue) {
const itemEl = $('<div>').addClass('alert alert-dismissible fade show alert-primary').html(inputValue).hide();
containerEl.append(itemEl);
itemEl.slideDown(400);
itemEl.click(() => {
itemEl.slideUp(400, () => {
itemEl.remove();
});
});
inputEl.val('');
}
});