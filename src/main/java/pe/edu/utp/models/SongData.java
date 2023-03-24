package pe.edu.utp.models;

import com.fasterxml.jackson.annotation.JsonInclude;
import org.jaudiotagger.audio.AudioFile;
import org.jaudiotagger.audio.AudioFileIO;
import org.jaudiotagger.audio.exceptions.CannotReadException;
import org.jaudiotagger.audio.exceptions.InvalidAudioFrameException;
import org.jaudiotagger.audio.exceptions.ReadOnlyFileException;
import org.jaudiotagger.tag.FieldKey;
import org.jaudiotagger.tag.Tag;
import org.jaudiotagger.tag.TagException;

import java.io.File;
import java.io.IOException;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class SongData {
    private String fileName;
    private String title;
    private String[] artists;
    private String album;
    private String year;
    private Long length;

    public SongData(File file, String title, String artists, String album, String year, Long length) {
        this.fileName = file.getName();
        this.title = title;
        this.artists = artists.split("/");
        this.album = album;
        this.year = year;
        this.length = length;
    }

    public String getFileName() {
        return fileName;
    }

    public String getTitle() {
        return title;
    }

    public String[] getArtists() {
        return artists;
    }

    public String getAlbum() {
        return album;
    }

    public String getYear() {
        return year;
    }

    public Long getLength() {
        return length;
    }

    public static SongData BuildSongData(File file) {
        try {
            AudioFile audioFile = AudioFileIO.read(file);
            Tag tag = audioFile.getTag();
            String title = tag.getFirst(FieldKey.TITLE);
            String artists = tag.getFirst(FieldKey.ARTIST);
            String album = tag.getFirst(FieldKey.ALBUM);
            String year = tag.getFirst(FieldKey.YEAR);
            long length = audioFile.getAudioHeader().getTrackLength();
            return new SongData(file, title, artists, album, year, length);
        } catch (TagException | CannotReadException | IOException | ReadOnlyFileException | InvalidAudioFrameException e) {
            System.out.println("Error on build song data for: " + file.getPath());
        }
        return null;
    }
}
