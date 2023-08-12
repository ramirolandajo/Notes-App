package com.landajo.notesapp.repositories;

import com.landajo.notesapp.models.NoteModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoteRepository extends JpaRepository<NoteModel, Long> {
}
