package pe.edu.utp.controllers;

import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import pe.edu.utp.Main;
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

    @GetMapping(value = "/api/get")
    public ResponseEntity<Resource> getSong(@RequestParam(name = "file") String fileName) {
        File file = Paths.get(Main.mp3Directory, fileName).toFile();

        if (!file.exists()) return ResponseEntity.notFound().build();

        return ResponseEntity.ok()
                .header("Content-Disposition", "attachment; filename=" + fileName)
                .body(new FileSystemResource(file));
    }
}
