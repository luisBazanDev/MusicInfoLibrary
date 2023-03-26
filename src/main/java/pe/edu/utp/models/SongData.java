package pe.edu.utp.models;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.mpatric.mp3agic.*;
import pe.edu.utp.Main;

import java.io.File;
import java.io.IOException;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class SongData {
    private String songId;
    private String fileName;
    private String title;
    private String[] artists;
    private String album;
    private String year;
    private Long length;

    public SongData(File file, String title, String artists, String album, String year, Long length, byte[] image, String songId) {
        this.songId = songId;
        this.fileName = file.getName();
        this.title = title;
        this.artists = artists.split("/");
        this.album = album;
        this.year = year;
        this.length = length;
        Main.getImages().put(songId, image);
    }

    public String getSongId() {
        return songId;
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

    public static SongData BuildSongData(String songId, File file) {
        try {
            Mp3File mp3file = new Mp3File(file);
            ID3v2 id3v2Tag;
            if (mp3file.hasId3v2Tag()) {
                id3v2Tag =  mp3file.getId3v2Tag();
            } else return null;
            byte[] img = null;
            if (id3v2Tag.getAlbumImage() != null) {
                img = id3v2Tag.getAlbumImage();
            }
            String title = id3v2Tag.getTitle();
            String artists = id3v2Tag.getArtist();
            String album = id3v2Tag.getAlbum();
            String year = id3v2Tag.getYear();
            long length = mp3file.getLengthInSeconds();
            return new SongData(file, title, artists, album, year, length, img, songId);
        } catch (IOException | InvalidDataException | UnsupportedTagException e) {
            System.out.println("Error on build song data for: " + file.getPath());
        }
        return null;
    }
}
