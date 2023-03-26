package pe.edu.utp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import pe.edu.utp.models.SongData;

import java.io.File;
import java.util.HashMap;
import java.util.List;
import java.util.UUID;

@SpringBootApplication
public class Main {
    public static String mp3Directory = "C:\\Users\\luisb\\Music\\music-test";
    private static HashMap<String, SongData> songs = new HashMap<>();
    private static HashMap<String, byte[]> images = new HashMap<>();

    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);

        File directory = new File(mp3Directory);
        if (!directory.exists() || !directory.isDirectory()) {
            System.out.println("Directory not found.");
            return;
        }
        for (final File file : directory.listFiles()) {
            if (!file.getName().endsWith(".mp3")) continue;
            String songId = UUID.randomUUID().toString();
            SongData songData = SongData.BuildSongData(songId, file);
            if (songData != null) songs.put(songId, songData);
        }
        System.out.println(String.format("Register %s songs.", songs.size()));
    }

    public static HashMap<String, SongData> getSongs() {
        return songs;
    }

    public static HashMap<String, byte[]> getImages() {
        return images;
    }
}