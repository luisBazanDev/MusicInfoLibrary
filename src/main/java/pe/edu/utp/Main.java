package pe.edu.utp;

import pe.edu.utp.instances.SongData;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static String mp3Directory = "C:\\Users\\luisb\\Music\\music-test";
    private static List<SongData> songs = new ArrayList<>();

    public static void main(String[] args) {
        System.out.println("Hello world!");

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
}