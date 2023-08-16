package com.landajo.notesapp.controllers;

import com.landajo.notesapp.models.NoteModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.landajo.notesapp.services.NoteService;

import java.util.List;
@CrossOrigin()
@RestController
@RequestMapping(path = "api/note")
public class NoteController {

    @Autowired
    NoteService noteService;

    @PostMapping(path = "/")
    public ResponseEntity<NoteModel> createNote(@RequestBody NoteModel newNote) {
        return new ResponseEntity<>(this.noteService.createNote(newNote), HttpStatus.OK);
    }
    @PutMapping(path = "/{id}")
    public ResponseEntity<NoteModel> updateNote(@RequestBody NoteModel note, @PathVariable Long id) throws Exception {
        return new ResponseEntity<>(this.noteService.updateNote(note, id), HttpStatus.OK);
    }
    @GetMapping(path = "/unarchived")
    public ResponseEntity<List<NoteModel>> findUnarchivedNotes(){
        return new ResponseEntity<>(this.noteService.findUnarchivedNotes(), HttpStatus.OK);
    }
    @GetMapping(path = "/archived")
    public ResponseEntity<List<NoteModel>> findArchivedNotes(){
        return new ResponseEntity<>(this.noteService.findArchivedNotes(), HttpStatus.OK);
    }
    @DeleteMapping(path = "/{id}")
    public ResponseEntity<String> createNote(@PathVariable Long id) throws Exception {
        this.noteService.deleteNote(id);
        return new ResponseEntity<>("Note deleted successfully", HttpStatus.CREATED);
    }
}
