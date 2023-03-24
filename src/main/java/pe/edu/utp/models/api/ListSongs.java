package pe.edu.utp.models.api;

import com.fasterxml.jackson.annotation.JsonInclude;
import pe.edu.utp.models.SongData;

import java.util.Date;
import java.util.List;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class ListSongs {
    private int size;
    private Date date;
    private List<SongData> songs;

    public ListSongs (List<SongData> songs) {
        this.size = songs.size();
        this.date = new Date();
        this.songs = songs;
    }

    public int getSize() {
        return size;
    }

    public Date getDate() {
        return date;
    }

    public List<SongData> getSongs() {
        return songs;
    }
}
