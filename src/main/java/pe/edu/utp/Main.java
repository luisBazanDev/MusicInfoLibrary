package pe.edu.utp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import pe.edu.utp.models.SongData;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@SpringBootApplication
public class Main {
    public static String mp3Directory = "C:\\Users\\luisb\\Music\\music-test";
    private static List<SongData> songs = new ArrayList<>();
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
            SongData songData = SongData.BuildSongData(file);
            if (songData != null) songs.add(songData);
        }
        System.out.println(String.format("Register %s songs.", songs.size()));
    }

    public static List<SongData> getSongs() {
        return songs;
    }

    public static HashMap<String, byte[]> getImages() {
        return images;
    }
}