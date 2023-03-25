package pe.edu.utp.controllers;

import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import pe.edu.utp.Main;
import pe.edu.utp.models.SongData;
import pe.edu.utp.models.api.ApiMessage;
import pe.edu.utp.models.api.ListSongs;

import java.io.File;
import java.nio.file.Paths;

@RestController
@CrossOrigin
public class APIController {
    @GetMapping(value = "/api")
    public ApiMessage apiWelcome() {
        return new ApiMessage("Welcome to the api!");
    }

    @GetMapping(value = "/api/list")
    public ListSongs listSongs() {
        return new ListSongs(Main.getSongs());
    }

    @GetMapping(value = "/api/*")
    public ApiMessage apiNotFound() {
        return new ApiMessage("Not Found");
    }

    @GetMapping(value = "/api/song")
    public ResponseEntity<Resource> getSong(@RequestParam(name = "name") String fileName) {
        File file = Paths.get(Main.mp3Directory, fileName).toFile();

        if (!file.exists()) return ResponseEntity.notFound().build();

        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");
        headers.add("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        headers.add("Access-Control-Allow-Headers", "Content-Type");
        headers.add("Content-Type", "audio/mpeg");

        return ResponseEntity.ok()
                .headers(headers)
                .header("Content-Disposition", "attachment; filename=" + fileName)
                .body(new FileSystemResource(file));
    }

    @GetMapping(value = "/api/image")
    public ResponseEntity<ByteArrayResource> getImage(@RequestParam(name = "id") String imageId) {
        byte[] imageData = Main.getImages().get(imageId);

        if (imageData == null) return ResponseEntity.notFound().build();

        return ResponseEntity.ok()
                .contentLength(imageData.length)
                .header("Content-type", "image/jpeg")
                .body(new ByteArrayResource(imageData));
    }
}
