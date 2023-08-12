package services;

import lombok.extern.slf4j.Slf4j;
import models.NoteModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repositories.NoteRepository;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class NoteService {

    @Autowired
    NoteRepository noteRepository;

    public NoteModel createNote(NoteModel newNote){
        log.info("Note with id: " + newNote.getIdNotes() + " has been saved on the DB");
        return this.noteRepository.save(newNote);
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
            noteDb.setCreated_at(note.getCreated_at());
            noteDb.setArchived(note.isArchived());

            log.info("The updated note: " + noteDb);
            return this.noteRepository.save(noteDb);
        }
    }

    public List<NoteModel> findAllNotes() {
        return this.noteRepository.findAll();
    }

    public void deleteNote(Long id) throws Exception {
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
            this.noteRepository.deleteById(id);
        }
    }
}
