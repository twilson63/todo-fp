# TodoItem

A todo item has three possible interactions:

* Clicking the checkbox marks the todo as complete by updating its completed value and toggling the class completed on its parent <li>

* Double-clicking the <label> activates editing mode, by toggling the .editing class on its <li>

* Hovering over the todo shows the remove button (.destroy)

## Editing

When editing mode is activated it will hide the other controls and bring forward an input that contains the todo title, which should be focused (.focus()). The edit should be saved on both blur and enter, and the editing class should be removed. Make sure to .trim() the input and then check that it's not empty. If it's empty the todo should instead be destroyed. If escape is pressed during the edit, the edit state should be left and any changes be discarded.

## Why

## Drawbacks

## Example

## Handlers

* [cancelEdit](handlers/cancel-edit)
* [changeText](handlers/change-text)
* [editMode](handlers/edit-mode)
* [removeTodo](handlers/remove-todo)
* [ToggleComplete](handlers/toggle-complete)

## Files

* [source](index.js)
* [test](test.js)

[Return](../../README.md)
