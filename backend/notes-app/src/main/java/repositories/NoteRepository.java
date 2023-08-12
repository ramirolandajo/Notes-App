package repositories;

import models.NoteModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoteRepository extends JpaRepository<NoteModel, Long> {
}
