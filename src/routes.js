const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNotesByIdHandler } = require("./handler");

const routes = [
    {
        method : "POST",
        path: "/notes",
        handler: addNoteHandler,
    },
    {
        method: "GET",
        path: "/notes",
        handler:getAllNotesHandler,
    },
    {
        method: "GET",
        path: "/notes/{noteId}",
        handler: getNoteByIdHandler,
    },
    {
        method: "PUT",
        path: "/notes/{noteId}",
        handler: editNoteByIdHandler
    },
    {
        method: "DELETE",
        path: "/notes/{noteId}",
        handler: deleteNotesByIdHandler
    }
];


module.exports = {routes};