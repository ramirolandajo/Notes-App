package controllers;

import lombok.AllArgsConstructor;
import models.NoteModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import services.NoteService;

import java.util.List;

@RestController
@RequestMapping(path = "api/note")
@AllArgsConstructor
public class NoteController {

    @Autowired
    NoteService noteService;

    @PostMapping(path = "/")
    public ResponseEntity<NoteModel> createNote(@RequestBody NoteModel newNote) {
        return new ResponseEntity<>(this.noteService.createNote(newNote), HttpStatus.CREATED);
    }
    @PutMapping(path = "/{id}")
    public ResponseEntity<NoteModel> updateNote(@RequestBody NoteModel note, @PathVariable Long id) throws Exception {
        return new ResponseEntity<>(this.noteService.updateNote(note, id), HttpStatus.OK);
    }
    @GetMapping(path = "/")
    public ResponseEntity<List<NoteModel>> findAllNotes(){
        return new ResponseEntity<>(this.noteService.findAllNotes(), HttpStatus.OK);
    }
    @DeleteMapping(path = "/{id}")
    public ResponseEntity<String> createNote(@PathVariable Long id) throws Exception {
        this.noteService.deleteNote(id);
        return new ResponseEntity<>("Note deleted successfully", HttpStatus.CREATED);
    }
}
