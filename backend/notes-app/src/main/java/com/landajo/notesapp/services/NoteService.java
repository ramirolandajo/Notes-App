package com.landajo.notesapp.services;

import lombok.extern.slf4j.Slf4j;
import com.landajo.notesapp.models.NoteModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.landajo.notesapp.repositories.NoteRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class NoteService {

    @Autowired
    NoteRepository noteRepository;

    public NoteModel createNote(NoteModel newNote){
        newNote.setCreated_at(LocalDateTime.now());
        this.noteRepository.save(newNote);
        log.info("Note saved on the DB: " + newNote);
        return newNote;
    }

    public NoteModel updateNote(NoteModel note, Long id) throws Exception {
        log.info("ID provided" + id);
        if (id <= 0){
            log.info("The ID provided is not valid");
            throw new Exception("The ID provided is not valid");
        }

        Optional<NoteModel> noteOp = this.noteRepository.findById(id);

        if (noteOp.isEmpty()){
            log.info("The note you are trying to update is not on the db");
            throw new Exception("The note you are trying to update is not on the db");
        } else {
            NoteModel noteDb = noteOp.get();
            noteDb.setTitle(note.getTitle());
            noteDb.setContent(note.getContent());
            noteDb.setCreated_at(LocalDateTime.now());
            noteDb.setArchived(note.isArchived());

            log.info("The updated note: " + noteDb);
            return this.noteRepository.save(noteDb);
        }
    }

    public List<NoteModel> findAllNotes() {
        return this.noteRepository.findAll();
    }

    public void deleteNote(Long id) throws Exception {
        log.info("ID provided: " + id);
        if (id <= 0){
            log.info("The ID provided is not valid");
            throw new Exception("The ID provided is not valid");
        }
        Optional<NoteModel> noteOp = this.noteRepository.findById(id);

        if (noteOp.isEmpty()){
            log.info("The note you are trying to update is not on the db");
            throw new Exception("The note you are trying to update is not on the db");
        } else {
            this.noteRepository.deleteById(id);
            log.info("The note was deleted successfully");
        }
    }
}
