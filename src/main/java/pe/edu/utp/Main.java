package pe.edu.utp;

import org.apache.commons.cli.CommandLine;
import org.apache.commons.cli.DefaultParser;
import org.apache.commons.cli.Options;
import org.apache.commons.cli.ParseException;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import pe.edu.utp.models.SongData;

import java.io.File;
import java.util.HashMap;
import java.util.UUID;

@SpringBootApplication
public class Main {
    public static String mp3Directory;
    private static Options options;
    private static HashMap<String, SongData> songs = new HashMap<>();
    private static HashMap<String, byte[]> images = new HashMap<>();

    public static void main(String[] args) {
        loadConfig();
        mp3Directory = getResourcesDirectory(args);

        if (mp3Directory == null) return;

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
        SpringApplication.run(Main.class, args);
    }

    private static void loadConfig() {
        options = new Options();
        options.addOption("r", "resources", true, "Resources directory");
    }

    private static String getResourcesDirectory(String[] args) {
        String directory = null;
        try {
            CommandLine commandLine = new DefaultParser().parse(options, args);
            if (commandLine.hasOption("r")) {
                directory = commandLine.getOptionValue("r");
            }
        } catch (Exception e) {
            System.out.println("Resource directory not found");
            e.printStackTrace();
            return null;
        }
        return directory;
    }

    public static HashMap<String, SongData> getSongs() {
        return songs;
    }

    public static HashMap<String, byte[]> getImages() {
        return images;
    }
}