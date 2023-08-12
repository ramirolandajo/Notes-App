package models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
@Entity
@Data
@NoArgsConstructor
@Table(name = "Notes")
public class NoteModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idNotes;
    private String title;
    private String content;
    private LocalDateTime created_at;
    private boolean archived;
}
